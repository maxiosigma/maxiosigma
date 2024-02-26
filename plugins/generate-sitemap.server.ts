import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync } from 'fs'
import { Readable } from 'stream'

export default defineNuxtPlugin({
    name: 'generate-sitemap',
    parallel: false,
    enforce: 'pre',
    async setup(nuxtApp) {
        //const client = useSupabaseClient()
        //const localesCodes = nuxtApp.$config.locales.map(({ code }) => code)
        //...((await client.from('links').select('*')?.data) ?? []),

        const router = useRouter()
        const { sitemapName, siteUrl } = useAppConfig()

        const linksContent = useArrayUnique(
            (
                await queryContent(`/common/links`)
                    .find()
                    .catch(() => [])
            ).map((item) => `/go-to-${item?._path?.toLowerCase()?.replace('/common/links/', '') || item?.slug}`)
        ).value

        const routes = router.options.routes
            .map(({ path }) => path)
            .filter((path) => !path.includes(':') && !path.includes('admin'))

        const siteLinks = [...getSitemapUtm(routes, 0.5), ...getSitemapUtm(linksContent, 0.1)]
        const stream = new SitemapStream({ hostname: siteUrl })

        streamToPromise(Readable.from(siteLinks).pipe(stream)).then((data) => {
            const sitemap = data.toString()
            writeFileSync(`public/${sitemapName}`, sitemap)
        })
    },
    env: {
        islands: true
    }
})

function getSitemapUtm(array, priority = 0.3, changefreq = 'daily') {
    return array.map((url) => ({ url, changefreq, priority }))
}
