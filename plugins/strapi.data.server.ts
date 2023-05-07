export default defineNuxtPlugin(async (nuxtApp) => {
    const { asyncReduceArray, asyncReduceObject, itemIsArray, importAssetsData, getDataUrl } = useFunctions()
    const navSlugs = ['nav', 'footer', 'social']
    const langs = ['ru', 'en', 'zh'].reduce((sum, lang) => sum.push(lang) && sum.push(`${lang}-amp`) && sum, [])

    //const locales = useI18n()?.locales
    //console.log(locales)

    //const isStatic = !process.env.S_STATIC

    const content = await asyncReduceObject(langs, async (lang: string) => {
        const links = useAssetsData('links.json')
        const reffers = useAssetsData(`${lang}/reffers.json`)
        const works = useAssetsData(`${lang}/works.json`)
        const publics = useAssetsData(`${lang}/publics.json`)
        const work_types = useAssetsData(`${lang}/work_types.json`)
        const work_technologies = useAssetsData(`${lang}/work_technologies.json`)
        const work_tags = useAssetsData(`${lang}/work_tags.json`)
        const work_categories = useAssetsData(`${lang}/work_categories.json`)

        const result = { links, reffers, works, publics, work_types, work_technologies, work_tags, work_categories }

        return {
            [lang]: result,
            //[`${lang}-amp`]: result,
        }
    })

    nuxtApp.payload.data = content
})

//{
//    order: 0,
//    enforce: 'pre',
//    name: 'strapi_data',
//    async setup(nuxtApp){}
//}
