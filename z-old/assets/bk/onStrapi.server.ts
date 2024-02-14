import data from '~/z-old/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.server) {
        const graphql = useStrapiGraphQL()
        const links = graphql(data.links())

        console.log(links)
        nuxtApp.payload.data = { links }
    }

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
