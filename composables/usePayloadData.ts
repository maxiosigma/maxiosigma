//import type { QueryBuilderWhere } from '@nuxt/content'
//<QueryBuilderWhere>

export default async function ({
    name = '',
    path = '',
    type = 'one' || 'multi',
    optionsWhere = {},
    callback = (items: any) =>
        type === 'multi'
            ? items?.map((item: any) => item?.body) ?? []
            : items?.map((item: any) => item?.body)?.[0] ?? {},
    errors = (err: any) => {
        console.log(err)
        return null
    }
}) {
    const { locale } = useI18n()
    const payloadName = `content-pl-${locale.value}-${name}`

    if (import.meta.server) {
        const data = await queryContent(`/${locale.value}/${path}`)
            .where({
                _path: `/${locale.value}/${path}`
            })
            .find()
            .then(callback)
            .catch(errors)

        useNuxtApp().payload.data[payloadName] = !!data ? data : []
    }

    return useNuxtData(payloadName)?.data
}
