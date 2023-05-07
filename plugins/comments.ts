//const en = {
//    links: read('en/links') ?? ru.links,
//    reffers:
//        read('en/reffers') ??
//        (await asyncReduceArray(ru.reffers, async (it) => [
//            {
//                ...it,
//                title: it.title ? await translate(it.title, { from: 'ru', to: 'en' }) : null,
//                description: it.description ? await translate(it.description, { from: 'ru', to: 'en' }) : null,
//            },
//        ])),
//    works:
//        read('en/works') ??
//        (await asyncReduceArray(ru.works, async (it, i) => [
//            {
//                ...it,
//                title: it.title ? await translate(it.title, { from: 'ru', to: 'en' }) : null,
//                description: it.description ? await translate(it.description, { from: 'ru', to: 'en' }) : null,
//            },
//        ])),
//    publics:
//        read('en/publics') ??
//        (await asyncReduceArray(ru.publics, async (w, i) => {
//            return [
//                {
//                    ...w,
//                    title: w.title ? await translate(w.title, { from: 'ru', to: 'en' }) : null,
//                    description: w.description ? await translate(w.description, { from: 'ru', to: 'en' }) : null,
//                    keywords: w.keywords ? await translate(w.keywords, { from: 'ru', to: 'en' }) : null,
//                },
//            ]
//        })),
//    menu:
//        read('en/menu') ??
//        (await asyncReduceObject(Object.entries(ru.menu), async ([key, values]) => ({
//            [key]: await asyncReduceArray(values, async (v) => [{ ...v, title: v?.title ? await translate(v?.title, { from: 'ru', to: 'en' }) : null }]),
//        }))),
//}

//const zh = {
//    links: read('zh/links') ?? ru.links,
//    reffers:
//        read('en/reffers') ??
//        (await asyncReduceArray(ru.reffers, async (it) => [
//            {
//                ...it,
//                title: it.title ? await translate(it.title, { from: 'ru', to: 'zh' }) : null,
//                description: it.description ? await translate(it.description, { from: 'ru', to: 'zh' }) : null,
//            },
//        ])),
//    works:
//        read('zh/works') ??
//        (await asyncReduceArray(ru.works, async (w, i) => {
//            return [
//                {
//                    ...w,
//                    title: w.title ? await translate(w.title, { from: 'ru', to: 'zh' }) : null,
//                    description: w.description ? await translate(w.description, { from: 'ru', to: 'zh' }) : null,
//                },
//            ]
//        })),
//    publics:
//        read('zh/publics') ??
//        (await asyncReduceArray(ru.publics, async (w, i) => {
//            return [
//                {
//                    ...w,
//                    title: w.title ? await translate(w.title, { from: 'ru', to: 'zh' }) : null,
//                    description: w.description ? await translate(w.description, { from: 'ru', to: 'zh' }) : null,
//                    keywords: w.keywords ? await translate(w.keywords, { from: 'ru', to: 'zh' }) : null,
//                },
//            ]
//        })),
//    menu:
//        read('zh/menu') ??
//        (await asyncReduceObject(Object.entries(ru.menu), async ([key, values]) => ({
//            [key]: await asyncReduceArray(values, async (v) => [{ ...v, title: v?.title ? await translate(v?.title, { from: 'ru', to: 'zh' }) : null }]),
//        }))),
//}

//const result = { ru, en, zh }

//Object.values(result).map((it, i) => {
//    const l = Object.keys(result)[i]
//    const k = Object.keys(it)

//    k.map((kit) => {
//        write(`${l}/${kit}`, it?.[kit])
//    })
//})

//const ru = {
//    links:
//        (await graphql(data.links()))?.data.links.data.map(({ attributes }) => ({
//            ferd: useCripty(attributes.href),
//            sh: attributes.short,
//        })) || [],
//    reffers:
//        (await graphql(data.links()))?.data.links.data
//            .filter(({ attributes: link }) => !!link?.partnership && !!link?.title && !!link?.description && !!link?.short)
//            .map(({ attributes: link }) => ({
//                title: link?.title,
//                description: link?.description,
//                images: link?.imgs?.data?.map(({ attributes }) => attributes),
//                short: link?.short,
//                tags: link?.tags?.data?.map(({ attributes: { title } }) => title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
//                top: link?.top,
//            })) || [],
//    works:
//        (await graphql(data.works()))?.data.works.data
//            .map(({ attributes }) => ({
//                ...attributes,
//                assets: {
//                    fonts: attributes.assets.fonts.data.map((as) => as.attributes.title),
//                    models: attributes.assets.models.data.map((as) => as.attributes.title),
//                    technologies: attributes.assets.technologies.data.map((as) => as.attributes.title),
//                },
//                media: attributes.media.data.map((md) => {
//                    const alt = md.attributes.alternativeText
//                    delete md.attributes.alternativeText
//                    return { ...md.attributes, alt }
//                }),
//            }))
//            .reverse() || [],
//    publics: (await graphql(data.publics()))?.data.publicateds.data.map((it) => it.attributes) || [],
//    menu: await asyncReduceObject(navSlugs, async (it) => ({
//        [it]: (await graphql(data.menu(it)))?.data.renderNavigation,
//    })),
//}

//nuxtApp.payload.data = result

//nuxtApp.payload.data = {
//    ...useNuxtApp().payload.data,
//    links: await strapLinks(),
//    publics: await strapPublics(),
//    menu_footer: await strapMenuFooter(),
//    menu_social: await strapMenuNavSocial(),
//    menu_nav: await strapMenuNav(),
//    works: await strapWorks(),
//}

//writeFileSync(
//    fileName,
//    JSON.stringify(
//        existsSync(fileName)
//            ? [...readFileSync(fileName), ...data.filter((d) => readFileSync(fileName).filter((r) => JSON.stringify(d) == JSON.stringify(r)).length === 0)]
//            : data
//    )
//)

//   (await ru.works.reduce(async (sum, w, i) => {
//        const title = w.title ? await translate(w.title, { from: 'ru', to: 'en' }) : null
//        const description = w.description ? await translate(w.description, { from: 'ru', to: 'en' }) : null
//        return await sum.then(async (res) => {
//            return [...res, { ...w, title, description }]
//        })
//    }, Promise.resolve([]))),

//const dir = resolve(__dirname, '../assets/data')
//const fileName = (name = '') => `${dir}/${name}.json`
//const readFile = (name = '') => (existsSync(fileName(name)) ? JSON.parse(readFileSync(fileName(name), { encoding: 'utf8' })) : undefined)

//const getArticles = async () => await import('~/assets/data/links.json').then((m) => m.default || m)

//console.log(JSON.parse(readFileSync('../assets/data/links.json', 'utf8')))

//console.log(await importAssetsData('links'))

//console.log('AAAAAAA', await import(getDataUrl('links.json').href))

//console.log(import.meta.glob('/assets/data/**', { eager: true }))
//console.log(useAssetsData(`zn/reffers.json`))

//console.log(await getArticles())

//const { asyncReduceArray, asyncReduceObject, itemIsArray, importAssetsData, getDataUrl } = useFunctions()
//const navSlugs = ['nav', 'footer', 'social']
//const langs = ['ru', 'en', 'zh']
//const defaultLang = 'ru'
//const isStatic = !process.env.STATIC
//const content = await asyncReduceObject(langs, async (lang: string) => {
//    const links = useAssetsData('links.json')
//    const reffers = useAssetsData(`${lang}/reffers.json`)
//    const works = useAssetsData(`${lang}/works.json`)
//    const publics = useAssetsData(`${lang}/publics.json`)
//    const work_types = useAssetsData(`${lang}/work_types.json`)
//    const work_technologies = useAssetsData(`${lang}/work_technologies.json`)
//    const work_tags = useAssetsData(`${lang}/work_tags.json`)
//    const work_categories = useAssetsData(`${lang}/work_categories.json`)
//    return {
//        [lang]: { links, reffers, works, publics, work_types, work_technologies, work_tags, work_categories },
//    }
//})
//nuxtApp.payload.data = content

//    nuxtApp.payload.data = content

//        return {
//            [lang]: { links, reffers, works, publics, work_types, work_technologies, work_tags, work_categories, ...menus },
//        }

//const menus = menu.reduce((s, it) => (s = { ...s, ...it }) && s, {})

export default defineNuxtPlugin(async (nuxtApp) => {})
