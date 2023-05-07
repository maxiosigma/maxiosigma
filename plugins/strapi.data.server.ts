export default defineNuxtPlugin(async (nuxtApp) => {
    const { asyncReduceArray, asyncReduceObject, itemIsArray, importAssetsData, getDataUrl } = useFunctions()
    const navSlugs = ['nav', 'footer', 'social']
    const langs = ['ru', 'en', 'zh']
    //    .reduce((sum, lang) => {
    //    sum.push(lang)
    //    sum.push(`${lang}-amp`)
    //    return sum
    //}, [])

    const getContent = async (name = '') => await queryContent().where({ _file: name }).findOne()

    //console.log(langs)

    //const locales = useI18n()?.locales
    //console.log(locales)

    //const isStatic = !process.env.S_STATIC

    const links = getContent('links.json')

    const content = await asyncReduceObject(langs, async (lang: string) => {
        const reffers = getContent(`${lang}/reffers.json`)
        const works = getContent(`${lang}/works.json`)
        const publics = getContent(`${lang}/publics.json`)
        const work_types = getContent(`${lang}/work_types.json`)
        const work_technologies = getContent(`${lang}/work_technologies.json`)
        const work_tags = getContent(`${lang}/work_tags.json`)
        const work_categories = getContent(`${lang}/work_categories.json`)

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
