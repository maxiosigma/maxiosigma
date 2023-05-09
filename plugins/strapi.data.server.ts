export default defineNuxtPlugin(async (nuxtApp) => {
    //console.log(useI18n())
    nuxtApp.$config.public.langs
})

//{
//    order: 0,
//    enforce: 'pre',
//    name: 'strapi_data',
//    async setup(nuxtApp){}
//}
//const { asyncReduceArray, asyncReduceObject, itemIsArray, importAssetsData, getDataUrl } = useFunctions()
//const navSlugs = ['nav', 'footer', 'social']
//const langs = ['ru', 'en', 'zh']
//    .reduce((sum, lang) => {
//    sum.push(lang)
//    sum.push(`${lang}-amp`)
//    return sum
//}, [])
//const getContent = async (name = '') => (await queryContent().where({ _file: name }).findOne())?.body
//console.log(langs)
//const locales = useI18n()?.locales
//console.log(locales)
//const isStatic = !process.env.S_STATIC
//const content = await asyncReduceObject(langs, async (lang: string) => {
//    const links = await getContent('links.json')
//    const reffers = await getContent(`${lang}/reffers.json`)
//    const works = await getContent(`${lang}/works.json`)
//    const publics = await getContent(`${lang}/publics.json`)
//    const work_types = await getContent(`${lang}/work_types.json`)
//    const work_technologies = await getContent(`${lang}/work_technologies.json`)
//    const work_tags = await getContent(`${lang}/work_tags.json`)
//    const work_categories = await getContent(`${lang}/work_categories.json`)
//    const result = { links, reffers, works, publics, work_types, work_technologies, work_tags, work_categories }
//    return {
//        [lang]: result,
//        //[`${lang}-amp`]: result,
//    }
//})
//nuxtApp.payload.data = content
