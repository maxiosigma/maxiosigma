import type { QueryBuilderWhere } from '@nuxt/content'

export default async function ({
    name = '',
    path = '',
    type = 'one' || 'multi',
    optionsWhere = <QueryBuilderWhere>{},
    callback = (items: any) =>
        type === 'multi'
            ? items.map((item: any) => item?.body) ?? []
            : items.map((item: any) => item?.body)?.[0] ?? {},
    errors = (err: any) => {
        console.log(err)
        return null
    }
}) {
    const { locale } = useI18n()
    const payloadName = `content-pl-${locale.value}-${name}`

    if (process.server) {
        //if (path === 'works_categories')
        //    console.log(
        //        await queryContent(`/${locale.value}/${path}`)
        //            .where({
        //                _path: `/${locale.value}/${path}`
        //            })
        //            .find()
        //    )

        useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
            .where({
                _path: `/${locale.value}/${path}`
            })
            .find()
            .then(callback)
            .catch(errors)
    }

    return useNuxtData(payloadName)?.data
}

//case 'surround':
//    useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
//        .findSurround(surround)
//        .then(callback)
//        .catch(errors)
//    break
