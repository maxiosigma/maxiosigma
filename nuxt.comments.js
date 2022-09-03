// https://sdn-maxiosigma.netlify.app/public/uploads/4a06af8d28_1_920c04e514.png

// REGEX
//"id": \w+,

//function cookie() {
//	return {
//	   cookies: {
//		  locales: ["ru", "en"],
//		  barPosition: "bottom-right",
//		  //barPosition: "bottom-full",
//		  //dashInDescription: true,
//		  necessary: [
//			 {
//				name: {
//				   ru: "Куки по умолчанию",
//				   en: "Default Cookies",
//				},
//				description: {
//				   ru: "Используются для управления файлами cookie",
//				   en: "Used for cookie control",
//				},
//				cookies: ["cookie_control_consent", "cookie_control_enabled_cookies", "i18n_redirected", "strapi_jwt", "lang"],
//			 },
//		  ],
//		  optional: [
//			 {
//				name: "Google Analitycs",
//				identifier: "ga",
//				description: {
//				   ru: "Google GTM",
//				   en: "Google GTM",
//				},
//				initialState: true,
//				async: false,
//				cookies: ["_ga", "_gat", "_gid", "_ga_X7YM5GJKXG"],
//				accepted: () => {
//				   setTimeout(() => {
//					  (function (w, d, s, l, i) {
//						 w[l] = w[l] || [];
//						 w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
//						 var f = d.getElementsByTagName(s)[0],
//							j = d.createElement(s),
//							dl = l != "dataLayer" ? "&l=" + l : "";
//						 j.async = true;
//						 j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//						 f.parentNode.insertBefore(j, f);
//					  })(window, document, "script", "dataLayer", "GTM-MSJZ4PT");

//					  console.log("GTM PIXEL ACTIVE");
//					  //window.location.reload(true);
//				   }, 250);
//				},
//				declined: () => {
//				   //console.log(window.$nuxt.$cookies);
//				   window.$nuxt.$cookies.remove("ga");
//				   //window.location.reload(true);
//				},
//			 },
//			 {
//				name: "Yandex Metrika",
//				identifier: "ym",
//				description: {
//				   ru: "Yandex Pixel",
//				   en: "Yandex Pixel",
//				},
//				initialState: true,
//				async: false,
//				cookies: ["_ym_d", "_ym_isad", "_ym_uid", "_ym_visorc", "metrika_enabled"],
//				accepted: () => {
//				   setTimeout(() => {
//					  (function (m, e, t, r, i, k, a) {
//						 m[i] =
//							m[i] ||
//							function () {
//							   (m[i].a = m[i].a || []).push(arguments);
//							};
//						 m[i].l = 1 * new Date();
//						 (k = e.createElement(t)),
//							(a = e.getElementsByTagName(t)[0]),
//							(k.async = 1),
//							(k.src = r),
//							a.parentNode.insertBefore(k, a);
//					  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//					  ym(89264491, "init", {
//						 clickmap: true,
//						 trackLinks: true,
//						 accurateTrackBounce: true,
//						 webvisor: true,
//					  });

//					  console.log("YM PIXEL ACTIVE");
//				   }, 250);
//				},
//				declined: () => {
//				   window.$nuxt.$cookies.remove("ym");
//				},
//			 },
//			 {
//				name: "VK Pixel",
//				identifier: "vk",
//				description: {
//				   ru: "VK Pixel",
//				   en: "VK Pixel",
//				},
//				initialState: true,
//				async: false,
//				cookies: ["remixir"],
//				accepted: () => {
//				   !(function () {
//					  var t = document.createElement("script");
//					  (t.type = "text/javascript"),
//						 (t.async = !0),
//						 (t.src = "https://vk.com/js/api/openapi.js?169"),
//						 (t.onload = function () {
//							VK.Retargeting.Init("VK-RTRG-1455228-5lkj2"), VK.Retargeting.Hit();
//						 }),
//						 document.head.appendChild(t);
//				   })();

//				   console.log("VK PIXEL ACTIVE");
//				},
//				declined: () => {
//				   window.$nuxt.$cookies.remove("vk");
//				},
//			 },
//			 {
//				name: "Pulse Pixel",
//				identifier: "pp",
//				description: {
//				   ru: "Pulse Pixel",
//				   en: "Pulse Pixel",
//				},
//				initialState: true,
//				async: false,
//				cookies: ["sbjs", "sbjs_current_add", "sbjs_migrations", "sbjs_current", "sbjs_first", "sbjs_udata"],
//				accepted: () => {
//				   console.log("PULSE PIXEL ACTIVE");
//				},
//				declined: () => {
//				   window.$nuxt.$cookies.remove("pp");
//				},
//			 },
//			 {
//				name: "Other Cookie",
//				identifier: "oz",
//				description: {
//				   ru: "Other Cookie",
//				   en: "Other Cookie",
//				},
//				initialState: true,
//				async: false,
//				cookies: [], // "_sp_id.0295", "_sp_id", "ugid"
//				accepted: () => {
//				   console.log("OTHER COOKIE ACTIVE");
//				},
//				declined: () => {
//				   window.$nuxt.$cookies.remove("oz");
//				},
//			 },
//		  ],
//		  text: {
//			 locale: {
//				ru: {
//				   barTitle: "Файлы сookie",
//				   barDescription:
//					  "Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона 152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и политикой конфиденциальности.",
//				   acceptAll: "Принять все",
//				   declineAll: "Удалить все",
//				   manageCookies: "Управление файлами cookie",
//				   unsaved: "У вас есть несохраненные настройки",
//				   close: "Закрыть",
//				   save: "Сохранить",
//				   necessary: "Необходимые файлы cookie",
//				   optional: "Необязательные файлы cookie",
//				   functional: "Функциональные файлы cookie",
//				   blockedIframe: "Чтобы увидеть это, включите функциональные файлы cookie",
//				   here: "здесь",
//				},
//			 },
//		  },
//		  colors: {
//			 barTextColor: "#fff",
//			 barBackground: "#12957b",
//			 barButtonColor: "#fff",
//			 barButtonBackground: "#206569",
//			 barButtonHoverColor: "#fff",
//			 barButtonHoverBackground: "#2e495e",
//			 modalButtonBackground: "#206569",
//			 modalButtonHoverColor: "#fff",
//			 controlButtonBackground: "#12957b",
//			 controlButtonHoverBackground: "#2e495e",
//			 controlButtonIconHoverColor: "#fff",
//			 controlButtonIconColor: "#fff",
//			 modalButtonHoverBackground: "#2e495e",
//			 checkboxActiveBackground: "#2e495e",
//			 checkboxInactiveBackground: "#ede1e1",
//			 checkboxActiveCircleBackground: "#00c58e",
//			 checkboxInactiveCircleBackground: "#f44336",
//			 checkboxDisabledBackground: "#ddd",
//			 checkboxDisabledCircleBackground: "#fff",
//		  },
//	   },
//	};
// }

// function strapi() {
//	return {
//	   strapi: {
//		  url: process.env.STRAPI_URL || "http://localhost:1337",
//		  // prefix: "/api",
//		  // entities: ["links"],
//		  //version: 'v4',
//		  cookie: {
//			 strapi_jwt: process.env.JWT_SECRET,
//		  },
//	   },
//	};
// }

// function server() {
//	return {
//	   server: {
//		  // port: app_config.port,
//		  host: "0.0.0.0",
//		  // host: process.env.NUXT_ENV_HOST_0 ? '0.0.0.0' : 'localhost',
//	   },
//	};
// }

// function router() {
//	return {
//	   router: {
//		  fallback: true,
//		  mode: "history",
//		  prefetchLinks: false,
//		  prefetchPayloads: false,
//		  linkActiveClass: "nav-item-active",
//		  linkExactActiveClass: "exact-active-link",
//		  linkPrefetchedClass: "link-prefetched",
//	   },
//	};
// }

// function sitemap() {
//	return {
//	   sitemap: {
//		  hostname: app_config.host,
//		  cacheTime: 300000,
//		  gzip: false,
//		  defaults: {
//			 changefreq: "daily",
//			 priority: 1,
//			 lastmod: new Date(),
//		  },
//	   },
//	};
// }

// function middleware() {
//	return {
//	   //serverMiddleware: []
//	};
// }

// function generate() {
//	const exd =
//	   app_config.excluded?.reduce(
//		  (sum, ex) => i18n().i18n.locales?.map((lc) => sum.push(new RegExp("^/" + lc.code + "/" + ex + ""))) && sum,
//		  []
//	   ) ?? [];

//	return {
//	   generate: {
//		  dir: "dist",
//		  interval: 0,
//		  fallback: true,
//		  nojekyll: true,
//		  concurrency: 5000,
//		  subFolders: false,
//		  devtools: app_config.isDev ? true : false,
//		  exclude: [/^\/test/, /^\/z/, ...exd],

//		  //routes() {
//		  //	return staticRoutes()
//		  //},
//	   },
//	};
// }

// //async function staticRoutes() {
// //	const { promisify } = require('util')
// //	const Glob = require('glob')
// //	const glob = promisify(Glob)
// //	const files = await glob('./assets/stories/**/*.{vue,js,md}')
// //	const routes = files.map((f) => f.replace('./', '/').replace(/(.js|.vue|.md)/, ''))
// //	return routes
// //}

// function hooks() {
//	return { hooks: {} };
// }

// function i18n() {
//	const locales = [
//	   { code: "ru-ru", iso: "ru-RU", name: "Русский", file: "ru-RU.js" },
//	   //{ code: "en-es", iso: "en-ES", name: "English", file: "en-ES.js" },
//	];

//	locales?.map((locale) => {
//	   locales.push({
//		  ...locale,
//		  code: locale.code + "-amp",
//		  //iso: locale.iso,
//		  //name: locale.name,
//		  //file: locale.file,
//	   });
//	});

//	return {
//	   i18n: {
//		  seo: true,
//		  lazy: false,
//		  strategy: "prefix", //prefix prefix_except_default
//		  vueI18nLoader: true,
//		  defaultLocale: "ru-ru", //ru-ru
//		  //langDir: '~/locales/',
//		  noPrefixDefaultLocale: true, //true false
//		  vueI18n: {
//			 fallbackLocale: "en-es",
//		  },
//		  vuex: {
//			 moduleName: "i18n",
//			 syncLocale: false,
//			 syncMessages: false,
//			 syncRouteParams: false,
//		  },
//		  detectBrowserLanguage: {
//			 useCookie: true,
//			 cookieKey: "lang",
//		  },
//		  locales,
//	   },
//	};
// }

// function build() {
//	return {
//	   build: {
//		  cache: false,
//		  target: "static",
//		  optimizeCss: false,
//		  transpile: transpile,
//		  friendlyErrors: false,
//		  parallel: false,
//		  cssSourceMap: false,
//		  ...(!app_config.isDev && { publicPath: "/public/" }),
//		  loaders: {
//			 sass: {
//				implementation: require("sass"),
//			 },
//			 scss: {
//				implementation: require("sass"),
//			 },
//		  },
//		  //babel: {
//		  //	//babelrc: false,
//		  //	//cacheDirectory: undefined,
//		  //	//presets: ['@nuxt/babel-preset-app'],
//		  //	plugins: [
//		  //		'@babel/plugin-transform-runtime',
//		  //		//'transform-require-context',
//		  //		//'require-context-hook',
//		  //	],
//		  //},
//		  postcss: {
//			 plugins: {
//				"postcss-import": true,
//				"postcss-url": {},
//				...(!app_config.isDev && {
//				   autoprefixer: {},
//				}),
//			 },
//		  },
//		  splitChunks: {
//			 runtime: true,
//			 commons: true,
//			 components: true,
//			 layouts: true,
//			 vendor: true,
//			 pages: true,
//		  },
//		  optimization: {
//			 minimize: !app_config.isDev,
//			 splitChunks: {
//				chunks: "all",
//				automaticNameDelimiter: "/",
//				name: undefined,
//				//maxSize: 51200,
//			 },
//		  },
//		  //maxChunkSize: 51200,
//		  ...(!app_config.isDev && {
//			 extractCSS: true,
//			 filenames: {
//				app: "scripts/[chunkhash:8].js",
//				chunk: "scripts/[chunkhash:8].js",
//				vendor: "scripts/[chunkhash:8].js",
//				manifest: "manifest.[hash:8].js",
//				css: "styles/[contenthash:8].css",
//				//[path]
//				img: "images/img_[hash:8].[ext]",
//				//[path]
//				font: "fonts/font_[name]_[hash:8].[ext]",
//				//[path]
//				video: "video/vio_[hash:8].[ext]",
//			 },
//		  }),
//		  extend(config, ctx) {
//			 ctx.loaders.scss.additionalData = '@use "sass:math";';

//			 //[path]
//			 config.module.rules.push({
//				test: /\.ico$/,
//				loader: "url-loader",
//				query: {
//				   //limit: 1,
//				   name: "icons/favicon_[hash:8].[ext]",
//				},
//			 });

//			 //[path]
//			 config.module.rules.push({
//				test: /\.pdf$/,
//				loader: "file-loader",
//				query: {
//				   //limit: 1,
//				   name: "files/[name]_[hash:8].[ext]",
//				},
//			 });

//			 config.module.rules.push({
//				test: /\.mjs$/,
//				include: /node_modules/,
//				type: "javascript/auto",
//			 });

//			 //config.module.rules.push({
//			 //	test: /\.json$/,
//			 //	loader: 'json-loader',
//			 //	query: {
//			 //		//limit: 1,
//			 //		name: 'json/[name]_[hash:8].[ext]',
//			 //	},
//			 //})

//			 config.node = {
//				fs: "empty",
//			 };

//			 //config.resolve.alias['testerum'] = resolve(__dirname, '../../../../../strapi/public')
//			 //config.resolve.alias['~testerum'] = resolve(__dirname, '../../../../../strapi/public')

//			 if (ctx.isServer) {
//				//console.log(join(__dirname, '../../../../../strapi/public'))
//				//stimg: resolve(__dirname, './../strapi/public'),
//				//strapimg: resolve(__dirname, '../../../../../strapi/public'),
//				//config.resolve.alias['~stimg'] = resolve(__dirname, '../strapi/public')
//				//config.resolve.alias['~strapimg'] = resolve(__dirname, '../../../../../strapi/public')
//				//config.resolve.alias['hammerjs$'] = this.options.rootDir + 'node_modules/vue-touch/dist/hammer-ssr.js'
//				//config.resolve.alias['stimg'] = resolve(__dirname, '../strapi/public')
//				//config.resolve.alias['testerum'] = resolve(__dirname, '../../../../../strapi/public')
//				//config.resolve.alias['~testerum'] = resolve(__dirname, '../../../../../strapi/public')
//				//console.log(config.resolve.alias['~testerum'])
//				//images: resolve(__dirname, '../strapi/public'),
//				//stimg: resolve(__dirname, '../strapi/public'),
//				//strapimg: resolve(__dirname, '../../../../../strapi/public'),
//			 }
//		  },
//	   },
//	};
// }

// function components() {
//	return {
//	   //components: true,
//	   //// {
//	   ////	watch: true,
//	   ////	prefetch: true,
//	   ////	path: '~/components/',
//	   ////	extensions: ['vue', 'js'],
//	   ////},
//	   components: [
//		  "~/components",
//		  //{ path: '~/slices', prefix: '', extensions: ['vue'] }
//	   ],
//	};
// }

// function css() {
//	return { css: ["~/assets/index.scss"] };
// }

// function env() {
//	return {
//	   //CTF_MODEL_ARTICLES: "article",
//	   //CTF_MODEL_UPDATES: "update",
//	   //CTF_MODEL_LINKS: "linked",
//	   //CTF_MODEL_PROGRAMS: "program",
//	   //CTF_MODEL_SHORTLINK: "shortlink",
//	   //CTF_MODEL_CATEGORIES: "category",
//	   //PRC_CDA_ACCESS_TOKEN: process.env.PRC_CDA_ACCESS_TOKEN,
//	};
// }

// function includes() {
//	const dev = true,
//	   DevBuildModules = app_config.isDev ? [] : [],
//	   OptimizeBuildModules = app_config.optimization ? [] : [],
//	   buildModules = [
//		  "nuxt-windicss",
//		  "@luxdamore/nuxt-apis-to-file",
//		  "nuxt-user-agent",
//		  "nuxt-fontagon",
//		  //"@vueuse/nuxt",
//		  "@/plugins/active/GSR",
//		  //"@nuxtjs/imagemin",
//		  //'nuxt-resolve-url-loader',
//		  //'nuxt-alias',
//		  //'@nuxtjs/prismic',
//		  //'nuxt-stories',
//		  //'@nuxtjs/strapi',
//		  //'@nuxtjs/apollo',
//		  "@nuxtjs/sitemap",
//		  "nuxt-animejs",
//		  "@nuxtjs/pwa",
//	   ],
//	   plugins = [
//		  "@plugins/passive/mixins",
//		  "@plugins/passive/directives",
//		  "@plugins/active/VueScrollIndicator.client.js",
//		  "@plugins/active/VueTypedJs",
//		  "@plugins/active/VueKinesis",
//		  "@plugins/active/VueTooltip",
//		  "@plugins/active/QR.js",
//	   ],
//	   modules = [
//		  //'@nuxtjs/markdownit',
//		  "@nuxtjs/i18n",
//		  "@nuxtjs/axios",
//		  "nuxt-cookie-control",
//		  //'@nuxt/content',
//		  "@nuxtjs/toast",
//		  "@nuxtjs/robots",
//		  //['cookie-universal-nuxt', { path: '/', maxAge: 604800, sameSite: 'lax' }], // МЕШАЕТ STRAPI
//		  //'nuxt-parallel-middleware',
//		  "@nuxtjs/strapi",
//		  //"@nuxtjs/gtm",
//		  //'nuxt-payload-extractor',
//	   ],
//	   //'@prismicio/vue', 'vue-slicezone', 'lottie-web',
//	   transpile = ["lottie-web", "vue-typed-js"];

//	return {
//	   buildModules: buildModules.concat(DevBuildModules, OptimizeBuildModules),
//	   plugins: plugins,
//	   modules: modules,
//	   transpile: transpile,
//	};
// }

// //function prismic() {
// //	return {
// //		prismic: {
// //			previewReloadType: 'hot',
// //			components: false,
// //			preview: false,
// //			endpoint: apiEndpoint,
// //			modern: true,
// //			apiOptions: {
// //				accessToken: process.env.PRC_CDA_ACCESS_TOKEN,
// //			},
// //		},
// //	}
// //}

// function custom() {
//	return {
//	   target: "static",
//	   loading: false,
//	   telemetry: false,
//	   globalName: "app",
//	   globals: {
//		  id: `app`,
//	   },
//	   apisToFile: {
//		  file: {
//			 name: "data",
//			 ext: "json",
//			 path: "./",
//			 startFromStaticDir: false,
//			 options: {},
//		  },
//	   },
//	   robots: () => {
//		  return [
//			 {
//				UserAgent: "*",
//				Disallow: ["/test"],
//				Allow: ["/public/images/", "/public/audio/", "/public/video/"],
//				Sitemap: [app_config.host + "/sitemap.xml"],
//			 },
//			 {
//				UserAgent: "Googlebot",
//			 },
//			 {
//				UserAgent: "YandexCalendar",
//			 },
//			 {
//				UserAgent: "YandexMobileBot",
//			 },
//		  ];
//	   },
//	   storybook: {
//		  // Options
//	   },
//	   nuxtAlias: {
//		  /* module options */
//		  rootDir: ["../strapi"],
//	   },
//	   stories: {
//		  //lang: 'ru',
//		  forceBuild: false,
//		  storiesDir: "./assets/stories",
//	   },
//	   markdownit: {
//		  runtime: true,
//		  preset: "default",
//		  linkify: true,
//		  breaks: true,
//	   },
//	   vue: {
//		  config: {
//			 productionTip: false,
//			 devtools: app_config.isDev,
//		  },
//	   },
//	   content: {
//		  prism: {
//			 theme: false,
//		  },
//		  yaml: {
//			 json: true,
//		  },
//	   },
//	   iconFont: {
//		  files: ["./assets/fontagon/*.svg"],
//		  dist: "./fonts/icons/fg",
//		  fontName: "font-svg",
//		  formatOptions: {
//			 svg: {
//				normalize: true,
//				fontHeight: 1000,
//			 },
//		  },
//		  styleTemplate: {
//			 css: "assets/fontagon/hbs/css.hbs",
//		  },
//		  order: ["eot", "ttf", "svg", "woff2", "woff"],
//		  baseClass: "fg",
//		  classPrefix: "fg",
//		  style: "css",
//	   },
//	   ...(app_config.optimization && {
//		  buildOptimisations: {
//			 profile: "safe",
//			 ...(!app_config.isDev && {
//				features: {
//				   hardSourcePlugin: false,
//				},
//			 }),
//		  },
//	   }),
//	   publicRuntimeConfig: {
//		  app: app_config,
//		  isDev: app_config.isDev,
//		  baseUrl: process.env.BASE_URL || (app_config.isDev || process.env.NUXT_ENV_GENDEV ? "http://localhost:3000" : app_config.host),
//		  update: app_config.update,
//		  lang: app_config.lang,
//		  sps: process.env.CTF_SPACE_ID,
//		  atk: process.env.CTF_CDA_ACCESS_TOKEN,
//		  ...env(),
//	   },
//	   privateRuntimeConfig: {
//		  sps: process.env.CTF_SPACE_ID,
//		  atk: process.env.CTF_CDA_ACCESS_TOKEN,
//		  APP_KEYS: process.env.APP_KEYS,
//		  API_TOKEN_SALT: process.env.API_TOKEN_SALT,
//		  ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
//		  JWT_SECRET: process.env.JWT_SECRET,
//	   },
//	};
// }

// function buildOptimisations() {
//	return {
//	   profile: "safe",
//	   ...(!app_config.isDev && {
//		  features: {
//			 hardSourcePlugin: false,
//		  },
//	   }),
//	};
// }

// function render() {
//	return {
//	   ssr: true,
//	};
// }

// function motion() {
//	return {
//	   directives: {
//		  "pop-bottom": {
//			 initial: {
//				scale: 0,
//				opacity: 0,
//				y: 100,
//			 },
//			 visible: {
//				scale: 1,
//				opacity: 1,
//				y: 0,
//			 },
//		  },
//	   },
//	};
// }

// function pwa() {
//	return {
//	   pwa: {
//		  icon: false,
//		  icons: false,
//		  //icon: {
//		  //	fileName: 'favicon.png',
//		  //},
//		  //meta: {
//		  //	charset: false,
//		  //	viewport: false,
//		  //	mobileApp: true,
//		  //	mobileAppIOS: false,
//		  //	appleStatusBarStyle: 'black',
//		  //	favicon: true,
//		  //	name: app_config.name,
//		  //	author: app_config.author,
//		  //	description: app_config.description,
//		  //	theme_color: '#000000',
//		  //	lang: app_config.lang,
//		  //	ogType: 'website',
//		  //	ogSiteName: app_config.name,
//		  //	ogTitle: app_config.name,
//		  //	ogDescription: app_config.description,
//		  //	ogHost: app_config.host,
//		  //	ogImage: true,
//		  //	ogUrl: app_config.host,
//		  //	twitterCard: 'summary',
//		  //	twitterSite: app_config.host,
//		  //	twitterCreator: app_config.autor,
//		  //},
//		  //manifest: {
//		  //	name: app_config.name,
//		  //	short_name: app_config.name,
//		  //	display: 'standalone', // 'browser', 'fullscreen', 'standalone', 'minimal-ui'
//		  //	description: app_config.description,
//		  //	crossorigin: 'use-credentials',
//		  //	background_color: '#ffffff',
//		  //	theme_color: '#000000',
//		  //	dir: 'ltr',
//		  //	lang: app_config.lang,
//		  //},
//		  //workbox: {
//		  //  offline: true,
//		  //  autoRegister: true,
//		  //  offlineAnalytics: true,
//		  //  enabled: !app_config.isDev,
//		  //  autoRegister: !app_config.isDev,
//		  //},
//	   },
//	};
// }

// function netlify() {
//	const redirects = [];

//	if (process.env.MAINTENANCE_MODE == true)
//	   redirects.push({
//		  from: "/*",
//		  to: app_config.MAINTENANCE_PAGE,
//		  status: 301,
//	   });

//	return {
//	   netlify: {
//		  detectForms: true,
//		  copyExistingFiles: true,
//		  netlifyToml: {
//			 build: {
//				environment: require("dotenv").config().parsed,
//			 },
//			 ...(redirects != [] && {
//				redirects,
//			 }),
//		  },
//	   },
//	};
// }

// //console.log(resolve(__dirname, './'))
// // this.$cookies.cookie_control_consent
// yarn node-download &&
// "slicemachine": "start-slicemachine",

//

function comments() {
   //notifyCookie() {
   //		// const cookie = this.LCG("capcake");
   //		// if (!cookie || cookie == false) {
   //		//    setTimeout(
   //		//       () =>
   //		//          this.$toast.show(
   //		//             `Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона 152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и политикой конфиденциальности ~ главная → конфиденциальность. Нажмите крестик справа, чтобы закрыть.`,
   //		//             {
   //		//                theme: "outline",
   //		//                position: "bottom-center",
   //		//                duration: null,
   //		//                //duration: 10000000000,
   //		//                fullWidth: true,
   //		//                className: "toast-cookie",
   //		//                singleton: true,
   //		//                closeOnSwipe: false,
   //		//                action: [
   //		//                   {
   //		//                      text: "",
   //		//                      class: "icon-close !m-0 sm:!mr-2 pointer-events-auto !text-yellow-500 transition-all duration-200 hover:(!text-green-300)",
   //		//                      onClick: (e, toastObject) => {
   //		//                         toastObject.goAway(0);
   //		//                         this.LCS("capcake", true);
   //		//                      },
   //		//                   },
   //		//                ],
   //		//             }
   //		//          ),
   //		//       2000
   //		//    );
   //		//    //setTimeout(() => this.LCS("capcake", true), 3000);
   //		// }
   // },
   // notifyCook() {
   //		// setTimeout(() => {
   //		//    const cook = this.LCG("capcake");
   //		//    const toast = (count) => {
   //		//       setTimeout(
   //		//          () =>
   //		//             this.$toast.show("На сайте используются cookie " + (count - 1) + " из 2", {
   //		//                theme: this.isLight ? "outline" : "bubble",
   //		//                position: "top-right",
   //		//                duration: 1000,
   //		//             }),
   //		//          500
   //		//       );
   //		//       setTimeout(
   //		//          () =>
   //		//             this.$toast.show("На сайте используются cookie " + count + " из 2", {
   //		//                theme: this.isLight ? "outline" : "bubble",
   //		//                position: "bottom-right",
   //		//                duration: 1000,
   //		//             }),
   //		//          1600
   //		//       );
   //		//    };
   //		//    if (!cook || cook == 0) {
   //		//       this.LCS("capcake", 2);
   //		//       toast(Number(this.LCG("capcake")));
   //		//    } else if (cook && cook > 0 && cook < 2) {
   //		//       this.LCS("capcake", Number(cook) + 2);
   //		//       toast(Number(this.LCG("capcake")));
   //		//    }
   //		// }, 500);
   // },
   //'nuxt-build-optimisations'
   // 'nuxt-build-optimisations'
   //'@nuxtjs/dotenv',
   //'@nuxtjs/ngrok',
   //'@nuxtjs/google-analytics',
   //'@nuxtjs/localtunnel',
   //'@nuxtjs/web-vitals',
   //'@vueuse/nuxt',
   //'nuxt-headway',
   //'@nuxtjs/mdx',
   //'@plugins/active/Contentful.js',
   //{ src: '@plugins/active/VueFbCustomerChat.js', ssr: false },
   //'@plugins/active/Ngrok',
   //'@plugins/active/ContentfulMounted.js',
   //'@plugins/active/VueFragment',
   //'@nuxtjs/dotenv',
   //'@nuxtjs/axios',
   //'@nuxtjs/sitemap',
   //'nuxt-facebook-pixel-module',
   //'nuxt-speedkit',
   //'@nuxtjs/axios',
   //'@nuxtjs/apollo',
   //'nuxt-socket-io',
   //'@dewib/xhr-cache',
   //'@nuxtjs/auth-next',
   //'@nuxtjs/recaptcha',
   //'nuxt-history-state',
   //'nuxt-vue-multiselect',
   //'nuxt-vuex-router-sync',
   //'nuxt-precompress',
   //'nuxt-highcharts',
   //'@nuxtjs/dayjs',
   //'@nuxt/http',
   //'windicss',
   //'virtual:windi.css',
   //'virtual:windi-base.css',
   //'virtual:windi-components.css',
   //'virtual:windi-utilities.css'
   //standalone: true,
   //cssSourceMap: true,
   //sortRoutes: true,
   //strategy: 'prefix_and_default',
   //fallbackLocale: 'en-es',
   //routesNameSeparator: ':',
   //baseUrl: process.env.BASE_URL || (config.isDev || process.env.NUXT_ENV_GENDEV ? 'http://localhost:3000' : config.host),
   //loaders: {
   //	cssModules: {
   //		modules: {
   //			localIdentName: '[local]_[hash:base64:5]',
   //			localIdentHashPrefix: 'mod',
   //			exportLocalsConvention: 'camelCaseOnly',
   //		},
   //	},
   //},
   //interval: 0,
   //crawler: true,
   //concurrency: 50000,
   //fallback: '404.html',
   // ...(!isDev && {
   // 	workers: 8,
   // 	workerConcurrency: 500,
   // }),
   //Nojekyll: false,
   //async ready() {
   //	const { $content } = require('@nuxt/content')
   //	const files = await $content()
   //		.only(['slug'])
   //		.fetch()
   //	console.log(files)
   //},
   // ssr: true,
   // resourceHints: false, //true
   // injectScripts: false, //true
   // asyncScripts: true, //false
   // compressor: {
   // 	threshold: 5,
   // },
   // pushAssets: (req, res, publicPath, preloadFiles) => {
   // 	// return preloadFiles.filter((f) => f.asType === "script" && f.file === "runtime.js").map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`);
   // 	return false;
   // },
   // bundleRenderer: {
   // 	// directives: {
   // 	//   custom1: function (el, dir) {
   // 	//     // something ...
   // 	//   }
   // 	// cww: function (vnode, dir) {
   // 	//   const style = vnode.data.style || (vnode.data.style = {})
   // 	//   style.backgroundColor = '#ff0016'
   // 	// }
   // 	// }
   // 	// shouldPreload: (file, type) => {
   // 	// 	return ["script", "font", "style"].includes(type);
   // 	// },
   // 	// shouldPrefetch: (file, type) => {
   // 	// 	return ["style", "font"].includes(type);
   // 	// },
   // },
   //base: '/',
   //routeNameSplitter: ':',
   //middleware: ['responseImage'],
   //compressor: {
   //	threshold: config.isDev ? 0 : 10,
   //},
   //sizes: [8, 16, 24, 32, 64, 120, 144, 152, 192, 384, 512],
   //sizes: [16, 24, 32, 64, 120, 144, 192],
   //cleanupOutdatedCaches: true,
   //swDest: `sw-${config.update}-module.js`,
   //preCaching: ['/', '/about', '/policy', '/blog', '/partners', '/blog/business-ideas', '/partners/programs', '/partners/world', '/web/clippy', '/web/windi'],
   //preCaching: ['/', '/policy', '/partners/world'],
   //clientsClaim: true,
   //skipWaiting: true,
   // if (config.netlyConfig.redirects) config.netlyConfig.redirects.map((item) => redirects.push(item));
   // headers: [
   // 	{
   // 		for: "/*",
   // 		values: { "X-Frame-Options": "DENY", "X-XSS-Protection": "1; mode=block" },
   // 	},
   // ],
   //'~/middleware/responseImage',
   //redirectSSL.create({
   //	enabled: !config.isDev,
   //	exclude: ['localhost'],
   //}),
   //'redirect-ssl',
   //{ path: '/server-middleware', handler: '~/server-middleware/index.js' },
   // { path: '/static2', handler: serveStatic(__dirname + '/static2') }
   //html: {
   //	minify: { minifyCSS: false, minifyJS: false },
   //},
   //font: '[path][name].[hash:5].[ext]',
   //ctx.loaders = [
   //	{
   //		test: /favicon\.ico$/,
   //		loader: 'url',
   //		query: {
   //			limit: 1,
   //			name: '[name].[ext]',
   //		},
   //		//query: { mimetype: 'image/x-icon', limit: 0 },
   //	},
   //]
   //const CTF_MODELS = Object.entries(require('dotenv').config().parsed).reduce((sum, it) => {
   //	sum = { ...sum, ...(it[0].indexOf('CTF_MODEL') !== -1 && { [it[0]]: it[1] }) }
   //	return sum
   //}, {})
   //facebook: {
   //	pixelId: '564919618181295',
   //	autoPageView: true,
   //	//...(config.isDev && {
   //	//	debug: true,
   //	//}),
   //},
   //ngrok: {
   //	// module options
   //	//authtoken: process.env.NGROK_AUTHTOKEN
   //	addr: 3003,
   //	subdomain: 'meworld',
   //	region: 'ru',
   //},
   //use: ['markdown-it-div', 'markdown-it-attrs'],
   //env: require('dotenv').config().parsed,
   //alias: {
   //	style: resolve(__dirname, '../assets/style'),
   //},
   //import css from './config/parts/css'
   //import custom from './config/custom'
   //import i18n from './config/parts/i18n'
   //import hooks from './config/parts/hooks'
   //import includes from './config/includes'
   //import build from './config/parts/build'
   //import router from './config/parts/router'
   //import render from './config/parts/render'
   //import server from './config/parts/server'
   //import sitemap from './config/parts/sitemap'
   //import generate from './config/parts/generate'
   //import middleware from './config/parts/middleware'
   //const includes = includes(config)
   //async function prismicClient(api) {
   //	const prismic = require('@prismicio/client')
   //	const client = prismic.createClient(apiEndpoint)
   //	const repository = await client.getRepository()
   //	const locales = repository.languages.map((lang) => lang.id)
   //	return {
   //		client,
   //		locales,
   //	}
   //}
   //import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'
   //plugins: [new WindiCSSWebpackPlugin()],
   //optimizeCss: !config.isDev,
   //parallel: config.isDev,
   //cssSourceMap: !config.isDev,
   //publicPath: config.isDev ? false : '/public/',
   //terser: {
   //	//parallel: true,
   //	//cache: true,
   //	//sourceMap: true,
   //	extractComments: {
   //		filename: 'LICENSES',
   //	},
   //	terserOptions: {
   //		output: {
   //			comments: /^\**!|@preserve|@license|@cc_on/,
   //		},
   //	},
   //},
   //babel:{
   //	presets() {
   //		return [
   //			[
   //				'@nuxt/babel-preset-app',
   //				{
   //					corejs: {
   //						version: 3,
   //					},
   //				},
   //			],
   //		];
   //	},
   //},
   //parser: [require('postcss-scss')],
   //postcss: [
   //	//
   //	//require('import-postcss')(),
   //	//require('postcss-cssnext')(),
   //	//require('postcss-custom-media')(),
   //	//require('postcss-node-sass')(),
   //],
   //postcss: {
   //	'postcss-windicss': {},
   //},
   //config.plugins.push(new WindiCSSWebpackPlugin())
   //if (ctx.isDev && ctx.isClient) {
   //	config.module.rules.push({
   //		enforce: 'pre',
   //		test: /\.(js|vue)$/,
   //		loader: 'eslint-loader',
   //		exclude: /(node_modules)/,
   //	})
   //}
   //return config
   //minimize: true,
   // minimizer: [],
   // cacheGroups: {},
   //maxSize: 204800,
   //maxSize: 300000,
   //maxChunkSize: 300000,
   // html: {
   // 	minify: {
   // 		html5: true,
   // 		minifyJS: true,
   // 		minifyCSS: true,
   // 		useShortDoctype: true,
   // 		preserveLineBreaks: false,
   // 		collapseWhitespace: true,
   // 		collapseBooleanAttributes: true,
   // 		collapseInlineTagWhitespace: true,
   // 		processConditionalComments: true,
   // 		removeRedundantAttributes: true,
   // 		removeEmptyAttributes: true,
   // 		trimCustomFragments: true,
   // 		decodeEntities: false,
   // 		removeComments: true,
   // 		minifyURLs: true,
   // 	},
   // },
   //app: 'scripts/app.[name].[chunkhash:5].js',
   //chunk: 'scripts/[name].[chunkhash:5].js',
   //vendor: 'scripts/vendor.[name].[chunkhash:5].js',
   //manifest: 'manifest.[name].[hash:5].js',
   //css: 'styles/[name].[contenthash:5].css',
   //config.module.rules
   //	.find(({ test }) => test.toString() === /\.css$/i.toString())
   //	.oneOf.find(({ resourceQuery }) => resourceQuery && resourceQuery.toString() === /module/.toString())
   //	.use.find(({ loader }) => loader === 'css-loader').options.localsConvention = 'camelCaseOnly'
   // cache: true,
   // analyze: true,
   //corejs: 3,
   //indicator: true,
   //babel: {
   //	babelrc: false,
   //	cacheDirectory: undefined,
   //	presets: ['@nuxt/babel-preset-app'],
   //},
   //optimizeCss: !config.isDev,
   //postcss: {
   //	plugins: {
   //		'postcss-url': false,
   //		'postcss-nested': {},
   //		'postcss-responsive-type': {},
   //		'postcss-hexrgba': {},
   //	},
   //	preset: {
   //		autoprefixer: {
   //			grid: true,
   //		},
   //	},
   //},
   //cssSourceMap: false,
   //localsConvention: 'camelCaseOnly',
   // splitChunks: {
   // 	runtime: false,
   // 	commons: false,
   // 	components: false,
   // 	layouts: false,
   // 	vendor: false,
   // 	pages: false,
   // },
   // vendor: ['axios'],
   // cache: false,
   // standalone: true,
   // hotMiddleware: true,
   // parallel: config.isDev ? false : true,
   // cssSourceMap: config.isDev ? false : true,
   // cacheGroups: {},
   // cacheGroups: {
   // 	styles: {
   // 		name: "styles",
   // 		test: /\.(css|vue)$/,
   // 		chunks: "all",
   // 		enforce: true,
   // 	},
   // },
   // uglify: {
   // 	uglifyOptions: {
   // 		compress: false,
   // 	},
   // },
   // babel: {
   // 	presets: ['es2015', 'stage-0'],
   // },
   // analyze: {
   // 	analyzerMode: 'static',
   // },
   // extractCSS: {
   // 	// allChunks: true,
   // 	ignoreOrder: true,
   // },
   // postcss: {
   // 	plugins: {
   // 		"postcss-custom-properties": false,
   // 	},
   // },
   // html: {
   // 	minify: {
   // 		html5: true,
   // 		// minifyJS: true,
   // 		// minifyCSS: true,
   // 		minifyJS: false,
   // 		minifyCSS: false,
   // 		useShortDoctype: true,
   // 		preserveLineBreaks: false,
   // 		collapseWhitespace: true,
   // 		collapseBooleanAttributes: true,
   // 		collapseInlineTagWhitespace: true,
   // 		processConditionalComments: true,
   // 		removeRedundantAttributes: true,
   // 		removeEmptyAttributes: true,
   // 		trimCustomFragments: true,
   // 		decodeEntities: false,
   // 		removeComments: true,
   // 		minifyURLs: true,
   // 		// caseSensitive: true,
   // 		// // sortAttributes: true,
   // 		// trimCustomFragments: false,
   // 		// includeAutoGeneratedTags: true,
   // 		// collapseInlineTagWhitespace: false,
   // 		// collapseBooleanAttributes: false,
   // 		// conservativeCollapse: true,
   // 		// continueOnParseError: true,
   // 		// includeAutoGeneratedTags: false,
   // 		// minifyURLs: false,
   // 		// decodeEntities: true,
   // 		// preserveLineBreaks: true,
   // 		// collapseWhitespace: false,
   // 		// collapseBooleanAttributes: false,
   // 		// collapseInlineTagWhitespace: false,
   // 		// removeRedundantAttributes: false,
   // 		// removeEmptyAttributes: false,
   // 		// trimCustomFragments: false,
   // 	},
   // },
   // import TerserPlugin from "terser-webpack-plugin";
   // import UglifyJsPlugin from "uglifyjs-webpack-plugin";
   // import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
   // hot: true,
   // analyze: false,
   // followSymlinks: true,
   // cache: true,
   // indicator: false,
   // hardSource: true,
   // productionGzip: true,
   // productionSourceMap: true,
   // productionGzipExtensions: ["js", "css", "svg"],
   // cacheGroups: {
   // 	svgGroup: {
   // 		test(module, chunks) {
   // 			const path = require("path");
   // 			return module.resource && module.resource.endsWith(".svg") && module.resource.includes(`${path.sep}cacheable_svgs${path.sep}`);
   // 		},
   // 	},
   // },
   // minimizer: [
   // 	// terser-webpack-plugin
   // 	// optimize-css-assets-webpack-plugin
   // ],
   // splitChunks: {
   // 	// chunks: "all",
   // 	// automaticNameDelimiter: ".",
   // 	// name: undefined,
   // 	// cacheGroups: {},
   // 	// maxSize: 51200,
   // 	// maxSize : 256000
   // },
   // app: "scripts/app.[name].[chunkhash:3].js",
   // chunk: "scripts/[name].[chunkhash:3].js",
   // vendor: "scripts/vendor.[name].[chunkhash:3].js",
   // manifest: "manifest/[name].[hash:3].js",
   // css: "styles/[name].[contenthash:3].css",
   // img: "[path][name].[contenthash:3].[ext]",
   // font: "[path][name].[contenthash:3].[ext]",
   // video: "[path][name].[contenthash:3].[ext]",
   // app: "scripts/app/[name].[chunkhash:3].js",
   // chunk: "scripts/[name].[chunkhash:3].js",
   // vendor: "scripts/vendor/[name].[chunkhash:3].js",
   // manifest: "manifest.[name].[hash:3].js",
   // css: "styles/[name].[contenthash:3].css",
   // img: "[path][name].[ext][query]",
   // font: "[path][name].[ext][query]",
   // video: "[path][name].[ext][query]",
   // if (ctx && ctx.isClient) {
   // 	// config.optimization.splitChunks.maxSize = 249856;
   // 	// config.optimization.splitChunks.maxSize = 51200;
   // 	// config.optimization.splitChunks.maxSize = 30720;
   // 	// config.devtool = 'eval-source-map'
   // }
   // config.module.rules.push({
   // 	enforce: "pre",
   // 	test: /\.(js|vue)$/,
   // 	loader: "eslint-loader",
   // 	exclude: /(node_modules)|(\.svg$)/ /* <--- here */,
   // });
}

function other() {
   /*
		 async downloadLinksImage({ state }) {
		 const https = require('https') // or 'https' for https:// URLs
		 const fs = require('fs')
 
		 await state.data
			 ?.filter((it) => it?.img)
			 .map((it) => {
				 const path = it.img.cdn,
					 url = it.img.url
 
				 fs.access?.(path, (error) => {
					 if (error) {
						 const file = fs.createWriteStream(path)
						 https.get(url, function (response) {
							 response.pipe(file)
							 file.on('finish', () => {
								 file.close()
							 })
						 })
					 }
				 })
			 })
	 },
 
 #[build]
 #	 dir="dist"
 #  publish = "dist/"
 
 [build.environment]
	 #CI = "1"
	 #CI = "true"
	 #functions="netlify/functions"
 
 #[[redirects]]
 #	from="/napi/*"
 #	to="/.netlify/functions/:splat"
 #	status="200"
 
 #[[redirects]]
 #	from="/"
 #	to="/ru-ru/"
 #	status="301"
 
 #[[redirects]]
 #	from="/about"
 #	to="/ru-ru/about"
 #	status="301"
 
 #[[plugins]]
 #  package = "netlify-plugin-html-validate"
 
 #		[plugins.inputs]
 #			ext = "html"
 #			config = ".htmlvalidate.json"
 
 #[[plugins]]
 #	package = "netlify-plugin-webmentions"
 
 #		[plugins.inputs]
 #			feedPath = "/feed.xml"
 #			limit = 1
 
 #[[plugins]]
 #	package = "netlify-plugin-fetch-feeds"
 
 #		[plugins.inputs]
 #			dataDir = "netlify/data"
 #			[[plugins.inputs.feeds]]
 #				name = "hawksworx"
 #				url = "https://hawksworx.com/feed.json"
 #				ttl = 3600
 #			[[plugins.inputs.feeds]]
 #				name = "netlify"
 #				url = "https://www.netlify.com/blog/index.xml"
 #				ttl = 86400
 
 #[dev]
 #	framework = "nuxt"
 #	port = 3000
 #	targetPort = 3000
	 #jwtSecret = "secret"
	 #jwtRolePath = "app_metadata.authorization.roles"
	 #port = 8888
	 #targetPort = 3000
	 #autoLaunch = true
 
 
 
 
  @nuxt/content @nuxt/static @nuxt/utils @nuxtjs/axios @nuxtjs/feed @nuxtjs/html-minifier @nuxtjs/html-validator @nuxtjs/localtunnel @nuxtjs/netlify-files @nuxtjs/pwa @nuxtjs/sitemap @nuxtjs/svg-sprite @nuxtjs/toast @nuxtjs/universal-storage @nuxtjs/webpack-profile @nuxtjs/webpackmonitor @windicss/animations @windicss/plugin-heropatterns @windicss/plugin-icons @windicss/plugin-interaction-variants @windicss/plugin-question-mark @windicss/plugin-scrollbar contentful contentful-management cookie-universal-nuxt core-js cross-env css-loader glob lottie-web node-sass nuxt nuxt-build-optimisations nuxt-content-body-html nuxt-helmet nuxt-ssr-cache nuxt-static nuxt-user-agent nuxt-windicss postcss postcss-import postcss-loader sass sass-loader tailwindcss-border-gradients tailwindcss-elevation tailwindcss-fluid tailwindcss-triangle-after vue-fragment vue-kinesis vue-slick-carousel vue-typed-js windicss @nuxtjs/google-analytics nuxt-animejs nuxt-fontagon nuxt-gsap-module nuxt-typed-router pug pug-plain-loader
 
  npm i core-js@3.20.0 vue@2.6.14 nuxt-windicss@2.2.1 vue-server-renderer@2.6.14 vue-template-compiler@2.6.14 webpack@5.65.0
 
 
 rm -rf node_modules package-lock.json && npm install && npm start
 
 "main": "nuxt.config.js",
 "type": "module",
 
 
 
 "engines": {
	 "node": ">=0.12"
 },
 "engineStrict": true
 
 <template>
	 <noscript inline-template>
		 <meta http-equiv="refresh" :content="'0.005;url=' + url" />
	 </noscript>
 </template>

<!--<ItemNoScript v-if="!unscript && !idScript" :id="idScript || false" />-->
 
 asyncData({ app, redirect }) {
	 if (!app.$cookies.get('openmw')) {
		 //  window.open('https://myw.tf/m8sk75', 'Приглашение попробовать новый маркетплейс', 'resizable=yes,scrollbars=yes,status=no,menubar=no,toolbar=no,location=no')
 
		 app.$cookies.set('openmw', 'true', {
			 path: '/',
			 maxAge: 604800, // 86400 * 7 - дней
			 sameSite: 'lax',
		 })
	 }
 
	 //console.log(app.$ua.deviceType())
 
	 app.$cookies.set('count-sessions', (app.$cookies.get('count-sessions') || 0) + 1, { path: '/', maxAge: 604800, sameSite: 'lax' })
 
	 app.$cookies.get('openmw') && app.$cookies.get('count-sessions') === 6
		 ? redirect(302, 'https://myw.tf/m8sk75')
		 : app.$ua.deviceType() === 'pc'
		 ? redirect('/about')
		 : redirect('/amp/about')
 },
 
 <svg class="h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.92 790"><path d="M251.05,287.24c-8.81-29.83,3.07-63.93,34.24-81,9.76-5.36,20.94-7.66,32.08-7.66h0a69.12,69.12,0,1,1-32.2,130.29,70.05,70.05,0,0,1-9-5.63c-90.68,56.36-169.38,121-224,182.39v69.93a43.93,43.93,0,0,0,22,38l304,175.54a44,44,0,0,0,43.92,0l42.64-24.62c-58.84-56.34-118.92-131.45-171.38-216.24a69,69,0,1,1,36.06-25c53.93,87.51,115.6,164,174.67,218.52l222-128.2a43.93,43.93,0,0,0,22-38V352.11C694.2,405.65,625.7,459.56,549.25,507.27a69,69,0,1,1-25.14-36c90.68-56.37,169.38-121,224-182.39V224.46a43.9,43.9,0,0,0-22-38L422.1,10.88a43.93,43.93,0,0,0-43.91,0l-39.88,23c59.38,56.51,120.1,132.24,173.05,217.83a69.1,69.1,0,1,1-41.74,34,68.07,68.07,0,0,1,5.67-9C420.85,188.38,358.5,111.3,298.9,56.67L74.15,186.43a43.9,43.9,0,0,0-22,38V442.4C106.11,388.87,174.6,335,251.05,287.24Z" transform="translate(-52.19 -5)" style="fill: rgb(255, 255, 255); fill-rule: evenodd;"></path><path d="M519.74,338.7a23,23,0,0,0,10.9,2.73,23.34,23.34,0,0,0,11-43.95,23,23,0,0,0-10.91-2.73,23.33,23.33,0,0,0-11,43.95Z" transform="translate(-52.19 -5)" style="fill: rgb(52, 166, 81); fill-rule: evenodd;"></path><path d="M274.08,458.58A23.33,23.33,0,1,0,285,461.3,23.31,23.31,0,0,0,274.08,458.58Z" transform="translate(-52.19 -5)" style="fill: rgb(86, 125, 191); fill-rule: evenodd;"></path><path d="M493.85,506.19A23,23,0,0,0,483,503.5a23.37,23.37,0,1,0,10.84,2.69Z" transform="translate(-52.19 -5)" style="fill: rgb(250, 186, 21); fill-rule: evenodd;"></path><path d="M317.29,291a23.34,23.34,0,1,0-10.83-2.68A23.06,23.06,0,0,0,317.29,291Z" transform="translate(-52.19 -5)" style="fill: rgb(232, 68, 55); fill-rule: evenodd;"></path></svg>
 
 asyncData({ $config: { NUXT_LOCALE, MAINTENANCE_MODE } }) {
	 // const posts = await fetch(`${baseURL}/posts`)
	 //   .then(res => res.json())
	 // console.log(NUXT_LOCALE)
 },
 mounted() {
	 console.log(this.$config)
 }
 
 "html.format.wrapAttributes": "force-aligned",
 "html.printWidth": 1200,
 "html.singleQuote": true,
 "[html]": {
	 "singleQuote": true,
	 "printWidth": 1200,
	 "format.wrapAttributes": "force-aligned"
 },
 "[scss]": {
	 "printWidth": 1000,
	 "format.wrapAttributes": "force-aligned"
 },
 "[sass]": {
	 "printWidth": 1000,
	 "format.wrapAttributes": "force-aligned"
 }
 "generate-analize": "nuxt generate --webpackmonitor --profile",
 "start": "cross-env NODE_ENV=start nuxt start",
 "generate": "nuxt generate",
 "static": "nuxt static",
 "generate-gulp": "nuxt generate && gulp",
 "netly-dev": "netlify dev",
 "netly-build": "netlify build",
 "netly-deploy": "netlify deploy --prod",
 "netly-build-start": "npm run netly-build && npm run start",
 "netly-build-deploy": "npm run netly-build && npm run netly-deploy",
 "netly-init": "netlify init",
 "dev+": "cross-env NODE_ENV=development && npm run dev"
 "@luxdamore/vue-cursor-fx": "^1.6.2",
 "@rnwcode/vue-mouse-cursor": "0.0.5",
 "@nuxtjs/prismic": "^1.3.1",
 "@nuxtjs/toast": "^3.3.1",
 "@prismicio/vue": "^2.0.11",
 "gotrue-js": "^0.9.29",
 "lodash": "^4.17.21",
 "nuxt-generate-cluster": "^2.7.0",
 "prismic-javascript": "^3.0.2",
 "tailwind": "^4.0.0",
 "v-tooltip": "^2.1.3",
 "vue-mouse-parallax": "^1.3.3",
 "vue-recognizer": "^1.1.3",
 "vue-lottie-player": "^0.1.9",
 "vue-input-facade": "^1.3.6",
 "@braid/vue-formulate": "^2.5.2"
 
 asyncData({ store, route, redirect }) {
	 const slug = route.params.slug
	 const title = String(slug).toUpperCase().split('_').join(' | ')
	 const item = Object.values(store.state.shortlinks).reduce(
		 (sum, socials) =>
			 Object.assign(
				 sum,
				 Object.values(socials).find((social) => social.s === slug)
			 ) && sum,
		 {}
	 )
	 console.log(item)
	 const link = item.l
	 const redir = () => redirect(link)
	 setTimeout(() => redir(), 1436 + Math.random() * 300)
	 return { title, link, slug }
 },
 
 const looped = () => {
	 loop += 2
	 speed = -speed
	 this.anime.pause(this.name)
	 this.anime.setSpeed(speed, this.name)
	 this.anime.play(this.name)
 
	 if (loop !== this.loop) setTimeout(looped(), dury)
 }
 
 looped()
 
  this.delay ? anime.setSpeed(0) || setTimeout(() => anime.setSpeed(Number(this.speed)), Number(this.delay)) : anime.setSpeed(Number(this.speed))
 
  this.specimen.setDirection(-1)
  let counter = 0
  let duration = (anime.getDuration(false) * 1000.0) / this.speed + this.duration
  const go = () => {
	  counter == 1 ? (duration = duration - this.duration) : null
	  speed = -speed
	  anime.setSpeed(speed)
	  counter++
	  console.log(counter)
	  console.log(duration)
	  setTimeout(go, duration) // callback
  }
  go()
  / this.speed
  - this.duration
  console.log((anime.getDuration(false) * 1000 * 0.95) / this.speed, this.speed)
  while (duration != 0) {
	  setTimeout(() => console.log('aaa'), 3000)
  }
  console.log(duration)
  setInterval(() => {
	  speed = speed > 0 ? -1 : speed
	  duration = speed > 0 ? duration / this.speed : duration
	  anime.setSpeed(speed)
  }, duration)
 
  anime() {
	  return lottie.loadAnimation({
		  container: this.$refs.animContainer,
		  name: this.name,
		  renderer: this.renderer,
		  loop: this.loop,
		  width: this.width,
		  height: this.height,
		  autoplay: this.autoplay,
		  animationData: this.dynamicLottie,
	  })
  },
 
  if (this.duration) {
	  anime.setSpeed(0)
	  setTimeout(() => anime.setSpeed(Number(this.speed)), Number(this.duration))
  } else {
	  anime.setSpeed(Number(this.speed))
  }
  Number(this.duration) * 1000
  this.duration
	  ? anime.setSpeed(0) && anime.autoplay(false) && setTimeout(() => anime.setSpeed(Number(this.speed)) && anime.autoplay(true), 5000)
	  : anime.setSpeed(Number(this.speed))
 
  this.duration ? anime.setSpeed(0) && setTimeout(() => anime.setSpeed(Number(this.speed)), 5000) : anime.setSpeed(Number(this.speed))
  if (check) this.anime().stop()
  console.log(check)
  if (this.reverse) {
	  const low = this.anime().getDuration(false) / speed
	  const duration = low * 500
 
	  setInterval(function() {
		  speed = -speed
		  this.anime().setSpeed(speed)
	  }, duration)
  }
  animate() {
	  if (this.mainMenu == 1) this.startAnimation()
	  else if (this.mainMenu == -1) this.startAnimation()
  },
 
 
 
 [[['Об 8.2.1', 'Об 8.2.0'], 'Об 8.1.0'], 'Об 8.0'],
 [['Об 7.4.1', 'Об 7.4.0'], 'Об 7.3', 'Об 7.2', 'Об 7.1', 'Об 7.0'],
 ['Об 6.1', 'Об 6.0'],
 'Об 5',
 'Об 4',
 'Об 3',
 'Об 2',
 'Об 1',
 
 const it = [1, 0]
 const ANU = recurseUpdate(update, 1, 0, 0).reverse()
 console.log(it)
 
 function recurseUpdate(items, go, gl, it) {
	 const result = items.reverse().reduce((sum, item, i) => {
		 Array.isArray(item)
			 ? sum.push(...recurseUpdate(item, (go += 1), (gl += 1), it + i + 1)) && (gl -= 1)
			 : sum.push({
					 index: go + '.' + gl + '.' + (it === 0 ? i + 1 : it),
					 value: item,
			   })
 
		 return sum
	 }, [])
 
	 return result
 }
 
 console.log(elementDepth(update))
 function elementDepth(array) {
	 function extract(arr) {
		 var newArr = []
		 for (let i = 0, z = 0; arr[i] != undefined; i++, z++) {
			 if (arr[i][1].constructor.name != 'Array') {
				 newArr[z] = arr[i]
			 } else {
				 newArr.push(...arr[i][1].map((e) => [arr[i][0] + 1, e]))
				 z += arr[i][1].length - 1
			 }
		 }
		 if (newArr.filter((i) => i != undefined).length != newArr.length) {
			 var g = newArr.map((i) => {
				 if (i == undefined) {
					 return [-1, '']
				 } else {
					 return i
				 }
			 })
			 return extract(g)
		 } else if (newArr.filter((i) => i[1].constructor.name == 'Array').length > 0) {
			 return extract(newArr)
		 } else {
			 return newArr
		 }
	 }
	 var x = array.map((i) => [0, i])
	 return extract(x)
 }
 
 console.log(it[0], ' - ', args[0])
 
 it[0]-- && sum.push(...recurseUpdate(item, it))
 console.log(item, ' - ', it[0])
 && (iterator[0] += 1)
 console.log(args.join('.'))
 
 function setItem(item, i) {}
 
 function recurseUpdate(item, i, j = 0) {
	 return Array.isArray(item)
		 ? item.reverse().reduce((sum, item) => {
 
				 recurseUpdate(item, i, (j += 1))
 
				 return sum
		   }, [])
		 : {
				 index: i + '.' + j,
				 value: item,
		   }
 }
 
 update.reverse().reduce((sum, item, i) => {
	 Array.isArray(item)
		 ? sum.push(...recurseUpdate(item, i + 1))
		 : sum.push({
				 index: i + 1 + '.0',
				 value: item,
		   })
 
	 return sum
 }, [])
 
 const title =
	 year
		 .split('')
		 .map((it, i) => it + '~' + category[i])
		 .join('~') +
	 '~' +
	 category
		 .split('')
		 .filter((it, i) => i >= year.split('').length)
		 .join('~')
 */
}
//setTimeout(() => this.setAnimation(), 500)
//<!--<div class="flex-grow filter drop-shadow-lg lg:(grid grid-cols-3) <lg:(flex flex-col) ">-->
//  <!-- , { 'elevation-10': i == 2 } ДОБАВИТЬ ТЕНИ ПО БОКАМ -->
//  <!-- 	@click.native.prevent="redirect(it.name)" -->
//  <!--<ItemMediaStrapiBg
//      :class="[
//        it.name,
//        'flex-grow flex-center relative flex-col cursor-pointer text-light-200 relative bg-top bg-cover <lg:(bg-contain max-w-1/2 flex-shrink flex-grow-0 min-h-300px)',
//        { '<lg:(mr-auto z-0)': i == 0 },
//        { '<lg:(ml-auto -my-30 z-10)': i == 1 },
//        { '<lg:(mr-auto z-20)': i == 2 },
//      ]"
//      v-for="(it, i) in [
//        { name: 'developer', img: '', title: 'Разработчик' },
//        { name: 'designer', img: '', title: 'Дизайнер' },
//        { name: 'entrepreneur', img: '', title: 'Предприниматель' },
//      ]"
//      :key="i"
//      :src="data.Imgs.data[i].attributes.url"
//      :alt="data.Imgs.data[i].attributes.name"
//    >
//      <div class="text-center">{{ it.title }}</div>
//    </ItemMediaStrapiBg>-->

//  <!--<div class="js-object-log"></div>
//			<div class="">{{ properties[it.name] }}</div>
//			<div class="demo-content align-center morphing-demo">
//				<svg width="140" height="140" viewBox="0 0 140 140">
//					<g fill="none" fill-rule="evenodd">
//						<g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
//							<polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
//							<polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
//							<polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
//							<polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
//						</g>
//						<polygon
//							class="polymorph"
//							stroke-width="1"
//							stroke="currentColor"
//							points="70 39.111670180848165 118.68507822465598 59.48007822465599 109.9231395287841 130.96482663016016 59.7442177534401 86.51932981915184 18.537670180848167 59.702530652064056 "></polygon>
//					</g>
//				</svg>
//			</div>-->
//  <!--</div>-->

//  <!-- Опыт работы
//    Strong web programming experience (HTML | PUG | CSS | SCSS | STYLUS | POSTCSS | JS | JQuery | Vue | PHP | TWIG | SQL + Database). While working and for myself, I created assemblies of Nuxt, Gridsome, Gatsby, Vue, Webpack, Laravel, Laravel Mix (with its own Webpack modules) and examples from site layouts. Also collected prototypes of popular CMS (Wordpress, Strapi, October, Ghost, Storybook) with their own internal plugins. Familiar with the Webflow and Tilda constructors. I use hosting Google (for portfolio), Beget (for server sites), Netlify (static sites - SG with SSR).

//    In parallel, I am developing in the areas of design and brand promotion. The main Figma tool (convenience, speed, quality), for additional purposes Affinity Photo (analogue of PS), MIRO. For inspiration, I have Figma Templates, Dribbble, Behance, VK Group (more than 10 sources) and real sites or layouts of sites on freelance (orders or viewed projects).

//    Average experience in programming in C# and C-like languages, I understand the mathematical language LaTeX and mathematical packages Maple and MatLab.

//    Little experience in developing native applications, Android Studio + Kotlin, as well as a bunch of Flutter with the Dart programming language.

//    I can and practice writing articles, term papers, and creating any presentations and presentation templates.
//    -->
//this.$anime({
//	targets: this.properties,
//	developer: 100,
//	designer: 200,
//	entrepreneur: 300,
//	easing: 'linear',
//	duration: () => this.$anime.random(2300, 4200),
//	delay: () => this.$anime.random(550, 850),
//	round: 1,
//	//update: function () {
//	//	//JSON.stringify(this.properties)
//	//},
//})
//console.log(this.$anime.random(0, 270))
//this.$anime({
//	targets: '.morphing-demo .polymorph',
//	points: [
//		{
//			value: [
//				'70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//				'70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
//			],
//		},
//		{ value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//		{ value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//		{ value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' },
//	],
//	easing: 'easeOutQuad',
//	duration: 2000,
//	loop: true,
//})
//<!--<div class="canvas-container">
//<canvas class="list-1 canvas-list"></canvas>
//<canvas class="list-2 canvas-list"></canvas>
//<canvas class="list-3 canvas-list"></canvas>
//</div>-->

//<!--<div class="flex-center relative">-->
//<!--<div :class="['portfolio-block-container', `block-${i + 1}`]" v-for="(it, i) in items" :key="i">
//   <div :class="['flex-center mr-[0.5vmin]', { 'flex-row-reverse rtl ml-[0.5vmin] mr-0': i === 2 }]">
//      <div class="text-[10vmin] text-green-200">{{ it.s1 }}</div>

//      <div class="-mt-1 tracking-[2px]">
//         <div class="text-[4.5vmin] text-indigo-200">{{ it.s2 }}</div>
//         <div class="text-[4.5vmin] text-indigo-200">{{ it.s3 }}</div>
//      </div>
//   </div>
//</div>-->
//<!--</div>-->
/**
 * "anchors-away", "architect", "autumn", "aztec", "bamboo", "bank-note", "bathroom-floor", "bevel-circle", "boxes", "brick-wall", "bubbles", "cage", "charlie-brown", "church-on-sunday", "circles-squares", "circuit-board", "connections", "cork-screw", "current", "curtain", "cutout", "death-star", "diagonal-lines", "diagonal-stripes", "dominos", "endless-clouds", "eyes", "falling-triangles", "fancy-rectangles", "flipped-diamonds", "floating-cogs", "floor-tile", "formal-invitation", "four-point-stars", "glamorous", "graph-paper", "groovy", "happy-intersection", "heavy-rain", "hexagons", "hideout", "houndstooth", "i-like-food", "intersecting-circles", "jigsaw", "jupiter", "kiwi", "leaf", "lines-in-motion", "lips", "lisbon", "melt", "moroccan", "morphing-diamonds", "overcast", "overlapping-circles", "overlapping-diamonds", "overlapping-hexagons", "parkay-floor", "piano-man", "pie-factory", "pixel-dots", "plus", "polka-dots", "rails", "rain", "random-shapes", "rounded-plus-connected", "signal", "skulls", "slanted-stars", "squares", "squares-in-squares", "stamp-collection", "steel-beams", "stripes", "temple", "texture", "tic-tac-toe", "tiny-checkers", "topography", "volcano-lamp", "wallpaper", "wiggle", "x-equals", "yyy", "zig-zag" 
 * 
 // plugin(({ e, theme, prefix, config, postcss, variants, addBase, addVariant, addUtilities, addComponents, addDynamic }) => {
 // 	addBase(require("./addition/add-base")(), { variants: [] });
 // 	addUtilities(require("./addition/add-utilities"), { variants: [] });
 // 	addComponents(require("./addition/add-components"), { variants: ["responsive"] });
 // })
 //variants: [],
 //patterns: [], //"hexagons", "diagonal-lines", "rain"
		// range(2).map((i) => `vertical-text-field-${i}`),
		// range(2).map((i) => `vertical-text-cursor-${i}`),
// function alias() {
// 	return {
// 		// 		hstack: "flex items-center",
// 		// 		vstack: "flex flex-col",
// 		// 		icon: "w-6 h-6 fill-current",
// 		// 		app: "text-red",
// 		// 		"app-border": "border-gray-200 dark:border-dark-300",
// 	};
// }
		// backgroundImage: {
		// 	telegramm: (theme) => ({
		// 		telegram: "url('/img/hero-pattern.svg')",
		// 	}),
		// },
		// icon: {
		// 	telegram: "background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'%3e%3cpath fill='%2329b6f6' d='M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z'/%3e%3cpath fill='%23fff' d='M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z'/%3e%3cpath fill='%23b0bec5' d='M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z'/%3e%3cpath fill='%23cfd8dc' d='M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z'/%3e%3c/svg%3e\")",
		// require("windicss/plugin/forms"),
		// require("@windicss/plugin-scrollbar"),
		// require("windicss/plugin/scroll-snap"),
		// require("@windicss/plugin-interaction-variants"),
		// require("windicss/plugin/aspect-ratio"),
		// require("@windicss/plugin-question-mark"),
		// transform("tailwindcss-border-gradients")(),
		// transform("tailwindcss-triangle-after"),
		// transform("tailwindcss-debug-screens"),
		// require("tailwindcss-debug-screens"),
		// transform("tailwindcss-fluid"),
		// classes: [],
		// variants: ['responsive', 'hover', 'reduced-motion'],

		// import config from "./app.config";
		// import plugin from "windicss/plugin";
		// import colors from "windicss/colors";
			//host: 4444,
			// dev: config.isDev,
			// alias: alias(),
			// transformCSS: "pre",
				// 'aos-init',
				// 'aos-animate',
				// 'data-aos-delay',
				// 'data-aos-duration',
				// 'fade-up',
				// 'zoom-in',
*/
