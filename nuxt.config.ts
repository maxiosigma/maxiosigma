import { resolve } from 'path'
import { getLocales, defaultLocale } from './config'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'

const locales = getLocales(mkdirSync, writeFileSync, existsSync)
const isGenerateMode = process.argv.includes('generate')
//import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: true,
    telemetry: false,
    //typescript: {
    //    //typeCheck: false,
    //    //typeCheck: true,
    //    strict: true,
    //    shim: false
    //    //shim: true
    //},
    app: {
        rootId: 'app',
        rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/'
        //layoutTransition: false,
        //pageTransition: false
    },
    alias: {
        'assets-data': resolve(__dirname, './assets/data')
    },
    //experimental: {
    //    payloadExtraction: true,
    //    //payloadExtraction: false,
    //    treeshakeClientOnly: false,
    //    componentIslands: true
    //},
    features: {
        inlineStyles: false
    },
    //ignorePrefix: '_',
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
        //server: {
        //    fs: {
        //        strict: false
        //    }
        //}
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
        '@unocss/nuxt',
        //'@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@nuxtjs/device',
        //'nuxt-primevue',
        '@formkit/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',

        //'@tresjs/nuxt',
        '@vite-pwa/nuxt',
        'nuxt-security',
        //'nuxt-time',
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
        locales
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
        highlight: {
            theme: 'dracula'
        },
        api: {
            baseURL: '/content-api/_content'
        },
        watch: {
            ws: {
                //  port: 4000,
                port: 4444
                //showURL: true
            }
        }
    },
    supabase: {
        redirect: false,
        redirectOptions: {
            login: '/',
            callback: '/'
        }
    },
    unocss: {
        //preflight: true,
        uno: true
    },
    //tailwindcss: {
    //    viewer: false,
    //    configPath: 'tailwind.config.ts',
    //    cssPath: '~/assets/tailwind.css'
    //},
    //primevue: {
    //    usePrimeVue: true,
    //    //cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    //    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    //    options: {
    //        ripple: true,
    //        inputStyle: 'outlined'
    //    },
    //    components: {
    //        prefix: 'Prime'
    //        //include: [
    //        //    'Accordion',
    //        //    'AccordionTab',
    //        //    'SelectButton',
    //        //    'ToggleButton',
    //        //    'StepperPanel',
    //        //    'ToastService',
    //        //    'ScrollPanel',
    //        //    'MeterGroup',
    //        //    'FloatLabel',
    //        //    'InputText',
    //        //    'Skeleton',
    //        //    'Stepper',
    //        //    'Sidebar',
    //        //    'Button',
    //        //    'Toast',
    //        //    'Tag'
    //        //],
    //        //exclude: '*'
    //    },
    //    directives: {
    //        prefix: 'p-',
    //        include: ['Ripple', 'Tooltip'],
    //        exclude: '*'
    //    }
    //    //composables: {
    //    //    include: [], //'useStyle'
    //    //    exclude: '*'
    //    //}
    //},
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
            //routes: [`/${sitemapName}`]
            //routes: [`/public/${sitemapName}`]

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
            //const pathName = `public/${sitemapName}`
            //if (existsSync(pathName)) unlinkSync(pathName)
        }
    }
})

//console.log(onlyPageLocations([defaultLocale]))

function onlyPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}
