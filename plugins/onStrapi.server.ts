import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'path'
import data from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    const write = (name = '', data = []) => {
        const fileName = resolve(__dirname, `../assets/data/${name}.json`)
        writeFileSync(
            fileName,
            JSON.stringify(
                existsSync(fileName)
                    ? [...readFileSync(fileName), ...data.filter((d) => readFileSync(fileName).filter((r) => JSON.stringify(d) == JSON.stringify(r)).length === 0)]
                    : data
            )
        )
    }

    const graphql = useStrapiGraphQL()

    const publics = (await graphql(data.publics()))?.data.publicateds.data.map((it) => it.attributes) ?? []

    const links =
        (await graphql(data.links()))?.data.links.data.map((it) => ({
            ferd: useCripty(it?.attributes.href),
            sh: it?.attributes.short,
        })) ?? []

    const works =
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
            .reverse() ?? []

    write('links', links)
    write('publics', publics)
    write('works', works)

    nuxtApp.payload.data = { links, publics, works }
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
