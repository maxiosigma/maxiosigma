import { resolve } from 'path'
import { getLocales, defaultLocale } from './config'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'

const locales = getLocales(mkdirSync, writeFileSync, existsSync)
const isGenerateMode = process.argv.includes('generate')
//import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: true,
    telemetry: false,
    app: {
        rootId: 'app',
        rootTag: 'div class="wrapper"',
        buildAssetsDir: '/public/'
    },
    alias: {
        'assets-data': resolve(__dirname, './assets/data')
    },
    features: {
        inlineStyles: false
    },
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
        }
    },
    build: {
        transpile: [
            //
            'primevue'
        ]
    },
    sourcemap: {
        server: true,
        client: true
    },
    runtimeConfig: {
        locales
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
        .filter(
            (locale) => names.filter((name) => locale.code !== name).length > 0
        )
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}
