import { resolve } from 'path'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { palette } from '@primevue/themes'
//import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import {
    getLocales as locales,
    defaultLocale,
    onlyNotDefaultLocations,
    onlyNotDefaultPageLocations
} from './config'

const presetLocationNotIndex = onlyNotDefaultPageLocations(['default', 'defi'])
const isGenerateMode = process.argv.includes('generate')

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
                prefetch: false,
                activeClass: 'page-link-active',
                exactActiveClass: 'page-link-extract-active',
                prefetchedClass: 'page-link-prefetch'
            }
        }
    },

    features: {
        inlineStyles: !isGenerateMode,
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

    sourcemap: {
        server: true,
        client: true
    },

    runtimeConfig: {
        //locales
    },

    modules: [
        '@unocss/nuxt',
        '@formkit/nuxt',
        '@nuxtjs/i18n',
        //'@nuxt/content',
        '@primevue/nuxt-module',
        '@dargmuesli/nuxt-cookie-control',
        //'@vite-pwa/nuxt',
        '@nuxtjs/device',
        '@vueuse/nuxt',
        //'@nuxt/eslint',
        //'nuxt-radash',
        //'@i2d/nuxt-pdf-frame',
        //'@nuxtjs/web-vitals',
        //'nuxt-twemoji',
        '@nuxt/icon'
        //'nuxt-maplibre',
        //'@tresjs/nuxt'
        //'@nuxt/scripts',
    ],

    //webVitals: {
    //    debug: true,
    //    provider: 'log',
    //    disabled: false
    //},

    cookieControl: {
        barPosition: 'bottom-full',
        closeModalOnClickOutside: false
    },

    //tres: {
    //    devtools: true
    //},

    //lucide: {
    //    namePrefix: 'LUIcon'
    //},

    //twemoji: {
    //    expiresIn: 3.154e7
    //},

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
            inputVariant: 'outlined',
            inputStyle: 'outlined',
            theme: {
                //preset: Aura
                preset: preset(),
                options: {
                    darkModeSelector: '.darken-max'
                }
            }
        }
    },

    //pwa: {
    //    filename: 'max.js',
    //    injectRegister: 'script-defer',
    //    registerType: 'autoUpdate'
    //},

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
            //defi: false,
            //'defi/*': false,
            //documents: { default: false, defi: false },
            //main: { default: false, defi: false },
            //news: { default: false, defi: false },
            //offers: { default: false, defi: false },
            //portfolio: { default: false, defi: false },
            //presents: { default: false, defi: false },
            //projects: { default: false, defi: false },
            //questions: { default: false, defi: false },
            //reviews: { default: false, defi: false },
            //services: { default: false, defi: false },
            //brands: { default: false, defi: false },
            //contacts: { default: false, defi: false }
        },
        langDir: 'locales',
        customRoutes: 'config',
        //customRoutes: 'page',
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

    //content: {
    //    csv: false,
    //    yaml: false,
    //    markdown: {},
    //    documentDriven: false,
    //    contentHead: false,
    //    experimental: {
    //        search: {
    //            indexed: false
    //        }
    //    },
    //    locales: onlyNotDefaultLocations
    //    //api: {
    //    //    baseURL: '/content-api/_content'
    //    //}
    //},

    unocss: {
        uno: true
    },

    css: ['~/assets/index.scss'],

    compatibilityDate: '2024-07-10'
})

function preset() {
    return definePreset(Aura, {
        semantic: {
            primary: {
                50: '{amber.50}',
                100: '{amber.100}',
                200: '{amber.200}',
                300: '{amber.300}',
                400: '{amber.400}',
                500: '{amber.500}',
                600: '{amber.600}',
                700: '{amber.700}',
                800: '{amber.800}',
                900: '{amber.900}',
                950: '{amber.950}'
            },
            surface: {
                0: '#ffffff',
                50: '{ocean.50}',
                100: '{ocean.100}',
                200: '{ocean.200}',
                300: '{ocean.300}',
                400: '{ocean.400}',
                500: '{ocean.500}',
                600: '{ocean.600}',
                700: '{ocean.700}',
                800: '{ocean.800}',
                900: '{ocean.900}',
                950: '{ocean.950}'
            },
            colorScheme: {
                light: {
                    primary: {
                        color: '#ffffff',
                        inverseColor: '#ffffff',
                        hoverColor: '{amber.900}',
                        activeColor: '{amber.800}'
                    },
                    highlight: {
                        background: '{amber.950}',
                        focusBackground: '{amber.700}',
                        color: '#ffffff',
                        focusColor: '#ffffff'
                    }
                },
                dark: {
                    primary: {
                        color: '{amber.50}',
                        inverseColor: '{amber.950}',
                        hoverColor: '{amber.100}',
                        activeColor: '{amber.200}'
                    },
                    highlight: {
                        background: 'rgba(250, 250, 250, .16)',
                        focusBackground: 'rgba(250, 250, 250, .24)',
                        color: 'rgba(255,255,255,.87)',
                        focusColor: 'rgba(255,255,255,.87)'
                    }
                }
            }
        }
    })
}
