export default async function ({
    name = '',
    path = '',
    type = 'one',
    callback = (item: any) => item?.body ?? [],
    errors = () => []
    //surround: {}
}) {
    const { locale } = useI18n()
    const payloadName = `${locale.value}-${name}`

    if (process.server) {
        switch (type) {
            case 'multi':
                useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
                    .find()
                    .then(callback)
                    .catch(errors)
                break

            //case 'surround':
            //    useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
            //        .findSurround(surround)
            //        .then(callback)
            //        .catch(errors)
            //    break

            default:
                useNuxtApp().payload.data[payloadName] = await queryContent(`/${locale.value}/${path}`)
                    .findOne()
                    .then(callback)
                    .catch(errors)
                break
        }
    }

    return useNuxtData(payloadName)?.data
}
