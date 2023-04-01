import data from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    const graphql = useStrapiGraphQL()

    const links = (await graphql(data.links()))?.data.links.data.map((it) => ({
        ferd: useCripty(it?.attributes.href),
        sh: it?.attributes.short,
    }))

    const publics = (await graphql(data.publics()))?.data.publicateds.data.map((it) => it.attributes)

    //const gql = (await graphql(query()))?.data;
    //const result = gql.publicateds.data.map((it) => it.attributes);

    nuxtApp.payload.data = { links, publics }

    //nuxtApp.payload.data = {
    //    ...useNuxtApp().payload.data,
    //    links: await strapLinks(),
    //    publics: await strapPublics(),
    //    menu_footer: await strapMenuFooter(),
    //    menu_social: await strapMenuNavSocial(),
    //    menu_nav: await strapMenuNav(),
    //    works: await strapWorks(),
    //}
})
