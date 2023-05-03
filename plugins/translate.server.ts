import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { generateRequestUrl, normaliseResponse } from 'google-translate-api-browser'
import data from '~/assets/index.graphql'
import { resolve, dirname } from 'path'
import axios from 'axios'
import { DocumentNode } from 'graphql'

import url from 'url'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dir = resolve(__dirname, '../assets/data')
const fileName = (name = '') => `${dir}/${name}.json`

const write = (name = '', data = []) => {
    if (!existsSync(fileName(name))) writeFileSync(fileName(name), JSON.stringify(data))
}

const read = (name = '') => {
    return existsSync(fileName(name)) ? JSON.parse(readFileSync(fileName(name), { encoding: 'utf8' })) : undefined
}

const comparison = (name = '', data = []) => {
    return !!read(name) && read(name).length === data.length ? read(name) : undefined
}

const translate = async (text = '', lang = { from: 'ru', to: 'en' }) => {
    const url = (await axios(generateRequestUrl(text, lang))) ?? {}
    return normaliseResponse(url?.data)?.text
    //return text
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const graphql = useStrapiGraphQL()
    const { asyncReduceArray, asyncReduceObject, itemIsArray } = useFunctions()

    const navSlugs = ['nav', 'footer', 'social']
    const langs = ['ru', 'en', 'zh']
    const defaultLang = 'ru'

    langs.filter((it) => !existsSync(`${dir}/${it}`)).map((it) => mkdirSync(`${dir}/${it}`))

    const fieldTranslate = async (field = '', lang = '', origin = [defaultLang], from = '') =>
        itemIsArray(lang, origin) || !field ? field : await translate(field, { from: from !== '' ? from : defaultLang, to: lang })

    const getGql = async (data: string | DocumentNode, field: string) => (await graphql(data))?.data?.[field]?.data?.map((it) => it?.attributes)

    const content = await asyncReduceObject(langs, async (lang: string | undefined) => {
        const getLinks = await getGql(data.links(), 'links')
        const getReffers = getLinks.filter(
            (link: { partnership: any; title: any; description: any; short: any }) => !!link?.partnership && !!link?.title && !!link?.description && !!link?.short
        )
        const getWorks = await getGql(data.works(), 'works')
        const getPublics = await getGql(data.publics(), 'publicateds')

        const getWorkTypes = await getGql(data.workTypes(), 'workTypes')
        const getWorkTags = await getGql(data.workTags(), 'workTags')
        const getWorkCategories = await getGql(data.workCategories(), 'workCategories')
        const getWorkTechnologies = await getGql(data.workTechnologies(), 'workTechnologies')

        const work_types =
            comparison(`${lang}/work_types`, getWorkTypes) ??
            (await asyncReduceArray(getWorkTypes, async (it) => [
                {
                    title: await fieldTranslate(it?.title, lang),
                    slug: it?.slug,
                },
            ]))

        write(`${lang}/work_types`, work_types)

        const work_technologies =
            comparison(`${lang}/work_technologies`, getWorkTechnologies) ??
            (await asyncReduceArray(getWorkTechnologies, async (it) => [
                {
                    title: await fieldTranslate(it?.title, lang, ['ru', 'en'], 'en'),
                    slug: it?.slug,
                },
            ]))

        write(`${lang}/work_technologies`, work_technologies)

        const work_tags =
            comparison(`${lang}/work_tags`, getWorkTags) ??
            (await asyncReduceArray(getWorkTags, async (it) => [
                {
                    title: await fieldTranslate(it?.title, lang),
                    slug: it?.slug,
                },
            ]))

        write(`${lang}/work_tags`, work_tags)

        const work_categories =
            comparison(`${lang}/work_categories`, getWorkCategories) ??
            (await asyncReduceArray(getWorkCategories, async (it) => [
                {
                    title: await fieldTranslate(it?.title, lang),
                    slug: it?.slug,
                    type: { title: work_types?.filter(({ slug }) => slug === it?.work_type?.data.attributes.slug)?.[0]?.title, slug: it?.work_type?.data.attributes.slug },
                    technologies: it?.work_technologies?.data.map(({ attributes: { slug } }) => work_technologies?.filter((it) => it.slug === slug)?.[0]?.title),
                },
            ]))

        write(`${lang}/work_categories`, work_categories)

        const links = comparison(`links`, getLinks) ?? getLinks.map((link) => ({ ferd: useCripty(link?.href), sh: link?.short }))

        write(`links`, links)

        const reffers =
            comparison(`${lang}/reffers`, getReffers) ??
            (await asyncReduceArray(getReffers, async (it) => [
                {
                    title: await fieldTranslate(it?.title, lang),
                    description: await fieldTranslate(it?.description, lang),
                    images: it?.imgs?.data?.map(({ attributes }) => attributes),
                    short: it?.short,
                    tags: it?.tags?.data
                        ?.map(({ attributes: { slug } }) => work_tags?.filter(({ slug: slug_w }) => slug_w === slug)?.[0]?.title)
                        ?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
                    top: it?.top,
                },
            ]))

        write(`${lang}/reffers`, reffers)

        const works =
            comparison(`${lang}/works`, getWorks) ??
            (
                await asyncReduceArray(getWorks, async (it) => [
                    {
                        ...it,
                        title: await fieldTranslate(it?.title, lang),
                        description: await fieldTranslate(it?.description, lang),

                        technologies: it?.assets?.work_technologies?.data.map(({ attributes: { slug } }) => work_technologies?.filter((it) => it.slug === slug)?.[0]?.title),
                        categories: it?.assets?.work_categories?.data.map(({ attributes: { slug } }) => work_categories?.filter((it) => it.slug === slug)?.[0]?.title),
                        fonts: it?.assets?.work_fonts?.data.map(({ attributes: { title } }) => title),
                        tags: it?.assets?.work_tags?.data.map(({ attributes: { slug } }) => work_tags?.filter((it) => it.slug === slug)?.[0]?.title),
                        type: work_types?.filter(({ slug }) => slug === it?.assets?.work_type?.data.attributes.slug)?.[0]?.title,

                        media: it?.media.data.map(({ attributes }) => {
                            const alt = attributes.alternativeText
                            delete attributes.alternativeText
                            return { ...attributes, alt }
                        }),
                    },
                ])
            )?.reverse()

        write(`${lang}/works`, works)

        const publics =
            comparison(`${lang}/publics`, getPublics) ??
            (await asyncReduceArray(getPublics, async (it) => [
                {
                    ...it,
                    title: await fieldTranslate(it?.title, lang),
                    description: await fieldTranslate(it?.description, lang),
                    keywords: await fieldTranslate(it?.keywords, lang),
                },
            ]))

        write(`${lang}/publics`, publics)

        const menu = await asyncReduceArray(navSlugs, async (nav: string | undefined) => {
            const getNav = await graphql(data.menu(nav))

            return [
                {
                    [`menu_${nav}`]:
                        comparison(`${lang}/menu_${nav}`, getNav) ??
                        (await asyncReduceArray(getNav?.data?.renderNavigation, async (it) => [
                            {
                                ...it,
                                title: await fieldTranslate(it?.title, lang),
                            },
                        ])),
                },
            ]
        })

        menu.map((it) => Object.entries(it).map(([key, val]) => write(`${lang}/${key}`, val)))

        const menus = menu.reduce((s, it) => (s = { ...s, ...it }) && s, {})

        return {
            [lang]: { links, reffers, works, publics, work_types, work_technologies, work_tags, work_categories, ...menus },
        }
    })

    nuxtApp.payload.data = content
})

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
