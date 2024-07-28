import { resolve } from 'path'
import { getLocales, defaultLocale } from './config'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import Aura from '@primevue/themes/aura'

const locales = getLocales(mkdirSync, writeFileSync, existsSync)
const isGenerateMode = process.argv.includes('generate')

console.log(onlyNotDefaultPageLocations(['index']))

export default defineNuxtConfig({
    ssr: true,
    //dev: true,
    telemetry: false,

    devtools: { enabled: false },

    app: {
        buildAssetsDir: '/public/',
        rootAttrs: { class: 'wrapper', id: 'app' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },

    alias: {
        'assets-data': resolve(__dirname, './assets/data')
    },

    vue: {
        //compilerOptions: {
        //    isCustomElement: (tag) => ['lite'].includes(tag)
        //}
    },

    router: {
        options: {
            hashMode: false,
            scrollBehaviorType: 'smooth'
        }
    },

    experimental: {
        //appManifest: false,
        //renderJsonPayloads: true,
        componentIslands: 'local',
        //payloadExtraction: !isGenerateMode,
        //treeshakeClientOnly: false,
        //sharedPrerenderData: true,
        //clientNodeCompat: true,
        //externalVue: false,
        //typedPages: true,
        //watcher: 'parcel'

        defaults: {
            nuxtLink: {
                activeClass: 'page-link-active',
                exactActiveClass: 'page-link-extract-active',
                prefetchedClass: 'page-link-prefetch'
            }
        }
    },

    features: {
        //inlineStyles: !isGenerateMode,
        devLogs: true
    },

    ignore: ['**/z-content/**', '**/z-mod/**', '**/z-old/**', '**/z/**'],

    vite: {
        css: {
            modules: {
                generateScopedName: '[hash:8]'
            }
        }
    },

    build: {
        transpile: [
            //
            //'primevue'
        ]
    },

    //sourcemap: {
    //    server: true,
    //    client: true
    //},

    runtimeConfig: {
        //locales
    },

    modules: [
        '@unocss/nuxt',
        '@formkit/nuxt',
        '@nuxt/icon',
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@primevue/nuxt-module',
        '@nuxtjs/device',
        '@vueuse/nuxt',
        '@nuxt/eslint',

        [
            'nuxt-twa-module',
            {
                defaultUrl: 'https://maxiosigma.com',
                hostName: 'maxiosigma.com',
                sha256Fingerprints: [''],
                applicationId: 'com.example.example',
                launcherName: 'Maxiosigma',
                versionCode: 1,
                versionName: '1.0',
                statusBarColor: 'black',
                iconPath: '/static/icon.png',
                distFolder: '.nuxt/dist/client'
            }
        ]
    ],

    primevue: {
        usePrimeVue: true,

        components: {
            prefix: 'Prime'
        },
        directives: {
            include: '*'
        },
        options: {
            ripple: false,
            inputVariant: 'filled',
            theme: {
                preset: Aura
            }
        }
    },

    i18n: {
        lazy: false,
        defaultLocale: defaultLocale,

        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            alwaysRedirect: false,
            redirectOn: 'root'
        },
        pages: {
            //'go-to-[slug]': onlyPageLocations([defaultLocale]),
            //'admin/index': onlyPageLocations([defaultLocale]),
            //'admin/links': onlyPageLocations([defaultLocale])
        },
        langDir: 'locales',
        customRoutes: 'config',
        locales
    },

    icon: {
        customCollections: [
            {
                prefix: 'me',
                dir: './assets/icons'
            }
        ]
    },

    content: {
        api: {
            baseURL: '/content-api/_content'
        }
    },

    unocss: {
        uno: true
    },

    css: ['~/assets/index.scss'],

    compatibilityDate: '2024-07-10'
})

function onlyPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}

function onlyNotDefaultPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code === name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}

//primevue: {
//    usePrimeVue: true,
//    //importTheme: { from: '@/assets/prime.js' },
//    options: {
//        ripple: true,
//        inputStyle: 'outlined',
//        inputVariant: 'outlined'
//    },
//    components: {
//        prefix: 'Prime',
//        include: [
//            'Accordion',
//            'AccordionPanel',
//            'AccordionHeader',
//            'AccordionContent',
//            'Stepper',
//            'StepList',
//            'StepPanels',
//            'StepItem',
//            'Step',
//            'StepPanel',
//            //'ToastService',
//            //'Toast',
//            'Button',
//            'ToggleButton',
//            'SelectButton',
//            'ScrollPanel',
//            'FloatLabel',
//            'MeterGroup',
//            'InputText',
//            'Skeleton',
//            'Tooltip',
//            'Sidebar',
//            'Tag'
//        ]
//    }
//    //directives: {
//    //    prefix: 'p-',
//    //    include: ['Ripple', 'Tooltip', 'AnimateOnScroll', 'StyleClass']
//    //},
//    //composables: {
//    //    include: ['useStyle']
//    //}
//},

//rootId: 'app',
//rootTag: 'div class="wrapper"',
//cacheDir: '.cache'
//css: {
//    modules: {
//        //localsConvention: 'dashesOnly',
//        //generateScopedName: '[hash:base32:5]'
//        generateScopedName: '[hash:8]'
//    }
//}
//optimizeDeps: {
//    include: ['@supabase/gotrue-js']
//},
//resolve: {},
//plugins: [],
//build: {
//    ssr: true,
//    target: 'ESNext',
//    chunkSizeWarningLimit: 5000
//}
//'@vite-pwa/nuxt',
//'@nuxtjs/seo',
//'@tresjs/nuxt'
//'nuxt-security',
//'nuxt-time',
//'~/modules/pages/index',

//'@nuxtjs/sitemap'
//'nuxt-simple-sitemap'
//'nuxt-simple-robots'
//'@nuxtjs/tailwindcss',
//'@nuxtjs/supabase',
//'@primevue/nuxt-module',

//autoImport: true,
//prefix: 'p-',
//exclude: ['Ripple']
//options: {
//    prefix: 'p',
//    darkModeSelector: 'system',
//    cssLayer: false
//}
//strategy: 'prefix_except_default',
//link: false,
//'go-to-[slug]': false,
//defaultLocale: 'ru',
//experimental: {
//    //search: true
//}
//highlight: {
//    theme: 'dracula'
//}

//watch: {
//    ws: {
//        //  port: 4000,
//        port: 4444
//        //showURL: true
//    }
//}
//supabase: {
//    redirect: false,
//    redirectOptions: {
//        login: '/',
//        callback: '/'
//    }
//},
//nitro: {
//    prerender: {
//        crawlLinks: true
//    }
//},

//hooks: {
//    ready: () => {}
//},
