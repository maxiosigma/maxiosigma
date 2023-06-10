//import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineNuxtConfig } from 'nuxt/config'
//import { resolve } from 'path'

const i18n_config = {
    cookieKey: 'lang',
    locales: locales(),
    defaultLocale: 'en',
}

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
                generateScopedName: '[local]-[hash:base32:5]',
            },
        },
        resolve: {
            //alias: [{ find: '@data', replacement: fileURLToPath(new URL('./assets/data', import.meta.url)) }],
            //{ '~data': `${resolve(__dirname, './assets/data')}` },
        },
        plugins: [],
    },
    build: {
        transpile: ['animejs', 'primevue'],
    },
    generate: {
        //exclude: [],
        //minify: {
        //    collapseWhitespace: false,
        //},
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
        defaultLocale: i18n_config.defaultLocale,
        //strategy: 'prefix_and_default',
        strategy: 'prefix',
        //vueI18n: './i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: i18n_config.cookieKey,
            redirectOn: 'all',
            //cookieCrossOrigin: true,
            //alwaysRedirect: true,
            //fallbackLocale: 'ru',
        },
        customRoutes: 'config',
        pages: {
            link: false,
        },
        langDir: 'locales',
        locales: i18n_config.locales,
    },
    sourcemap: {
        server: true,
        client: true,
    },
    content: {
        //base: 'contented',
        //api: {
        //    baseURL: '/contented', // '/api/_content'
        //},
        locales: i18n_config.locales.map((l) => l.code),
        //locales: ['en', 'ru', 'zh', 'en-amp', 'ru-amp', 'zh-amp'],
        defaultLocale: i18n_config.defaultLocale,
        //defaultLocale: 'en',
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
    runtimeConfig: {
        public: {
            i18n_config,
        },
    },
    //toast: {
    //    position: 'bottom-center',
    //    register: [
    //        {
    //            name: 'Toast',
    //            message: 'Oops...Something went wrong',
    //            options: {
    //                type: 'error',
    //            },
    //        },
    //    ],
    //},
    modules: [
        'nuxt-windicss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@nuxtjs/strapi',
        '@nuxtjs/device',
        //'@tailvue/nuxt',

        //'nuxt-viewport',
        //"@nuxtjs/fontaine",
        //"@vueuse/motion",
        //"@vueuse/integrations",
        //"@vueuse/router",
        //'@dewib/xhr-cache',
        //'@vite-pwa/nuxt',

        //'@vee-validate/nuxt',
        '@formkit/nuxt',
        '@nuxtjs/supabase',
        '@nuxt/content',
        'nuxt-icon',

        //"nuxt-schema-org",
        //"nuxt-full-static",
        //'@nuxt/devtools',

        //'nuxt-og-image',
        //'nuxt-vue3-google-signin',
        //'@nuxtjs/robots',
        //'@nuxtjs/toast',
        //'nuxt-xstate',
    ],
    css: [
        '~/assets/index.scss',
        //'vue-final-modal/style.css'
    ],
    hooks: {},
    supabase: {
        client: {
            auth: {
                //persistSession: false,
            },
        },
    },
    //robots: {
    //    /* module options */
    //},
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
