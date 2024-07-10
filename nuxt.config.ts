import { resolve } from 'path'
import { getLocales, defaultLocale } from './config'
import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import Aura from '@primevue/themes/aura'

const locales = getLocales(mkdirSync, writeFileSync, existsSync)
const isGenerateMode = process.argv.includes('generate')

export default defineNuxtConfig({
  ssr: true,
  dev: true,
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

  vue: {
      compilerOptions: {
          isCustomElement: (tag) => ['lite'].includes(tag)
      }
  },

  experimental: {
      appManifest: false,
      renderJsonPayloads: true,
      componentIslands: 'local',
      payloadExtraction: !isGenerateMode,
      treeshakeClientOnly: false,
      sharedPrerenderData: true,
      clientNodeCompat: true,
      externalVue: false,
      typedPages: true,
      watcher: 'parcel'
  },

  features: {
      inlineStyles: !isGenerateMode,
      devLogs: true
  },

  ignore: ['**/z-content/**', '**/z-mod/**', '**/z-old/**', '**/z/**'],

  vite: {
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
      //locales
  },

  modules: [
      //'@vite-pwa/nuxt',
      '@nuxtjs/i18n',

      '@nuxt/content',
      //'@nuxtjs/seo',

      '@primevue/nuxt-module',
      '@formkit/nuxt',
      '@unocss/nuxt',
      '@nuxt/icon',

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

  primevue: {
      usePrimeVue: true,
      //autoImport: true,
      components: {
          prefix: 'Prime'
      },
      directives: {
          //prefix: 'p-',
          include: '*'
          //exclude: ['Ripple']
      },
      options: {
          ripple: false,
          inputVariant: 'filled',
          theme: {
              preset: Aura
              //options: {
              //    prefix: 'p',
              //    darkModeSelector: 'system',
              //    cssLayer: false
              //}
          }
      }
  },

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
      //defaultLocale: 'ru',
      //experimental: {
      //    //search: true
      //}
      //highlight: {
      //    theme: 'dracula'
      //}

      api: {
          baseURL: '/content-api/_content'
      }

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

  //nitro: {
  //    prerender: {
  //        crawlLinks: true
  //    }
  //},

  //hooks: {
  //    ready: () => {}
  //},
  css: ['~/assets/index.scss'],

  compatibilityDate: '2024-07-10'
})

function onlyPageLocations(names: any[] = []) {
    return locales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}