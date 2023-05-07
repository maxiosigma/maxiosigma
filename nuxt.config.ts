//import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineNuxtConfig } from 'nuxt/config'
//import { resolve } from 'path'

export default defineNuxtConfig({
    ssr: true,
    //ssr: false,
    //debug: true,
    //devtools: true,
    telemetry: false,
    app: {
        rootId: 'app',
        rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/',
        layoutTransition: false,
        pageTransition: false,
    },
    alias: {
        'assets-data': resolve(__dirname, './assets/data'),
    },
    experimental: {
        inlineSSRStyles: false,
        payloadExtraction: true,
        treeshakeClientOnly: false,
        //renderJsonPayloads: true,
        //viewTransition: true,
        //noVueServer: true,
        //watcher: 'parcel',
    },
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[local]_[hash:base32:5]',
            },
        },
        resolve: {
            //alias: [{ find: '@data', replacement: fileURLToPath(new URL('./assets/data', import.meta.url)) }],
            //{ '~data': `${resolve(__dirname, './assets/data')}` },
        },
        plugins: [],
    },
    build: {
        transpile: ['animejs'],
    },
    content: {
    
    },
    //nitro: {
    //    preset: 'node',
    //    prerender: {
    //        ignore: [
    //            //        //
    //            //        '/assets/data',
    //            //        'assets/data/*.json',
    //            //        'assets/data/**/*.json',
    //            '**/*.json',
    //        ],
    //    },
    //},
    //ignore: ['assets/data/*.json', 'assets/data/**/*.json'],
    i18n: {
        lazy: false,
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            redirectOn: 'root',
        },
        customRoutes: 'config',
        pages: {
            link: false,
        },
        langDir: 'locales',
        locales: locales(),
    },
    //nuxtIcon: {
    //    size: '32px',
    //    class: 'icon',
    //    aliases: {
    //        nuxt: 'logos:nuxt-icon',
    //    },
    //},
    //windicss: {
    //    analyze: true,
    //},
    //pwa: {
    //},
    modules: [
        'nuxt-windicss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@nuxtjs/strapi',
        '@nuxtjs/device',
        //'nuxt-viewport',
        //"@nuxtjs/fontaine",
        //"@vueuse/motion",
        //"@vueuse/integrations",
        //"@vueuse/router",
        //'@dewib/xhr-cache',
        '@vite-pwa/nuxt',
        '@nuxt/content',
        'nuxt-icon',
        //"nuxt-schema-org",
        //"nuxt-full-static",
        //'@nuxt/devtools',

        //'@tailvue/nuxt',
        //'nuxt-og-image',
        //'nuxt-vue3-google-signin',
        //'@nuxtjs/robots',
        //'@nuxtjs/toast',
        //'nuxt-xstate',
    ],
    css: ['~/assets/index.scss'],
    hooks: {},
    //robots: {
    //    /* module options */
    //},
})

function locales() {
    const locales_pc = [
        { code: 'en', iso: 'en-ES', name: 'English', file: 'en.json' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
        { code: 'zh', iso: 'zh-CN', name: '中國人', file: 'zh.json' },
    ].map((it) => ({ ...it, name: it.code }))

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp' }
    })

    return [...locales_pc, ...locales_mobile]
}
