import { resolve } from 'path'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'
//import { defineNuxtConfig } from 'nuxt/config'
//import { config } from './app.config'
import { sitemapName } from './config'

const isGenerateMode = process.argv.includes('generate')

const defaultLocale = 'ru'
const locales = (() => {
    const locales_pc = [
        { code: 'ru', iso: 'ru-RU', name: 'Русский' },
        { code: 'en', iso: 'en-ES', name: 'English' },
        { code: 'zh', iso: 'zh-CN', name: '中國人' }
    ].map((it) => ({ ...it, origin: it.code, file: it.code + '.json' }))

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp' }
    })

    if (!existsSync('./locales')) mkdirSync('./locales')
    if (!existsSync('./content')) mkdirSync('./content')

    locales_pc.map(({ code }) => {
        !existsSync(`./content/${code}`) ? mkdirSync(`./content/${code}`) : null
    })
    //
    locales_pc.map(({ file }) => {
        !existsSync(`./locales/${file}`) ? writeFileSync(`./locales/${file}`, '{}') : null
    })

    return [...locales_pc, ...locales_mobile]
})()

export default defineNuxtConfig({
    ssr: true,
    telemetry: false,
    typescript: {
        strict: false,
        //typeCheck: true
        shim: false
    },
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
        treeshakeClientOnly: false,
        componentIslands: true
    },
    features: {
        inlineStyles: false
    },
    ignorePrefix: '_',
    //ignore: isGenerateMode ? ['**/admin/**'] : [],
    ignore: ['**/z-content/**', '**/z-mod/**', '**/z-old/**'],
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
    sourcemap: {
        server: true,
        client: true
    },
    runtimeConfig: {
        locales

        //public: { i18n_config }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@nuxtjs/device',
        'nuxt-primevue',
        '@formkit/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',

        //'~/modules/pages/index',

        '@nuxtjs/i18n',
        '@nuxt/content'
        //'@nuxtjs/sitemap'
        //'nuxt-simple-sitemap'
        //'nuxt-simple-robots'
    ],
    //site: {
    //    //url: 'https://maxiosigma.web.app'
    //    url: '/'
    //},
    i18n: {
        lazy: false,
        defaultLocale: defaultLocale,
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
            //'go-to-[slug]': false,
            'go-to-[slug]': onlyPageLocations([defaultLocale]),
            'admin/index': onlyPageLocations([defaultLocale]),
            'admin/links': onlyPageLocations([defaultLocale])
        },
        langDir: 'locales',
        customRoutes: 'config',
        locales: locales
    },
    //sitemap: {
    //    //sitemaps: true,
    //    //defaultSitemapsChunkSize: 500,
    //    sources: ['/api/sitemap']
    //    //    //autoI18n: true,
    //    //    //autoLastmod: true
    //    //    //    //xsl: '/public/sitemap-style.xsl'
    //    //    //    //hostname: 'maxiosigma.web.app',
    //    //    //    //path: '/site-sigma-map.xml',
    //    //    //sources: ['/api/__sitemap__/urls']
    //},
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
    //generate: {},
    nitro: {
        //static: true,
        //publicAssets: [
        //    {
        //        baseURL: 'images',
        //        dir: 'public/images',
        //        maxAge: 60 * 60 * 24 * 7 // 7 days
        //    }
        //],
        //compressPublicAssets: {
        //    brotli: true
        //},
        prerender: {
            //routes: ['/go-to-mw']

            crawlLinks: true
            //routes: ['/sitemap.xml', '/sitemap_index.xml', '/ru-RU-sitemap.xml']

            //concurrency: 50,
            //crawlLinks: true,
            //autoSubfolderIndex: false,
            //routes: ['/sitemap.xml', '/ru-RU-sitemap.xml']
            //routes: ['/sitemap.xml', '/robots.txt'],
            //ignore: isGenerateMode ? ['**/admin/*', '**/admin/*'] : [],
            //ignore: ['**/admin/*', '**/admin/*', '*/admin/*', 'admin/**', 'admin/*'],
            //retryDelay: 100,
            //interval: 10,
            //retry: 1
        }
    },
    css: ['~/assets/index.scss'],
    hooks: {
        ready: () => {
            const pathName = `public/${sitemapName}`
            if (existsSync(pathName)) unlinkSync(pathName)
        }
    }
})

//console.log(onlyPageLocations([defaultLocale]))

function onlyPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}
