import sitemap from 'sitemap'

export default defineNuxtPlugin({
    name: 'generate-sitemap',
    parallel: false,
    enforce: 'pre',
    async setup(nuxtApp) {
        //const client = useSupabaseClient()
        //const localesCodes = nuxtApp.$config.locales.map(({ code }) => code)
        //const links = useArrayUnique(
        //    [
        //        //...((await client.from('links').select('*')?.data) ?? []),
        //        ...(await queryContent(`/common/links`)
        //            .find()
        //            .catch(() => []))
        //    ].map((item) => `/go-to-${item?.title?.toLowerCase() || item?.slug}`)
        //).value

        const router = useRouter()
        const routes = router.options.routes.map(({ path }) => path).filter((path) => !path.includes(':'))

        //console.log(routes)
        console.log(sitemap)
    },
    env: {
        islands: true
    }
})
