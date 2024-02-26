//export default defineNuxtPlugin(async (nuxtApp) => {
//    //console.log(nuxtApp)
//    ////'pages:extend'
//    //console.log('aaaa')
//    //nuxtApp.hook('page:start', (pages) => {
//    //    console.log(pages)
//    //})
//    //return nuxtApp
//    //
//    const { locales } = useI18n()
//    //const client = useSupabaseClient()
//    const links = useArrayUnique(
//        [
//            //...((await client.from('links').select('*')?.data) ?? []),
//            ...(await queryContent(`/common/links`)
//                .find()
//                .catch(() => []))
//        ].map((item) => `/go-to-${item?.title?.toLowerCase() || item?.slug}`)
//    )
//    console.log(locales, links)
//})

import sitemap from 'sitemap'

export default defineNuxtPlugin({
    name: 'generate-sitemap',
    enforce: 'pre',
    async setup(nuxtApp) {
        const client = useSupabaseClient()
        const locales = nuxtApp.vueApp.$nuxt.$i18n.locales.value.map(({ iso }) => iso.toLowerCase())

        const links = useArrayUnique(
            [
                //...((await client.from('links').select('*')?.data) ?? []),
                ...(await queryContent(`/common/links`)
                    .find()
                    .catch(() => []))
            ].map((item) => `/go-to-${item?.title?.toLowerCase() || item?.slug}`)
        ).value

        //console.log(links)
        console.log(sitemap)
    },
    hooks: {
        'app:created'() {
            //const nuxtApp = useNuxtApp()
        }
    },
    env: {
        islands: true
    }
})
