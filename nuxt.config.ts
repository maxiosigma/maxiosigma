//import WindiCSS from 'vite-plugin-windicss'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: true,
    //debug: true,
    telemetry: false,
    app: {
        rootId: 'app',
        rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/',
        layoutTransition: false,
        pageTransition: false,
    },
    experimental: {
        inlineSSRStyles: false,
        payloadExtraction: true,
        treeshakeClientOnly: false,
    },
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[local]_[hash:base32:5]',
            },
        },
        plugins: [],
    },
    build: {
        transpile: ['animejs'],
    },
    i18n: {
        lazy: false,
        strategy: 'prefix_and_default',
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: ['ru'],
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
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
    windicss: {
        analyze: true,
    },
    modules: [
        'nuxt-windicss',
        '@nuxtjs/i18n',
        '@nuxtjs/strapi',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        //'nuxt-viewport',
        //"@nuxtjs/fontaine",
        //"@vueuse/motion",
        //"@vueuse/integrations",
        //"@vueuse/router",
        //'@dewib/xhr-cache',
        'nuxt-icon',
        //"nuxt-schema-org",
        //"nuxt-full-static",
        //'@nuxt/devtools',
    ],
    css: ['~/assets/index.scss'],
    hooks: {},
})

function locales() {
    const locales_pc = [
        { code: 'en', iso: 'en-ES', name: 'English', file: 'en.json' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
    ]

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp' }
    })

    return [...locales_pc, ...locales_mobile]
}
