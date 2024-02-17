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
        payloadExtraction: true,
        //payloadExtraction: false,
        treeshakeClientOnly: false
    },
    features: {
        inlineStyles: false
    },
    ignorePrefix: '_',
    ignore: isGenerateMode ? ['**/admin/**'] : [],
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[local]-[hash:base32:5]'
            }
        },
        resolve: {},
        plugins: [],
        build: {
            chunkSizeWarningLimit: 5000
            //rollupOptions: {
            //    output: {
            //        manualChunks(id) {
            //            if (id.includes('node_modules')) {
            //                return id.toString().split('node_modules/')[1].split('/')[0].toString()
            //            }
            //        }
            //    }
            //}
        }
    },
    build: {
        transpile: [
            //
            //'animejs',
            'primevue'
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
            //link: false,
            //admin: false
        },
        langDir: 'locales',
        customRoutes: 'config',
        locales: locales()
    },
    sourcemap: {
        server: true,
        client: true
    },
    runtimeConfig: {
        //public: { i18n_config }
    },
    modules: [
        //
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@nuxtjs/device',
        'nuxt-primevue',
        '@formkit/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',

        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxtjs/sitemap',
        'nuxt-simple-robots'
    ],
    site: {
        url: 'https://maxiosigma.web.app'
    },
    sitemap: {
        autoI18n: true
        //autoLastmod: true,
        //xsl: '/public/sitemap-style.xsl'
        //hostname: 'maxiosigma.web.app',
        //path: '/site-sigma-map.xml',
    },
    content: {
        //documentDriven: true
        //locales: i18n_config.locales.map((l) => l.code),
        //defaultLocale: i18n_config.defaultLocale,
    },
    supabase: {
        redirect: false,
        redirectOptions: {
            login: '/',
            callback: '/'
        }
    },
    tailwindcss: {
        viewer: false,
        configPath: 'tailwind.config.ts',
        cssPath: '~/assets/tailwind.css'
    },
    primevue: {
        usePrimeVue: true,
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
        importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
        options: {
            ripple: true,
            inputStyle: 'outlined'
        },
        components: {
            prefix: 'Prime',
            include: ['Button', 'FloatLabel', 'InputText'], // 'DataTable',
            exclude: '*'
        },
        directives: {
            prefix: 'p-',
            include: ['Ripple', 'Tooltip'],
            exclude: '*'
        },
        composables: {
            include: [], //'useStyle'
            exclude: '*'
        }
    },
    nitro: {
        static: true,
        publicAssets: [
            {
                baseURL: 'images',
                dir: 'public/images',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            }
        ],
        //compressPublicAssets: {
        //    brotli: true
        //},
        prerender: {
            concurrency: 50,
            crawlLinks: true,
            //autoSubfolderIndex: false,
            //routes: ['/sitemap.xml', '/robots.txt'],
            //ignore: isGenerateMode ? ['**/admin/*', '**/admin/*'] : [],
            //ignore: ['**/admin/*', '**/admin/*', '*/admin/*', 'admin/**', 'admin/*'],
            retryDelay: 100,
            interval: 10,
            retry: 1
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

    //const locales = [...locales_pc, ...locales_mobile]

    if (!existsSync('./locales')) mkdirSync('./locales')
    if (!existsSync('./content')) mkdirSync('./content')

    locales_pc.map(({ code }) => {
        !existsSync(`./content/${code}`) ? mkdirSync(`./content/${code}`) : null
    })
    //
    ;[...locales_pc, ...locales_mobile].map(({ file }) => {
        !existsSync(`./locales/${file}`) ? writeFileSync(`./locales/${file}`, '{}') : null
    })

    return [...locales_pc, ...locales_mobile]
}
