import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { generateRequestUrl, normaliseResponse } from 'google-translate-api-browser'
import data_gql from '~/z-old/assets/index.graphql'
import { resolve } from 'path'
import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => {
    const toStrapi = process.env.STRAPI_TO
    //console.log('toStrapi', toStrapi)

    if (toStrapi) {
        const graphql = useStrapiGraphQL()
        const { asyncReduceArray, asyncReduceObject, itemIsArray } = useFunctions()

        const dir = resolve(__dirname, '../content')
        const fileName = (name = '') => `${dir}/${name}.json`

        const write = (name = '', data = []) =>
            !existsSync(fileName(name)) ? writeFileSync(fileName(name), JSON.stringify(data)) : undefined
        const read = (name = '') =>
            existsSync(fileName(name)) ? JSON.parse(readFileSync(fileName(name), { encoding: 'utf8' })) : undefined
        const comparison = (name = '', data = []) =>
            !!read(name) && read(name).length === data.length ? read(name) : undefined
        const translate = async (text = '', lang = { from: 'ru', to: 'en' }) =>
            normaliseResponse(((await axios(generateRequestUrl(text, lang))) ?? {})?.data)?.text

        const navSlugs = ['nav', 'footer', 'social']
        const langs = ['ru', 'en', 'zh']
        const defaultLang = 'ru'

        langs.filter((it) => !existsSync(`${dir}/${it}`)).map((it) => mkdirSync(`${dir}/${it}`))

        const fieldTranslate = async (field = '', lang = '', origin = [defaultLang], from = '') =>
            itemIsArray(lang, origin) || !field
                ? field
                : await translate(field, { from: from !== '' ? from : defaultLang, to: lang })

        const getGql = async (data: string, field: string) =>
            (await graphql(data))?.data?.[field]?.data?.map((it) => it?.attributes)

        const content = await asyncReduceObject(langs, async (lang: string | undefined) => {
            const getLinks = await getGql(data_gql.links(), 'links')
            const getReffers = getLinks.filter(
                (link: { partnership: any; title: any; description: any; short: any }) =>
                    !!link?.partnership && !!link?.title && !!link?.description && !!link?.short
            )
            const getWorks = await getGql(data_gql.works(), 'works')
            const getPublics = await getGql(data_gql.publics(), 'publicateds')

            const getWorkTypes = await getGql(data_gql.workTypes(), 'workTypes')
            const getWorkTags = await getGql(data_gql.workTags(), 'workTags')
            const getWorkCategories = await getGql(data_gql.workCategories(), 'workCategories')
            const getWorkTechnologies = await getGql(data_gql.workTechnologies(), 'workTechnologies')

            const work_types =
                comparison(`${lang}/work_types`, getWorkTypes) ??
                (await asyncReduceArray(getWorkTypes, async (it) => [
                    {
                        title: await fieldTranslate(it?.title, lang),
                        slug: it?.slug
                    }
                ]))

            const work_technologies =
                comparison(`${lang}/work_technologies`, getWorkTechnologies) ??
                (await asyncReduceArray(getWorkTechnologies, async (it) => [
                    {
                        title: await fieldTranslate(it?.title, lang, ['ru', 'en'], 'en'),
                        slug: it?.slug
                    }
                ]))

            const work_tags =
                comparison(`${lang}/work_tags`, getWorkTags) ??
                (await asyncReduceArray(getWorkTags, async (it) => [
                    {
                        title: await fieldTranslate(it?.title, lang),
                        slug: it?.slug
                    }
                ]))

            const work_categories =
                comparison(`${lang}/work_categories`, getWorkCategories) ??
                (await asyncReduceArray(getWorkCategories, async (it) => [
                    {
                        title: await fieldTranslate(it?.title, lang),
                        slug: it?.slug,
                        type: {
                            title: work_types?.filter(({ slug }) => slug === it?.work_type?.data.attributes.slug)?.[0]
                                ?.title,
                            slug: it?.work_type?.data.attributes.slug
                        },
                        technologies: it?.work_technologies?.data.map(
                            ({ attributes: { slug } }) =>
                                work_technologies?.filter((it) => it.slug === slug)?.[0]?.title
                        )
                    }
                ]))

            const links =
                comparison(`links`, getLinks) ??
                getLinks.map((link) => ({ ferd: useCripty(link?.href), sh: link?.short }))

            const reffers =
                comparison(`${lang}/reffers`, getReffers) ??
                (await asyncReduceArray(getReffers, async (it) => [
                    {
                        title: await fieldTranslate(it?.title, lang),
                        description: await fieldTranslate(it?.description, lang),
                        images: it?.imgs?.data?.map(({ attributes }) => attributes),
                        short: it?.short,
                        tags: it?.tags?.data
                            ?.map(
                                ({ attributes: { slug } }) =>
                                    work_tags?.filter(({ slug: slug_w }) => slug_w === slug)?.[0]?.title
                            )
                            ?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
                        top: it?.top
                    }
                ]))

            const works =
                comparison(`${lang}/works`, getWorks) ??
                (
                    await asyncReduceArray(getWorks, async (it) => [
                        {
                            ...it,
                            title: await fieldTranslate(it?.title, lang),
                            description: await fieldTranslate(it?.description, lang),

                            technologies: it?.assets?.work_technologies?.data.map(
                                ({ attributes: { slug } }) =>
                                    work_technologies?.filter((it) => it.slug === slug)?.[0]?.title
                            ),
                            categories: it?.assets?.work_categories?.data.map(
                                ({ attributes: { slug } }) =>
                                    work_categories?.filter((it) => it.slug === slug)?.[0]?.title
                            ),
                            fonts: it?.assets?.work_fonts?.data.map(({ attributes: { title } }) => title),
                            tags: it?.assets?.work_tags?.data.map(
                                ({ attributes: { slug } }) => work_tags?.filter((it) => it.slug === slug)?.[0]?.title
                            ),
                            type: work_types?.filter(
                                ({ slug }) => slug === it?.assets?.work_type?.data.attributes.slug
                            )?.[0]?.title,

                            media: it?.media.data.map(({ attributes }) => {
                                const alt = attributes.alternativeText
                                delete attributes.alternativeText
                                return { ...attributes, alt }
                            })
                        }
                    ])
                )?.reverse()

            const publics =
                comparison(`${lang}/publics`, getPublics) ??
                (await asyncReduceArray(getPublics, async (it) => [
                    {
                        ...it,
                        title: await fieldTranslate(it?.title, lang),
                        description: await fieldTranslate(it?.description, lang),
                        keywords: await fieldTranslate(it?.keywords, lang)
                    }
                ]))

            const menu = await asyncReduceArray(navSlugs, async (nav: string | undefined) => {
                const getNav = await graphql(data_gql.menu(nav))

                return [
                    {
                        [`menu_${nav}`]:
                            comparison(`${lang}/menu_${nav}`, getNav) ??
                            (await asyncReduceArray(getNav?.data?.renderNavigation, async (it) => [
                                {
                                    ...it,
                                    title: await fieldTranslate(it?.title, lang)
                                }
                            ]))
                    }
                ]
            })

            menu.map((it) => Object.entries(it).map(([key, val]) => write(`${lang}/${key}`, val)))
            write(`${lang}/work_technologies`, work_technologies)
            write(`${lang}/work_categories`, work_categories)
            write(`${lang}/work_types`, work_types)
            write(`${lang}/work_tags`, work_tags)
            write(`${lang}/reffers`, reffers)
            write(`${lang}/publics`, publics)
            write(`${lang}/works`, works)
            write(`links`, links)
        })
    }
})
