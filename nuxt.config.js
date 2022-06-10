//import { apiEndpoint } from './sm.json'
import app_config from './app.config'

const { plugins, buildModules, modules, transpile } = includes()

export default {
	...middleware(),
	...components(),
	...generate(),
	...sitemap(),
	//...prismic(),
	...router(),
	...custom(),
	...render(),
	...server(),
	//...strapi(),
	...build(),
	...hooks(),
	...i18n(),
	//...css(),

	buildModules,
	modules,
	plugins,
}

function strapi() {
	return {
		strapi: {
			url: process.env.STRAPI_URL || 'http://localhost:1337',
			prefix: '/api',
			entities: ['links'],
			//version: 'v4',
			cookie: {},
		},
	}
}

function server() {
	return {
		server: {
			//host: '0.0.0.0',
			//host: process.env.NUXT_ENV_HOST_0 ? '0.0.0.0' : 'localhost',
		},
	}
}

function router() {
	return {
		router: {
			fallback: true,
			mode: 'history',
			prefetchLinks: true,
			prefetchPayloads: true,
			linkActiveClass: 'nav-item-active',
			linkExactActiveClass: 'exact-active-link',
			linkPrefetchedClass: 'link-prefetched',
		},
	}
}

function sitemap() {
	return {
		sitemap: {
			hostname: app_config.host,
			cacheTime: 300000,
			gzip: false,
			defaults: {
				changefreq: 'daily',
				priority: 1,
				lastmod: new Date(),
			},
		},
	}
}

function middleware() {
	return {
		//serverMiddleware: []
	}
}

function generate() {
	const exd =
		app_config.excluded?.reduce(
			(sum, ex) =>
				i18n().i18n.locales?.map((lc) => sum.push(new RegExp('^/' + lc.code + '/' + ex + ''))) &&
				sum,
			[]
		) ?? []

	return {
		generate: {
			dir: 'dist',
			interval: 50,
			fallback: true,
			nojekyll: false,
			concurrency: 2000,
			subFolders: false,
			devtools: app_config.isDev ? true : false,
			exclude: [/^\/test/, /^\/z/, ...exd],

			//routes() {
			//	return staticRoutes()
			//},
		},
	}
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
	return { hooks: {} }
}

function i18n() {
	const locales = [
		{ code: 'ru-ru', iso: 'ru-RU', name: 'Русский', file: 'ru-RU.js' },
		//{ code: 'en-es', iso: 'en-ES', name: 'English', file: 'en-ES.js' },
	]

	locales?.map((locale) => {
		locales.push({
			code: locale.code + '-amp',
			iso: locale.iso,
			name: locale.name,
			file: locale.file,
		})
	})

	return {
		i18n: {
			seo: true,
			lazy: false,
			strategy: 'prefix', //prefix prefix_except_default
			vueI18nLoader: true,
			defaultLocale: 'ru-ru', //ru-ru
			//langDir: '~/locales/',
			noPrefixDefaultLocale: true, //true false
			vuex: { moduleName: 'i18n', syncLocale: false, syncMessages: false, syncRouteParams: false },
			locales,
		},
	}
}

function build() {
	return {
		build: {
			cache: false,
			target: 'static',
			optimizeCss: false,
			transpile: transpile,
			friendlyErrors: false,
			parallel: false,
			cssSourceMap: false,
			...(!app_config.isDev && { publicPath: '/public/' }),
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
					chunks: 'all',
					automaticNameDelimiter: '/',
					name: undefined,
					maxSize: 51200,
				},
			},
			maxChunkSize: 51200,
			...(!app_config.isDev && {
				extractCSS: true,
				filenames: {
					app: 'scripts/[chunkhash:5].js',
					chunk: 'scripts/[chunkhash:5].js',
					vendor: 'scripts/[chunkhash:5].js',
					manifest: 'manifest.[hash:5].js',
					css: 'styles/[contenthash:5].css',
					img: '[path]img_[hash:8].[ext]',
					font: '[path][name].[ext]',
					video: '[path][name]_[hash:5].[ext]',
				},
			}),
			extend(config, ctx) {
				ctx.loaders.scss.additionalData = '@use "sass:math";'
				config.module.rules.push({
					test: /\.ico$/,
					loader: 'url-loader',
					query: {
						limit: 1,
						name: '[path]favicon_[hash:8].[ext]',
					},
				})
				config.module.rules.push({
					test: /\.pdf$/,
					loader: 'file-loader',
					query: {
						limit: 1,
						name: '[path][name]_[hash:8].[ext]',
					},
				})
			},
		},
	}
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
			'~/components',
			//{ path: '~/slices', prefix: '', extensions: ['vue'] }
		],
	}
}

function css() {
	return { css: ['~/assets/index.scss'] }
}

function env() {
	return {
		CTF_MODEL_ARTICLES: 'article',
		CTF_MODEL_UPDATES: 'update',
		CTF_MODEL_LINKS: 'linked',
		CTF_MODEL_PROGRAMS: 'program',
		CTF_MODEL_SHORTLINK: 'shortlink',
		CTF_MODEL_CATEGORIES: 'category',
		PRC_CDA_ACCESS_TOKEN: process.env.PRC_CDA_ACCESS_TOKEN,
	}
}

function includes() {
	const dev = true,
		DevBuildModules = app_config.isDev ? [] : [],
		OptimizeBuildModules = app_config.optimization ? [] : [],
		buildModules = [
			'nuxt-windicss',
			'nuxt-user-agent',
			'nuxt-fontagon',
			'@/plugins/active/GSR',
			//'@nuxtjs/prismic',
			//'nuxt-stories',
			//'@nuxtjs/strapi',
			//'@nuxtjs/apollo',
		],
		plugins = [
			'@plugins/passive/mixins',
			'@plugins/passive/directives',
			'@plugins/active/VueTypedJs',
			'@plugins/active/QR.js',
		],
		modules = [
			//'@nuxtjs/markdownit',
			'@nuxtjs/i18n',
			//'@nuxt/content',
			//'@nuxtjs/toast',
			['cookie-universal-nuxt', { path: '/', maxAge: 604800, sameSite: 'lax' }],
			//'nuxt-parallel-middleware',
			//'@nuxtjs/strapi',
			//'@nuxtjs/proxy',
		],
		//'@prismicio/vue', 'vue-slicezone', 'lottie-web',
		transpile = ['vue-typed-js']

	return {
		buildModules: buildModules.concat(DevBuildModules, OptimizeBuildModules),
		plugins: plugins,
		modules: modules,
		transpile: transpile,
	}
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
		target: 'static',
		loading: false,
		telemetry: false,
		globalName: 'app',
		globals: {
			id: `app`,
		},
		googleAnalytics: {
			id: 'UA-176733004-3',
		},
		//apollo: {
		//	clientConfigs: {
		//		default: {
		//			httpEndpoint: 'http://localhost:1337/graphql',
		//		},
		//	},
		//},
		//proxy: {
		//	'/api/strapi': {
		//		target: 'http://localhost:1337',
		//		pathRewrite: {
		//			'^/api/strapi': '/',
		//		},
		//	},
		//},
		//strapi: {
		//	//url: '/api/strapi',
		//	//key: 'userJwt',
		//	url: 'http://localhost:1337',
		//	//entities: ['links'],
		//	//cookie: {
		//	//	sameSite: 'lax',
		//	//},
		//},
		storybook: {
			// Options
		},
		stories: {
			//lang: 'ru',
			forceBuild: false,
			storiesDir: './assets/stories',
		},
		markdownit: {
			runtime: true,
			preset: 'default',
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
			files: ['./assets/fontagon/*.svg'],
			dist: './fonts/icons/fg',
			fontName: 'font-svg',
			formatOptions: {
				svg: {
					normalize: true,
					fontHeight: 1000,
				},
			},
			styleTemplate: {
				css: 'assets/fontagon/hbs/css.hbs',
			},
			order: ['eot', 'ttf', 'svg', 'woff2', 'woff'],
			baseClass: 'fg',
			classPrefix: 'fg',
			style: 'css',
		},
		...(app_config.optimization && {
			buildOptimisations: buildOptimisations(app_config),
		}),
		publicRuntimeConfig: {
			app: app_config,
			isDev: app_config.isDev,
			baseUrl:
				process.env.BASE_URL ||
				(app_config.isDev || process.env.NUXT_ENV_GENDEV
					? 'http://localhost:3000'
					: app_config.host),
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
	}
}

function buildOptimisations() {
	return {
		profile: 'safe',
		...(!app_config.isDev && {
			features: {
				hardSourcePlugin: false,
			},
		}),
	}
}

function render() {
	return {
		ssr: true,
	}
}

function motion() {
	return {
		directives: {
			'pop-bottom': {
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
	}
}

function pwa() {
	return {
		pwa: {
			icon: {
				fileName: 'favicon.png',
			},
			meta: {
				charset: false,
				viewport: false,
				mobileApp: true,
				mobileAppIOS: false,
				appleStatusBarStyle: 'black',
				favicon: true,
				name: app_config.name,
				author: app_config.author,
				description: app_config.description,
				theme_color: '#000000',
				lang: app_config.lang,
				ogType: 'website',
				ogSiteName: app_config.name,
				ogTitle: app_config.name,
				ogDescription: app_config.description,
				ogHost: app_config.host,
				ogImage: true,
				ogUrl: app_config.host,
				twitterCard: 'summary',
				twitterSite: app_config.host,
				twitterCreator: app_config.autor,
			},
			manifest: {
				name: app_config.name,
				short_name: app_config.name,
				display: 'standalone', // 'browser', 'fullscreen', 'standalone', 'minimal-ui'
				description: app_config.description,
				crossorigin: 'use-credentials',
				background_color: '#ffffff',
				theme_color: '#000000',
				dir: 'ltr',
				lang: app_config.lang,
			},
			workbox: {
				offline: true,
				autoRegister: true,
				offlineAnalytics: true,
				enabled: app_config.isDev,
				autoRegister: app_config.isDev,
			},
		},
	}
}

function netlify() {
	const redirects = []

	if (process.env.MAINTENANCE_MODE == true)
		redirects.push({
			from: '/*',
			to: app_config.MAINTENANCE_PAGE,
			status: 301,
		})

	return {
		netlify: {
			detectForms: true,
			copyExistingFiles: true,
			netlifyToml: {
				build: {
					environment: require('dotenv').config().parsed,
				},
				...(redirects != [] && {
					redirects,
				}),
			},
		},
	}
}
