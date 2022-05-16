import { apiEndpoint } from './sm.json'
import app_config from './app.config'

const { plugins, buildModules, modules, transpile } = includes()

export default {
	...middleware(),
	...components(),
	...generate(),
	...sitemap(),
	...prismic(),
	...router(),
	...custom(),
	...render(),
	...server(),
	...build(),
	...hooks(),
	...i18n(),
	...css(),

	buildModules,
	modules,
	plugins,
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
	return { serverMiddleware: [] }
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
			exclude: [/^\/test/, ...exd],
		},
	}
}

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
			langDir: '~/locales/',
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
		components: true,
		// {
		//	watch: true,
		//	prefetch: true,
		//	path: '~/components/',
		//	extensions: ['vue', 'js'],
		//},
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
			'@nuxtjs/prismic',
		],
		plugins = [
			'@plugins/passive/mixins',
			'@plugins/passive/directives',
			'@plugins/active/VueTypedJs',
			'@plugins/active/QR.js',
		],
		modules = [
			'@nuxtjs/markdownit',
			'@nuxtjs/i18n',
			'@nuxt/content',
			'@nuxtjs/toast',
			['cookie-universal-nuxt', { path: '/', maxAge: 604800, sameSite: 'lax' }],
			'nuxt-parallel-middleware',
		],
		transpile = ['@prismicio/vue', 'lottie-web', 'vue-typed-js']

	return {
		buildModules: buildModules.concat(DevBuildModules, OptimizeBuildModules),
		plugins: plugins,
		modules: modules,
		transpile: transpile,
	}
}

function prismic() {
	return {
		prismic: {
			//previewReloadType: 'hot',
			components: true,
			preview: false,
			endpoint: apiEndpoint,
			modern: true,
		},
	}
}

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
			dist: './fonts/fg',
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

function comments() {
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
