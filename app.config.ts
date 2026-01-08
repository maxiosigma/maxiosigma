export default defineAppConfig({
    title: import.meta.env.AppTitle ?? '',
    sitemap: import.meta.env.AppSitemap ?? '',
    url: import.meta.env.AppUrl ?? ''
})
