import { resolve } from 'path'
import { mkdirSync, writeFileSync, existsSync } from 'fs'

const isGenerateMode = process.argv.includes('generate')

export default defineNuxtConfig({
    ssr: true,
    telemetry: false,
    app: {
        rootId: 'app',
        rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/',
        layoutTransition: false,
        pageTransition: false
    },
    alias: {
        'assets-data': resolve(__dirname, './assets/data')
    },
    experimental: {
        //inlineSSRStyles: false,
        payloadExtraction: true,
        treeshakeClientOnly: false
    },
    features: {
        inlineStyles: false
    },
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[local]-[hash:base32:5]'
            }
        },
        resolve: {},
        plugins: []
    },
    build: {
        transpile: [
            //
            //'animejs',
            //'primevue'
        ]
    },
    //...(isGenerateMode
    //    ? {
    //          ignore: ['**/api/**', '**/admin/**'],
    //      }
    //    : {}),
    i18n: {
        lazy: false,
        defaultLocale: 'ru',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            alwaysRedirect: false,
            redirectOn: 'root'
            //redirectOn: 'all'
        },
        pages: {
            link: false
        },
        langDir: 'locales',
        customRoutes: 'config',
        locales: locales()
    },
    sourcemap: {
        server: true,
        client: true
    },
    content: {
        //locales: i18n_config.locales.map((l) => l.code),
        //defaultLocale: i18n_config.defaultLocale,
    },
    runtimeConfig: {
        //public: { i18n_config }
    },
    modules: [
        //
        //'nuxt-windicss',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        'nuxt-primevue',
        '@formkit/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',

        '@nuxtjs/i18n',
        '@nuxt/content'
    ],
    primevue: {
        options: { ripple: true },
        components: {
            prefix: 'Prime',
            include: ['Button', 'DataTable', 'FloatLabel', 'InputText']
        },
        directives: {
            prefix: 'p-',
            include: ['Ripple', 'Tooltip']
        }
    },
    css: ['~/assets/index.scss'],
    hooks: {}
})

function locales() {
    const locales_pc = [
        { code: 'ru', iso: 'ru-RU', name: 'Русский' },
        { code: 'en', iso: 'en-ES', name: 'English' },
        { code: 'zh', iso: 'zh-CN', name: '中國人' }
    ].map((it) => ({ ...it, code_: it.code, file: it.code + '.json' }))

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp', file: locale.code + '-amp.json' }
    })

    const locales = [...locales_pc, ...locales_mobile]

    if (!existsSync('./locales')) mkdirSync('./locales')
    if (!existsSync('./content')) mkdirSync('./content')

    locales.map(({ file, code }) => {
        !existsSync(`./locales/${file}`) ? writeFileSync(`./locales/${file}`, '{}') : null
        !existsSync(`./content/${code}`) ? mkdirSync(`./content/${code}`) : null
    })

    return locales
}
