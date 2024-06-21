import type { QueryBuilderWhere } from '@nuxt/content/types'

export default async function ({
    name = '',
    path = '',
    type = 'one' || 'multi',
    optionsWhere = <QueryBuilderWhere>{},
    callback = (item: any) => item?.body ?? [],
    errors = () => []
}) {
    const { locale } = useI18n()
    const payloadName = `${locale.value}-${name}`

    if (path === 'works')
        console.log(
            await queryContent(`/${locale.value}/${path}`)
                .where({
                    //_path: `/${locale.value}/${path}`,
                    _file: `/${locale.value}/${path}.json`
                })
                .findOne()
        )

    if (import.meta.server) {
        try {
            //const { data } = await useAsyncData(`server-content-${locale.value}-${path}`, () =>
            //    queryContent(`/${locale.value}/${path}`).find()
            //)

            switch (type) {
                case 'multi':
                    useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
                        .where({
                            ...optionsWhere,
                            _path: `/${locale.value}/${path}`
                        })
                        .find()
                        .then(callback)
                        .catch(errors)
                    break

                default:
                    useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
                        .where({
                            ...optionsWhere,
                            _path: `/${locale.value}/${path}`
                        })
                        .findOne()
                        .then(callback)
                        .catch(errors)
                    break
            }
        } catch (error) {
            console.log(error)
        }
    }

    return useNuxtData(payloadName)?.data
}

//case 'surround':
//    useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
//        .findSurround(surround)
//        .then(callback)
//        .catch(errors)
//    break
