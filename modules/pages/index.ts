import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
    setup(options, nuxt) {
        //const { resolve } = createResolver(import.meta.url)
        //nuxt.hook('pages:extend', (pages) => {
        //    pages.push({
        //        name: 'go-to-mw',
        //        path: '/go-to-mw',
        //        file: resolve(__dirname, './pages/go-to-[slug].vue')
        //    })
        //})
        //nuxt.hook('sitemap:resolved', (ctx) => {
        //    console.log(ctx)
        //})
        //nuxt.hook('pages:extend', (pages) => {
        //    pages.push({
        //        name: 'go-to-mw',
        //        path: '/go-to-mw',
        //        file: '~/pages/go-to-[slug].vue'
        //    })
        //})
    }
})
