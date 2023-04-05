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
    const { asyncReduceArray } = useFunctions()

    const ru = {
        works:
            (await graphql(data.works()))?.data.works.data
                .map(({ attributes }) => ({
                    ...attributes,
                    assets: {
                        fonts: attributes.assets.fonts.data.map((as) => as.attributes.title),
                        models: attributes.assets.models.data.map((as) => as.attributes.title),
                        technologies: attributes.assets.technologies.data.map((as) => as.attributes.title),
                    },
                    media: attributes.media.data.map((md) => {
                        const alt = md.attributes.alternativeText
                        delete md.attributes.alternativeText
                        return { ...md.attributes, alt }
                    }),
                }))
                .reverse() || [],
        links:
            (await graphql(data.links()))?.data.links.data.map((it) => ({
                ferd: useCripty(it?.attributes.href),
                sh: it?.attributes.short,
            })) || [],

        publics: (await graphql(data.publics()))?.data.publicateds.data.map((it) => it.attributes) || [],
    }

    const en = {
        links: read('en/links') ?? ru.links,
        works:
            read('en/works') ??
            (await asyncReduceArray(ru.works, async (w, i) => {
                return [
                    {
                        ...w,
                        title: w.title ? await translate(w.title, { from: 'ru', to: 'en' }) : null,
                        description: w.description ? await translate(w.description, { from: 'ru', to: 'en' }) : null,
                    },
                ]
            })),
        publics:
            read('en/publics') ??
            (await asyncReduceArray(ru.publics, async (w, i) => {
                return [
                    {
                        ...w,
                        title: w.title ? await translate(w.title, { from: 'ru', to: 'en' }) : null,
                        description: w.description ? await translate(w.description, { from: 'ru', to: 'en' }) : null,
                        keywords: w.keywords ? await translate(w.keywords, { from: 'ru', to: 'en' }) : null,
                    },
                ]
            })),
    }

    const zh = {
        links: read('zh/links') ?? ru.links,
        works:
            read('zh/works') ??
            (await asyncReduceArray(ru.works, async (w, i) => {
                return [
                    {
                        ...w,
                        title: w.title ? await translate(w.title, { from: 'ru', to: 'zh' }) : null,
                        description: w.description ? await translate(w.description, { from: 'ru', to: 'zh' }) : null,
                    },
                ]
            })),
        publics:
            read('zh/publics') ??
            (await asyncReduceArray(ru.publics, async (w, i) => {
                return [
                    {
                        ...w,
                        title: w.title ? await translate(w.title, { from: 'ru', to: 'zh' }) : null,
                        description: w.description ? await translate(w.description, { from: 'ru', to: 'zh' }) : null,
                        keywords: w.keywords ? await translate(w.keywords, { from: 'ru', to: 'zh' }) : null,
                    },
                ]
            })),
    }

    const result = { ru, en, zh }

    Object.values(result).map((it, i) => {
        const l = Object.keys(result)[i]
        write(`${l}/works`, it.works)
        write(`${l}/links`, it.links)
        write(`${l}/publics`, it.publics)
    })

    nuxtApp.payload.data = { ru, en, zh }
})

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
