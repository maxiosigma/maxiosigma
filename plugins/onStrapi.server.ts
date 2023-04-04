import data from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    const graphql = useStrapiGraphQL()

    const publics = (await graphql(data.publics()))?.data.publicateds.data.map((it) => it.attributes)

    const links = (await graphql(data.links()))?.data.links.data.map((it) => ({
        ferd: useCripty(it?.attributes.href),
        sh: it?.attributes.short,
    }))

    const works = (await graphql(data.works()))?.data.works.data
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
        .reverse()

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
