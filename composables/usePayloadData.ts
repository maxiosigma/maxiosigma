import type { QueryBuilderWhere } from '@nuxt/content'

export default async function ({
    name = '',
    path = '',
    type = 'one' || 'multi',
    optionsWhere = <QueryBuilderWhere>{},
    callback = (items: any) => items?.body ?? [],
    errors = () => []
}) {
    const { locale } = useI18n()
    const payloadName = `content-pl-${locale.value}-${name}`

    if (import.meta.server) {
        try {
            const preData = queryContent(`/${locale.value}/${path}`).where({
                _path: `/${locale.value}/${path}`
            })

            switch (type) {
                case 'multi':
                    useNuxtApp().payload.data[payloadName] = preData
                        .find()
                        .then(callback)
                        .catch(errors)
                    break
                default:
                    useNuxtApp().payload.data[payloadName] = preData
                        .findOne()
                        .then(callback)
                        .catch(errors)
                    break
            }
        } catch (error) {
            console.log(error)
            console.log(errors)
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
