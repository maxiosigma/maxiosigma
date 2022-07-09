//import { apiEndpoint } from './sm.json'
import { resolve, join } from "path";
import app_config from "./app.config";

const { plugins, buildModules, modules, transpile } = includes();

//console.log(resolve(__dirname, './'))

export default {
   alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "./"),
      images: resolve(__dirname, "./images"),
      strapi: resolve(__dirname, "../strapi"),
   },
   ...strapi(),
   ...middleware(),
   ...components(),
   ...generate(),
   ...sitemap(),
   //...prismic(),
   ...router(),
   ...custom(),
   ...render(),
   ...server(),
   ...build(),
   ...hooks(),
   ...i18n(),
   ...css(),
   ...pwa(),

   // strapi: {
   //    url: process.env.STRAPI_URL || "http://localhost:1337",
   //    //prefix: '/api',
   //    //entities: ['links'],
   //    //version: 'v4',
   //    cookie: {},
   // },

   buildModules,
   modules,
   plugins,
};

function strapi() {
   return {
      strapi: {
         url: process.env.STRAPI_URL || "http://localhost:1337",
         // prefix: "/api",
         // entities: ["links"],
         //version: 'v4',
         cookie: {
            strapi_jwt: process.env.JWT_SECRET,
         },
      },
   };
}

function server() {
   return {
      server: {
         // port: app_config.port,
         host: "0.0.0.0",
         // host: process.env.NUXT_ENV_HOST_0 ? '0.0.0.0' : 'localhost',
      },
   };
}

function router() {
   return {
      router: {
         fallback: true,
         mode: "history",
         prefetchLinks: false,
         prefetchPayloads: false,
         linkActiveClass: "nav-item-active",
         linkExactActiveClass: "exact-active-link",
         linkPrefetchedClass: "link-prefetched",
      },
   };
}

function sitemap() {
   return {
      sitemap: {
         hostname: app_config.host,
         cacheTime: 300000,
         gzip: false,
         defaults: {
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
         },
      },
   };
}

function middleware() {
   return {
      //serverMiddleware: []
   };
}

function generate() {
   const exd =
      app_config.excluded?.reduce(
         (sum, ex) => i18n().i18n.locales?.map((lc) => sum.push(new RegExp("^/" + lc.code + "/" + ex + ""))) && sum,
         []
      ) ?? [];

   return {
      generate: {
         dir: "dist",
         interval: 0,
         fallback: true,
         nojekyll: false,
         concurrency: 5000,
         subFolders: false,
         devtools: app_config.isDev ? true : false,
         exclude: [/^\/test/, /^\/z/, ...exd],

         //routes() {
         //	return staticRoutes()
         //},
      },
   };
}

//async function staticRoutes() {
//	const { promisify } = require('util')
//	const Glob = require('glob')
//	const glob = promisify(Glob)
//	const files = await glob('./assets/stories/**/*.{vue,js,md}')
//	const routes = files.map((f) => f.replace('./', '/').replace(/(.js|.vue|.md)/, ''))
//	return routes
//}

function hooks() {
   return { hooks: {} };
}

function i18n() {
   const locales = [
      { code: "ru-ru", iso: "ru-RU", name: "Русский", file: "ru-RU.js" },
      { code: "en-es", iso: "en-ES", name: "English", file: "en-ES.js" },
   ];

   locales?.map((locale) => {
      locales.push({
         ...locale,
         code: locale.code + "-amp",
         //iso: locale.iso,
         //name: locale.name,
         //file: locale.file,
      });
   });

   return {
      i18n: {
         seo: true,
         lazy: false,
         strategy: "prefix", //prefix prefix_except_default
         vueI18nLoader: true,
         defaultLocale: "ru-ru", //ru-ru
         //langDir: '~/locales/',
         noPrefixDefaultLocale: true, //true false
         vueI18n: {
            fallbackLocale: "en-es",
         },
         vuex: {
            moduleName: "i18n",
            syncLocale: false,
            syncMessages: false,
            syncRouteParams: false,
         },
         detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "lang",
         },
         locales,
      },
   };
}

function build() {
   return {
      build: {
         cache: false,
         target: "static",
         optimizeCss: false,
         transpile: transpile,
         friendlyErrors: false,
         parallel: false,
         cssSourceMap: false,
         ...(!app_config.isDev && { publicPath: "/public/" }),
         loaders: {
            sass: {
               implementation: require("sass"),
            },
            scss: {
               implementation: require("sass"),
            },
         },
         //babel: {
         //	//babelrc: false,
         //	//cacheDirectory: undefined,
         //	//presets: ['@nuxt/babel-preset-app'],
         //	plugins: [
         //		'@babel/plugin-transform-runtime',
         //		//'transform-require-context',
         //		//'require-context-hook',
         //	],
         //},
         postcss: {
            plugins: {
               "postcss-import": true,
               "postcss-url": {},
               ...(!app_config.isDev && {
                  autoprefixer: {},
               }),
            },
         },
         splitChunks: {
            runtime: true,
            commons: true,
            components: true,
            layouts: true,
            vendor: true,
            pages: true,
         },
         optimization: {
            minimize: !app_config.isDev,
            splitChunks: {
               chunks: "all",
               automaticNameDelimiter: "/",
               name: undefined,
               //maxSize: 51200,
            },
         },
         //maxChunkSize: 51200,
         ...(!app_config.isDev && {
            extractCSS: true,
            filenames: {
               app: "scripts/[chunkhash:5].js",
               chunk: "scripts/[chunkhash:5].js",
               vendor: "scripts/[chunkhash:5].js",
               manifest: "manifest.[hash:5].js",
               css: "styles/[contenthash:5].css",
               //[path]
               img: "images/img_[hash:5].[ext]",
               //[path]
               font: "fonts/font_[name]_[hash:5].[ext]",
               //[path]
               video: "video/vio_[hash:5].[ext]",
            },
         }),
         extend(config, ctx) {
            ctx.loaders.scss.additionalData = '@use "sass:math";';

            //[path]
            config.module.rules.push({
               test: /\.ico$/,
               loader: "url-loader",
               query: {
                  //limit: 1,
                  name: "icons/favicon_[hash:8].[ext]",
               },
            });

            //[path]
            config.module.rules.push({
               test: /\.pdf$/,
               loader: "file-loader",
               query: {
                  //limit: 1,
                  name: "files/[name]_[hash:8].[ext]",
               },
            });

            config.module.rules.push({
               test: /\.mjs$/,
               include: /node_modules/,
               type: "javascript/auto",
            });

            //config.module.rules.push({
            //	test: /\.json$/,
            //	loader: 'json-loader',
            //	query: {
            //		//limit: 1,
            //		name: 'json/[name]_[hash:8].[ext]',
            //	},
            //})

            config.node = {
               fs: "empty",
            };

            //config.resolve.alias['testerum'] = resolve(__dirname, '../../../../../strapi/public')
            //config.resolve.alias['~testerum'] = resolve(__dirname, '../../../../../strapi/public')

            if (ctx.isServer) {
               //console.log(join(__dirname, '../../../../../strapi/public'))
               //stimg: resolve(__dirname, './../strapi/public'),
               //strapimg: resolve(__dirname, '../../../../../strapi/public'),
               //config.resolve.alias['~stimg'] = resolve(__dirname, '../strapi/public')
               //config.resolve.alias['~strapimg'] = resolve(__dirname, '../../../../../strapi/public')
               //config.resolve.alias['hammerjs$'] = this.options.rootDir + 'node_modules/vue-touch/dist/hammer-ssr.js'
               //config.resolve.alias['stimg'] = resolve(__dirname, '../strapi/public')
               //config.resolve.alias['testerum'] = resolve(__dirname, '../../../../../strapi/public')
               //config.resolve.alias['~testerum'] = resolve(__dirname, '../../../../../strapi/public')
               //console.log(config.resolve.alias['~testerum'])
               //images: resolve(__dirname, '../strapi/public'),
               //stimg: resolve(__dirname, '../strapi/public'),
               //strapimg: resolve(__dirname, '../../../../../strapi/public'),
            }
         },
      },
   };
}

function components() {
   return {
      //components: true,
      //// {
      ////	watch: true,
      ////	prefetch: true,
      ////	path: '~/components/',
      ////	extensions: ['vue', 'js'],
      ////},
      components: [
         "~/components",
         //{ path: '~/slices', prefix: '', extensions: ['vue'] }
      ],
   };
}

function css() {
   return { css: ["~/assets/index.scss"] };
}

function env() {
   return {
      CTF_MODEL_ARTICLES: "article",
      CTF_MODEL_UPDATES: "update",
      CTF_MODEL_LINKS: "linked",
      CTF_MODEL_PROGRAMS: "program",
      CTF_MODEL_SHORTLINK: "shortlink",
      CTF_MODEL_CATEGORIES: "category",
      PRC_CDA_ACCESS_TOKEN: process.env.PRC_CDA_ACCESS_TOKEN,
   };
}

function includes() {
   const dev = true,
      DevBuildModules = app_config.isDev ? [] : [],
      OptimizeBuildModules = app_config.optimization ? [] : [],
      buildModules = [
         "nuxt-windicss",
         "@luxdamore/nuxt-apis-to-file",
         "nuxt-user-agent",
         "nuxt-fontagon",
         //"@vueuse/nuxt",
         "@/plugins/active/GSR",
         //'nuxt-resolve-url-loader',
         //'nuxt-alias',
         //'@nuxtjs/prismic',
         //'nuxt-stories',
         //'@nuxtjs/strapi',
         //'@nuxtjs/apollo',
         "@nuxtjs/sitemap",
         "nuxt-animejs",
         "@nuxtjs/pwa",
      ],
      plugins = [
         "@plugins/passive/mixins",
         "@plugins/passive/directives",
         "@plugins/active/VueScrollIndicator.client.js",
         "@plugins/active/VueTypedJs",
         "@plugins/active/VueKinesis",
         "@plugins/active/VueTooltip",
         "@plugins/active/QR.js",
      ],
      modules = [
         //'@nuxtjs/markdownit',
         "@nuxtjs/i18n",
         "@nuxtjs/axios",
         "nuxt-cookie-control",
         //'@nuxt/content',
         "@nuxtjs/toast",
         //['cookie-universal-nuxt', { path: '/', maxAge: 604800, sameSite: 'lax' }], // МЕШАЕТ STRAPI
         //'nuxt-parallel-middleware',
         "@nuxtjs/strapi",
         //"@nuxtjs/gtm",
         //'nuxt-payload-extractor',
      ],
      //'@prismicio/vue', 'vue-slicezone', 'lottie-web',
      transpile = ["lottie-web", "vue-typed-js"];

   return {
      buildModules: buildModules.concat(DevBuildModules, OptimizeBuildModules),
      plugins: plugins,
      modules: modules,
      transpile: transpile,
   };
}

//function prismic() {
//	return {
//		prismic: {
//			previewReloadType: 'hot',
//			components: false,
//			preview: false,
//			endpoint: apiEndpoint,
//			modern: true,
//			apiOptions: {
//				accessToken: process.env.PRC_CDA_ACCESS_TOKEN,
//			},
//		},
//	}
//}

function custom() {
   return {
      target: "static",
      loading: false,
      telemetry: false,
      globalName: "app",
      globals: {
         id: `app`,
      },
      cookies: {
         locales: ["ru", "en"],
         barPosition: "bottom-right",
         //barPosition: "bottom-full",
         //dashInDescription: true,
         necessary: [
            {
               name: {
                  ru: "Куки по умолчанию",
                  en: "Default Cookies",
               },
               description: {
                  ru: "Используются для управления файлами cookie",
                  en: "Used for cookie control",
               },
               cookies: ["cookie_control_consent", "cookie_control_enabled_cookies", "lang"],
            },
         ],
         optional: [
            {
               name: "Google Analitycs",
               identifier: "ga",
               description: {
                  ru: "Google GTM",
                  en: "Google GTM",
               },
               initialState: true,
               async: true,
               cookies: ["_ga", "_gat", "_gid"],
               accepted: () => {
                  setTimeout(() => {
                     (function (w, d, s, l, i) {
                        w[l] = w[l] || [];
                        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                        var f = d.getElementsByTagName(s)[0],
                           j = d.createElement(s),
                           dl = l != "dataLayer" ? "&l=" + l : "";
                        j.async = true;
                        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                        f.parentNode.insertBefore(j, f);
                     })(window, document, "script", "dataLayer", "GTM-MSJZ4PT");

                     console.log("GTM PIXEL ACTIVE");
                  }, 250);
               },
               declined: () => {
                  window.$nuxt.$cookies.remove("ga");
               },
            },
            {
               name: "Yandex Metrika",
               identifier: "ym",
               description: {
                  ru: "Yandex Pixel",
                  en: "Yandex Pixel",
               },
               initialState: true,
               async: true,
               cookies: ["_ym_d", "_ym_isad", "_ym_uid", "_ym_visorc", "metrika_enabled"],
               accepted: () => {
                  setTimeout(() => {
                     (function (m, e, t, r, i, k, a) {
                        m[i] =
                           m[i] ||
                           function () {
                              (m[i].a = m[i].a || []).push(arguments);
                           };
                        m[i].l = 1 * new Date();
                        (k = e.createElement(t)),
                           (a = e.getElementsByTagName(t)[0]),
                           (k.async = 1),
                           (k.src = r),
                           a.parentNode.insertBefore(k, a);
                     })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                     ym(89264491, "init", {
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                     });

                     console.log("YM PIXEL ACTIVE");
                  }, 250);
               },
               declined: () => {
                  window.$nuxt.$cookies.remove("ym");
               },
            },
            {
               name: "VK PIXEL",
               identifier: "vk",
               description: {
                  ru: "VK PIXEL",
                  en: "VK PIXEL",
               },
               initialState: true,
               async: true,
               cookies: ["remixir"],
               accepted: () => {
                  !(function () {
                     var t = document.createElement("script");
                     (t.type = "text/javascript"),
                        (t.async = !0),
                        (t.src = "https://vk.com/js/api/openapi.js?169"),
                        (t.onload = function () {
                           VK.Retargeting.Init("VK-RTRG-1455228-5lkj2"), VK.Retargeting.Hit();
                        }),
                        document.head.appendChild(t);
                  })();

                  console.log("VK PIXEL ACTIVE");
               },
               declined: () => {
                  window.$nuxt.$cookies.remove("vk");
               },
            },
         ],
         text: {
            locale: {
               ru: {
                  barTitle: "Файлы сookie",
                  barDescription:
                     "Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона 152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и политикой конфиденциальности. В ином случае, вы будете возвращаться обратно на эту страницу.",
                  acceptAll: "Принять все",
                  declineAll: "Удалить все",
                  manageCookies: "Управление файлами cookie",
                  unsaved: "У вас есть несохраненные настройки",
                  close: "Закрыть",
                  save: "Сохранить",
                  necessary: "Необходимые файлы cookie",
                  optional: "Необязательные файлы cookie",
                  functional: "Функциональные файлы cookie",
                  blockedIframe: "Чтобы увидеть это, включите функциональные файлы cookie",
                  here: "здесь",
               },
            },
         },
         colors: {
            barTextColor: "#fff",
            barBackground: "#12957b",
            barButtonColor: "#fff",
            barButtonBackground: "#206569",
            barButtonHoverColor: "#fff",
            barButtonHoverBackground: "#2e495e",
            modalButtonBackground: "#206569",
            modalButtonHoverColor: "#fff",
            controlButtonBackground: "#12957b",
            controlButtonHoverBackground: "#2e495e",
            controlButtonIconHoverColor: "#fff",
            controlButtonIconColor: "#fff",
            modalButtonHoverBackground: "#2e495e",
            checkboxActiveBackground: "#2e495e",
            checkboxInactiveBackground: "#ede1e1",
            checkboxActiveCircleBackground: "#00c58e",
            checkboxInactiveCircleBackground: "#f44336",
            checkboxDisabledBackground: "#ddd",
            checkboxDisabledCircleBackground: "#fff",
         },
      },
      apisToFile: {
         file: {
            name: "data",
            ext: "json",
            path: "./",
            startFromStaticDir: false,
            options: {},
         },
      },
      storybook: {
         // Options
      },
      nuxtAlias: {
         /* module options */
         rootDir: ["../strapi"],
      },
      stories: {
         //lang: 'ru',
         forceBuild: false,
         storiesDir: "./assets/stories",
      },
      markdownit: {
         runtime: true,
         preset: "default",
         linkify: true,
         breaks: true,
      },
      vue: {
         config: {
            productionTip: false,
            devtools: app_config.isDev,
         },
      },
      content: {
         prism: {
            theme: false,
         },
         yaml: {
            json: true,
         },
      },
      iconFont: {
         files: ["./assets/fontagon/*.svg"],
         dist: "./fonts/icons/fg",
         fontName: "font-svg",
         formatOptions: {
            svg: {
               normalize: true,
               fontHeight: 1000,
            },
         },
         styleTemplate: {
            css: "assets/fontagon/hbs/css.hbs",
         },
         order: ["eot", "ttf", "svg", "woff2", "woff"],
         baseClass: "fg",
         classPrefix: "fg",
         style: "css",
      },
      ...(app_config.optimization && {
         buildOptimisations: buildOptimisations(app_config),
      }),
      publicRuntimeConfig: {
         app: app_config,
         isDev: app_config.isDev,
         baseUrl: process.env.BASE_URL || (app_config.isDev || process.env.NUXT_ENV_GENDEV ? "http://localhost:3000" : app_config.host),
         update: app_config.update,
         lang: app_config.lang,
         sps: process.env.CTF_SPACE_ID,
         atk: process.env.CTF_CDA_ACCESS_TOKEN,
         ...env(),
      },
      privateRuntimeConfig: {
         sps: process.env.CTF_SPACE_ID,
         atk: process.env.CTF_CDA_ACCESS_TOKEN,
         APP_KEYS: process.env.APP_KEYS,
         API_TOKEN_SALT: process.env.API_TOKEN_SALT,
         ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
         JWT_SECRET: process.env.JWT_SECRET,
      },
   };
}

function buildOptimisations() {
   return {
      profile: "safe",
      ...(!app_config.isDev && {
         features: {
            hardSourcePlugin: false,
         },
      }),
   };
}

function render() {
   return {
      ssr: true,
   };
}

function motion() {
   return {
      directives: {
         "pop-bottom": {
            initial: {
               scale: 0,
               opacity: 0,
               y: 100,
            },
            visible: {
               scale: 1,
               opacity: 1,
               y: 0,
            },
         },
      },
   };
}

function pwa() {
   return {
      pwa: {
         icon: false,
         icons: false,
         //icon: {
         //	fileName: 'favicon.png',
         //},
         //meta: {
         //	charset: false,
         //	viewport: false,
         //	mobileApp: true,
         //	mobileAppIOS: false,
         //	appleStatusBarStyle: 'black',
         //	favicon: true,
         //	name: app_config.name,
         //	author: app_config.author,
         //	description: app_config.description,
         //	theme_color: '#000000',
         //	lang: app_config.lang,
         //	ogType: 'website',
         //	ogSiteName: app_config.name,
         //	ogTitle: app_config.name,
         //	ogDescription: app_config.description,
         //	ogHost: app_config.host,
         //	ogImage: true,
         //	ogUrl: app_config.host,
         //	twitterCard: 'summary',
         //	twitterSite: app_config.host,
         //	twitterCreator: app_config.autor,
         //},
         //manifest: {
         //	name: app_config.name,
         //	short_name: app_config.name,
         //	display: 'standalone', // 'browser', 'fullscreen', 'standalone', 'minimal-ui'
         //	description: app_config.description,
         //	crossorigin: 'use-credentials',
         //	background_color: '#ffffff',
         //	theme_color: '#000000',
         //	dir: 'ltr',
         //	lang: app_config.lang,
         //},
         //workbox: {
         //  offline: true,
         //  autoRegister: true,
         //  offlineAnalytics: true,
         //  enabled: !app_config.isDev,
         //  autoRegister: !app_config.isDev,
         //},
      },
   };
}

function netlify() {
   const redirects = [];

   if (process.env.MAINTENANCE_MODE == true)
      redirects.push({
         from: "/*",
         to: app_config.MAINTENANCE_PAGE,
         status: 301,
      });

   return {
      netlify: {
         detectForms: true,
         copyExistingFiles: true,
         netlifyToml: {
            build: {
               environment: require("dotenv").config().parsed,
            },
            ...(redirects != [] && {
               redirects,
            }),
         },
      },
   };
}
