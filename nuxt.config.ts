import { resolve } from 'path'
import { getLocales, defaultLocale } from './config'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'

const locales = getLocales(mkdirSync, writeFileSync, existsSync)
const isGenerateMode = process.argv.includes('generate')

export default defineNuxtConfig({
    ssr: true,
    //dev: true,
    telemetry: false,
    app: {
        //rootId: 'app',
        //rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/',
        rootAttrs: { class: 'wrapper', id: 'app' }
    },
    alias: {
        'assets-data': resolve(__dirname, './assets/data')
    },
    experimental: {
        appManifest: false,
        componentIslands: 'local',
        treeshakeClientOnly: false,
        sharedPrerenderData: true,
        externalVue: false,
        typedPages: true,
        watcher: 'parcel'
    },
    features: {
        inlineStyles: false,
        devLogs: false
    },
    ignore: ['**/z-content/**', '**/z-mod/**', '**/z-old/**', '**/z/**'],
    vite: {
        //css: {
        //    modules: {
        //        localsConvention: 'camelCaseOnly',
        //        generateScopedName: '[local]-[hash:base32:5]'
        //    }
        //},
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
        //'@vite-pwa/nuxt',
        '@nuxtjs/i18n',

        '@nuxt/content',
        //'@nuxtjs/seo',

        '@formkit/nuxt',
        '@unocss/nuxt',
        'nuxt-icon',

        '@nuxtjs/device',
        '@vueuse/nuxt'

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
    ],
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
    i18n: {
        lazy: false,
        defaultLocale: defaultLocale,
        //strategy: 'prefix_except_default',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            alwaysRedirect: false,
            redirectOn: 'root'
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
    content: {
        defaultLocale: 'ru',
        experimental: {
            //search: true
        }
        //highlight: {
        //    theme: 'dracula'
        //}
        //api: {
        //    baseURL: '/content-api/_content'
        //}
        //watch: {
        //    ws: {
        //        //  port: 4000,
        //        port: 4444
        //        //showURL: true
        //    }
        //}
    },
    //supabase: {
    //    redirect: false,
    //    redirectOptions: {
    //        login: '/',
    //        callback: '/'
    //    }
    //},
    unocss: {
        uno: true
    },
    nitro: {
        prerender: {
            crawlLinks: true
        }
    },
    css: ['~/assets/index.scss'],
    hooks: {
        ready: () => {}
    }
})

function onlyPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}
