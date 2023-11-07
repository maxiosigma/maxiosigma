import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

const i18n_config = {
    cookieKey: 'lang',
    locales: locales(),
    defaultLocale: 'en',
}

export default defineNuxtConfig({
    ssr: true,
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
    },
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[local]-[hash:base32:5]',
            },
        },
        resolve: {},
        plugins: [],
    },
    build: {
        transpile: [
            //
            'animejs',
            'primevue',
        ],
    },
    generate: {},
    i18n: {
        lazy: false,
        strategy: 'prefix',
        defaultLocale: i18n_config.defaultLocale,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: i18n_config.cookieKey,
            redirectOn: 'all',
        },
        pages: {
            link: false,
        },
        langDir: 'locales',
        customRoutes: 'config',
        locales: i18n_config.locales,
    },
    sourcemap: {
        server: true,
        client: true,
    },
    content: {
        locales: i18n_config.locales.map((l) => l.code),
        defaultLocale: i18n_config.defaultLocale,
    },
    runtimeConfig: {
        public: { i18n_config },
    },
    modules: [
        //
        'nuxt-windicss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@nuxtjs/strapi',
        '@nuxtjs/device',
        '@nuxt/devtools',
        '@formkit/nuxt',
        '@nuxt/content',
        'nuxt-icon',
    ],
    css: ['~/assets/index.scss'],
    hooks: {},
})

function locales() {
    const locales_pc = [
        { code: 'zh', iso: 'zh-CN', name: '中國人' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский' },
        { code: 'en', iso: 'en-ES', name: 'English' },
    ].map((it) => ({ ...it, code_: it.code, file: it.code + '.json' }))

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp', file: locale.code + '-amp.json' }
    })

    return [...locales_pc, ...locales_mobile]
}
