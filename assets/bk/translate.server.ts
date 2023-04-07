import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { generateRequestUrl, normaliseResponse } from 'google-translate-api-browser'
import data from '~/assets/index.graphql'
import { resolve } from 'path'
import axios from 'axios'

const write = (name = '', data = []) => {
    const fileName = resolve(__dirname, `../assets/data/${name}.json`)
    if (!existsSync(fileName)) writeFileSync(fileName, JSON.stringify(data))
}

const read = (name = '') => {
    const fileName = resolve(__dirname, `../assets/data/${name}.json`)
    return existsSync(fileName) ? JSON.parse(readFileSync(fileName, { encoding: 'utf8' })) : undefined
}

const translate = async (text = '', lang = { from: 'ru', to: 'en' }) => {
    const url = (await axios(generateRequestUrl(text, lang))) ?? {}
    return normaliseResponse(url?.data)?.text
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const graphql = useStrapiGraphQL()
    const { asyncReduceArray, asyncReduceObject } = useFunctions()

    const navSlugs = ['nav', 'footer', 'social']
    const defaultLang = 'ru'
    const langs = ['ru', 'en', 'zh']

    const fieldTranslate = async (field = '', lang = '') => (lang === defaultLang || !field ? field : await translate(field, { from: 'ru', to: lang }))

    const content = await asyncReduceArray(langs, async (lang = '') => {
        const links = read(`${lang}/links`) ?? (await graphql(data.links()))?.data.links.data.map(({ attributes: link = {} }) => ({ ferd: useCripty(link?.href), sh: link?.short }))
        //const reffers =
        //    read(`${lang}/reffers`) ??
        //    (await asyncReduceArray(
        //        (await graphql(data.links()))?.data.links.data.filter(({ attributes: link = {} }) => !!link?.partnership && !!link?.title && !!link?.description && !!link?.short),
        //        async ({ attributes: link = {} }) => [
        //            {
        //                title: await fieldTranslate(link?.title, lang),
        //                description: await fieldTranslate(link?.description, lang),
        //                images: link?.imgs?.data?.map(({ attributes }) => attributes),
        //                short: link?.short,
        //                tags: link?.tags?.data?.map(({ attributes: { title } }) => title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
        //                top: link?.top,
        //            },
        //        ]
        //    ))

        //const works =
        //    read(`${lang}/works`) ??
        //    (
        //        await asyncReduceArray((await graphql(data.works()))?.data.works.data, async ({ attributes: { assets, media } }) => [
        //            {
        //                ...attributes,
        //                assets: {
        //                    fonts: assets.fonts.data.map((as) => as.attributes.title),
        //                    models: assets.models.data.map((as) => as.attributes.title),
        //                    technologies: assets.technologies.data.map((as) => as.attributes.title),
        //                },
        //                media: media.data.map((md) => {
        //                    const alt = md.attributes.alternativeText
        //                    delete md.attributes.alternativeText
        //                    return { ...md.attributes, alt }
        //                }),
        //            },
        //        ])
        //    )?.reverse()

        write(`${lang}/links`, links)
    })
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
