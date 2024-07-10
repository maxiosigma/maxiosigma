// SETTINGS Shared View State  New Window Dimensions

//import WindiCSS from 'vite-plugin-windicss'
//import { fileURLToPath, URL } from 'url'
//import { resolve } from 'path'
//ssr: false,
//debug: true,
//devtools: true,

//renderJsonPayloads: true,

//viewTransition: true,
//noVueServer: true,
//watcher: 'parcel',
//alias: [{ find: '@data', replacement: fileURLToPath(new URL('./assets/data', import.meta.url)) }],
//{ '~data': `${resolve(__dirname, './assets/data')}` },
//exclude: [],
//minify: {
//    collapseWhitespace: false,
//},

//nitro: {
//    preset: 'node',
//    prerender: {
//        ignore: [
//            //        //
//            //        '/assets/data',
//            //        'assets/data/*.json',
//            //        'assets/data/**/*.json',
//            '**/*.json',
//        ],
//    },
//},
//ignore: ['assets/data/*.json', 'assets/data/**/*.json'],
//strategy: 'prefix_and_default',
//vueI18n: './i18n.config.ts',
//cookieCrossOrigin: true,
//alwaysRedirect: true,
//fallbackLocale: 'ru',
//base: 'contented',
//api: {
//    baseURL: '/contented', // '/api/_content'
//},
//locales: ['en', 'ru', 'zh', 'en-amp', 'ru-amp', 'zh-amp'],
//defaultLocale: 'en',
//nuxtIcon: {
//    size: '32px',
//    class: 'icon',
//    aliases: {
//        nuxt: 'logos:nuxt-icon',
//    },
//},
//windicss: {
//    analyze: true,
//},
//pwa: {
//},
//toast: {
//    position: 'bottom-center',
//    register: [
//        {
//            name: 'Toast',
//            message: 'Oops...Something went wrong',
//            options: {
//                type: 'error',
//            },
//        },
//    ],
//},

//maxiosigma-nuxt-test.firebaseapp.com
//firebase hosting:channel:deploy preview --expores 1h

//"paths": {
//	"maxiosigma_libs/*": [
//		"../global-libs/index.js",
//		"../global-libs/windi.js"
//	]
//},

// ПКМ → ИЗМЕНИТЬ WHEN
//{ "key":"ctrl+right",       "command":"cursorWordStartRight",       "when":"editorTextFocus" }
//{ "key":"ctrl+shift+right", "command":"cursorWordStartRightSelect", "when":"editorTextFocus" }

//$device.isDesktop
//$device.isMobile
//$device.isTablet
//$device.isMobileOrTablet
//$device.isDesktopOrTablet
//$device.isIos
//$device.isWindows
//$device.isMacOS
//$device.isApple
//$device.isAndroid
//$device.isFirefox
//$device.isEdge
//$device.isChrome
//$device.isSafari
//$device.isSamsung
//$device.isCrawler

//https://www.npmjs.com/package/vue-toast-notification

//https://vueuse.org/core/useWebNotification/#usewebnotification
//https://vueuse.org/integrations/useSortable/
//https://vueuse.org/core/useStepper/
//https://vueuse.org/core/useOffsetPagination/

//https://vueschool.io/articles/vuejs-tutorials/7-awesome-vue-js-3-plugins-and-libraries-to-know-in-2023/

// Сделать всё без разделения на блоки

//if (sourceType === 'mouse')
//console.log(useBreakpoints())

//<!--<NuxtLayout name="page">-->
//<!--</NuxtLayout>-->

//import gqlWorks from "~/assets/gql/works.gql";

//const { x, y } = useMouse();
//const isDark = usePreferredDark();
//console.log(isDark.value);

//onMounted(async () => {});

//const graphql = useStrapiGraphQL();
//const works = await graphql(gqlWorks);
//console.log(works);

//const appConfig = useAppConfig();
//console.log(appConfig.title);

//<Teleport to="body"> <div v-if="open" class="modal">
//    <p>Hello from the modal!</p>
//    <button @click="open = false">Close</button>
//  </div></Teleport>

//useSchemaOrg([
//	// @todo Select Identity: https://vue-schema-org.netlify.app/guide/guides/identity
//	defineWebSite({
//		name: "My Awesome Website",
//	}),
//	defineWebPage(),
//]);
//const { idle, lastActive } = useIdle(5 * 60 * 1000) // 5 min
//const title = useTitle('New Title')

//const isLeft = usePageLeave(); // Подожди не уходи ...

//runtimeConfig: частные или общедоступные токены, которые необходимо указать после сборки с использованием переменных среды.

//app.config: общедоступные токены, которые определяются во время сборки, конфигурация веб-сайта, такая как вариант темы, заголовок и любая конфигурация проекта, которые не являются конфиденциальными.

//const appConfig = useAppConfig();
//const runtimeConfig = useRuntimeConfig();
//const route = useRoute();
//// When accessing /posts/1, route.params.id will be 1
//console.log(route.params.id);

//definePageMeta({
//	middleware: "auth",
//});

//const user = useStrapiUser()
//const { findOne, count  } = useStrapi()
//const { update } = useStrapi4()
//const total = await count('restaurants')

//const graphql = useStrapiGraphQL()

//	const restaurant = await graphql(`
//  query {
//    restaurant(id: ${route.params.id}) {
//      data {
//        id
//        attributes {
//          name
//        }
//      }
//    }
//  }
//`);

//const restaurant = await graphql(query, { id: route.params.id });
//const url = useStrapiUrl()
//const token = useStrapiToken()
//const version = useStrapiVersion()

//const { data: count } = await useFetch('/api/count')
//Page visits: {{ count }}

//const { pending, data: posts } = useLazyFetch('/api/posts')
//watch(posts, (newPosts) => {
//  // Because posts starts out null, you will not have access
//  // to its contents immediately, but you can watch it.
//})

//"@nuxt/types", "@types/node", "@nuxtjs/axios"

//"compilerOptions": {
//	"types": []
//},
//"vueCompilerOptions": {
//	"plugins": ["@volar/vue-language-plugin-pug"]
//}

//const { data } = await useAsyncData('count', () => $fetch('/api/count'))
//Page visits: {{ data }}

//const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
//watch(count, (newCount) => {
//  // Because count starts out null, you won't have access
//  // to its contents immediately, but you can watch it.
//})
//{{ pending ? 'Loading' : count }}

//import stylus from "stylus";

//function stylusApplyPlugin() {
//	// = { define: null }
//	return function (style) {
//		style.define("apply", function () {
//			const strings = Object.keys(arguments).map((key) => arguments[key].string);
//			return new stylus.nodes.String(`@apply ${strings.join(" ")};`, " ");
//		});
//	};
//}

//alias: {
//	'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
//	'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
//	'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
//}

//nitro: {
//	//prerender: {
//	//  routes: ['/user/1', '/user/2']
//	//}
//},

//webpack: {
//	extractCSS: true,
//	plugins: [new WindiCSSWebpackPlugin()],
//	//filenames: {
//	//	app:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//	chunk:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//	css:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//	img:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//	font:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//	video:
//	//		() =>
//	//		({ isDev }) =>
//	//			isDev ? "[name].js" : "[id].[name].[contenthash].js",
//	//},
//},

//strapi: {
//	url: "http://localhost:1337",
//	prefix: "/api",
//	version: "v4",
//},
//
//"virtual:windi-base.css",
// "virtual:windi-components.css",
//  "virtual:windi-utilities.css"

// AutoImport
// plugins: [] .server .client

//schemaOrg: {
//	canonicalHost: "https://maxiosigma.web.app",
//},

//nuxtIcon: {
//	size: "24px",
//	aliases: {
//		nuxt: "logos:nuxt-icon",
//	},
//},

//i18n: {
//	/* module options */
//},

//buildModules: [
//	//
//	//"nuxt-windicss",
//	//"@nuxt-hero-icons/outline/nuxt",
//	//"@nuxt-hero-icons/solid/nuxt",
//],

//import plugin from 'windicss/plugin'
////import colors from 'windicss/colors'
////import theme from 'windicss/defaultTheme'
//import { defineConfig, transform } from 'windicss/helpers'

//import pluginLineClamp from 'windicss/plugin/line-clamp'
//import pluginTypography from 'windicss/plugin/typography'

//import pluginIcons from '@windicss/plugin-icons'
//import pluginAnimations from '@windicss/plugin-animations'
//import pluginHeropatterns from '@windicss/plugin-heropatterns'

//export default defineConfig({
//    attributify: false,
//    shortcuts: shortcuts(),
//    theme: {
//        //...themeBase(),
//        extend: themeExtend(),
//    },
//    //variants: {
//    //   extend: {
//    //      //   backgroundColor: [
//    //      //      "group-focus-within",
//    //      //      "group-focus-visible",
//    //      //      "group-active",
//    //      //      "group-visited",
//    //      //      "group-disabled",
//    //      //      "hocus",
//    //      //      "group-hocus",
//    //      //      "can-hover",
//    //      //      "no-hover",
//    //      //   ],
//    //   },
//    //},
//    plugins: plugins(),
//    safelist: safelist(),
//    extract: extract(),
//    //preflight: {
//    //	alias: {
//    //		// add nuxt aliases
//    //		"nuxt-link": "a",
//    //		// @nuxt/image module
//    //		"nuxt-img": "img",
//    //	},
//    //},
//})

//function safelist() {
//    return [
//        range(10).map((i) => `order-${i}`),
//        range(20).map((i) => `pl-[${i}%]`),
//        //range(10).map((i) => `pl-${i * 3}`),
//        //range(30).map((i) => `animate-delay-${((i + 1) * 3) / 10}s`),
//        //range(30).map((i) => `animate-delay-${((i + 1) * 5) / 10}s`),
//        //range(30).map((i) => `animate-duration-${((i + 1) * 5) / 10}s`),
//        //range(30).map((i) => `hue-rotate-${(i + 1) * 5}`),
//    ]
//}

//function themeExtend() {
//    return {
//        fontFamily: {
//            vetka: ['Vetka'],
//            roboto: ['Roboto'],
//            raleway: ['Raleway'],
//            poppins: ['Poppins'],
//            ttnorms: ['TT Norms'],
//            windctt: ['Wind CTT'],
//            futuranew: ['Futura New'],
//            robotoslab: ['Roboto Slab'],
//            futuranewbook: ['Futura New Book'],
//            oranienbaum: ['Oranienbaum'],
//            nanumpen: ['Nanum Pen', 'cursive'],
//        },
//        fontSize: {
//            h1: '64px',
//            h2: '48px',
//            h2_1: '164px',
//            h3: '36px',
//            h4: '32px',
//            h5: '26px',
//            h6: '20px',
//            h7: '18px',
//            h8: '14px',
//            h9: '10px',
//            text: '20px',
//        },
//        colors: {
//            self: {
//                1: '#0C2142',
//                2: '#003366',
//                3: '#F1860E',
//                4: '#22C2B5',
//                5: '#499DF3',
//                6: '#FFC300',
//                7: '#E2E8F0',
//            },
//        },
//        backgroundSize: {
//            '0.25px': '0.25px',
//            '0.5px': '0.5px',
//            '1px': '1px',
//            '2px': '2px',
//            '3px': '3px',
//            '4px': '4px',
//            '5px': '5px',
//            '0.25r': '0.25rem',
//            '0.5r': '0.5rem',
//            '1r': '1rem',
//            '2r': '2rem',
//            '3r': '3rem',
//            '4r': '4rem',
//            '5r': '5rem',
//            '6r': '6rem',
//            '7r': '7rem',
//            '8r': '8rem',
//            '9r': '9rem',
//        },
//        animation: {
//            'custom-wiggle': 'wiggle 1s ease-in-out infinite',
//            'custom-world-rotate': 'worldRotate 1s ease-in-out infinite',
//            'custom-opacity': 'customOpacity 1s ease-in-out',
//        },
//        keyframes: {
//            wiggle: { '0%, 100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
//            worldRotate: { '0%, 100%': { transform: 'rotate3D(0, -1, 0, 360deg)' }, '50%': { transform: 'rotate3D(0, 1, 0, 360deg)' } },
//            customOpacity: { from: { opacity: 0.0 }, to: { opacity: 0.85 } },
//        },
//    }
//}

//function themeBase() {
//    return {}
//}

//function plugins() {
//    return [
//        pluginIcons,
//        require('windicss/plugin/typography'),
//        require('windicss/plugin/aspect-ratio'),
//        require('@windicss/plugin-question-mark'),
//        pluginTypography,
//        pluginLineClamp,
//        transform('tailwindcss-elevation')(['responsive']),
//        pluginAnimations({
//            settings: {
//                animatedSpeed: 1000,
//                heartBeatSpeed: 1000,
//                hingeSpeed: 2000,
//                bounceInSpeed: 750,
//                bounceOutSpeed: 750,
//                animationDelaySpeed: 1000,
//            },
//        }),
//        pluginHeropatterns({
//            patterns: [
//                'circuit-board',
//                'floating-cogs',
//                'i-like-food',
//                'bank-note',
//                'hexagons',
//                'wiggle',
//                'rain',

//                //"jigsaw",
//                //"polka-dots",
//                //"leaf",
//                //"aztec",
//                //"bubbles",
//                //"autumn",
//                //"stamp-collection",
//                //"falling-triangles",
//                //"charlie-brown",
//                //"bamboo",
//                //"flipped-diamonds",
//                //"texture",
//                //"topography",
//            ],
//            colors: {
//                default: '#eeeeee',
//                chocolate: '#ff7000',
//                water: '#00a5ff',
//                blue: '#0000FF',
//                skyblue: '#87CEEB',
//                white: '#ffffff',
//                black: '#000000',
//            },
//            opacity: {
//                default: '0.4',
//                5: '0.05',
//                10: '0.1',
//                15: '0.15',
//                20: '0.20',
//                25: '0.25',
//                30: '0.3',
//                40: '0.4',
//                50: '0.5',
//                60: '0.6',
//                75: '0.75',
//                100: '1.0',
//            },
//        }),
//        plugin(({ addUtilities, addComponents, addBase, theme }) => {
//            addUtilities({
//                '.flex-center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
//                '.inline-flex-center': { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
//                '.grid-center': { display: 'grid', alignItems: 'center', justifyContent: 'center' },
//                '.inline-grid-center': { display: 'inline-grid', alignItems: 'center', justifyContent: 'center' },
//                '.all-small-caps': { fontVariantCaps: 'all-small-caps' },
//                '.small-caps': { fontVariantCaps: 'small-caps' },
//                '.normal-caps': { fontVariantCaps: 'normal' },
//                '.mirror-horizonal': { transform: 'scale(-1, 1)' },
//                '.mirror-vertical': { transform: 'scale(1, -1)' },
//                '.text-3d': {
//                    fontFamily: 'helvetica',
//                    textTransform: 'uppercase',
//                    textAlign: 'center',
//                    color: '#fefefe',
//                    textShadow: '#e7e7e7 3px 5px 0, #999 4px 6px 3px, #ccc 8px 11px 10px',
//                },
//                ...textShadows(),
//                ...clipPaths(),
//            })
//        }),
//    ]
//}

//function clipPaths() {
//    const clips = [
//        {
//            name: 'category',
//            path: 'M2.18024 8.89913C-0.735744 5.52634 1.6411 0 6.09965 0H482.602C486.958 0 489.367 5.28809 486.656 8.69707C478.232 19.2914 465.568 37.3849 465.568 50.4167C465.568 63.3241 477.992 80.8332 486.414 91.2202C489.178 94.6284 486.776 100 482.388 100H6.33792C1.84632 100 -0.519536 94.3842 2.45056 91.0148C11.6278 80.6036 24.9939 63.2394 24.9939 50.4167C24.9939 37.4674 11.3629 19.5202 2.18024 8.89913Z',
//        },
//    ]

//    return {
//        ...clips.reduce(
//            (s, cl) =>
//                (s = {
//                    ...s,
//                    [`.clip-${cl.name}`]: {
//                        'clip-path': `path('${cl.path}')`,
//                    },
//                }) && s,
//            {}
//        ),
//    }
//}

//function textShadows() {
//    //console.log(custom_base);

//    return {
//        '.text-shadow-neon': {
//            'text-shadow':
//                '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 2px 2px 2px rgba(255,255,255,0)',
//        },
//        ...range(20).reduce((sum, it, i) => {
//            ;['white', 'black', 'indigo', 'cyan', 'green', 'orange', 'blue'].map((color) => {
//                sum = {
//                    ...sum,
//                    [`.text-shadow-custom-${color}-${it * 1}px`]: {
//                        'text-shadow': `0 0 ${it * 1}px ${color}`,
//                    },
//                    [`.shadow-custom-${color}-${(it - 1) * 5}px`]: {
//                        'box-shadow': `0 0 ${(it - 1) * 5}px ${color}`,
//                    },
//                }
//            })

//            return sum
//        }, {}),
//    }
//}

//function shortcuts() {
//    return {
//        'smoothly-200': 'transition-all duration-200',
//        'smoothly-300': 'transition-all duration-300',
//        'text-shadow-white-1': {
//            color: 'white',
//        },
//        '#{!important}': '',
//        '{!important}': '',
//    }
//}

//function extract() {
//    return {
//        include: [
//            '**/*.{vue,js}',
//            '**/**/*.{vue,js}',
//            '**/**/**/*.{vue,js}',

//            './assets/index.scss',
//            './assets/scss/*.scss',

//            './fonts/**/index.css',
//            './fonts/**/**/index.css',

//            './plugins/passive/*.js',

//            './store/**/*.js',
//            './store/*.js',

//            './components/*.vue',
//            './components/**/*.vue',
//            './components/**/**/*.vue',
//            './components/**/**/**/*.vue',
//            './components/**/**/**/**/*.vue',

//            './pages/*.vue',
//            './pages/**/*.vue',
//            './pages/**/**/*.vue',

//            './layouts/*.vue',

//            'node_modules/tailvue/dist/tailvue.es.js',
//        ],
//        exclude: [
//            //
//            'node_modules',
//            'nuxt.config.ts',
//            'dist',
//            '.nuxt',
//            '.firebase',
//            '.vercel',
//            '.vscode',
//            '.github',
//            '.git',
//            'z',
//        ],
//    }
//}

//function range(size = 1, startAt = 1) {
//    return Array.from(Array(size).keys()).map((i) => i + startAt)
//}

//const router = useRouter()

//console.log(user)

//: 'github' | 'google' | 'gitlab' | 'bitbucket'
//const login = async (provider) => {
//    if (provider) {
//        const { error } = await auth.signInWithOAuth({ provider, options })
//        if (error) {
//            return alert('Something went wrong !')
//        }
//    } else {
//        console.log('Вход без провайдера')
//        //const { error } = await client.auth.signInWithPassword({email, phone, password, options: { captchaToken }})
//    }

//    //router.push('/dashboard')
//    //signInWithPassword
//}

// ---------------------------------------------

//import { pointsOnBezierCurves } from 'points-on-curve'

//console.log(
//    pointsOnBezierCurves([
//        [5, 5],
//        [10, 10],
//        [15, 5],
//        [20, 0]
//    ])
//)

//const polygon_test = [
//    [0, 0],
//    ...pointsOnBezierCurves([
//        [1, 0],
//        [1.5, 4],
//        [2.5, 4],
//        [3, 0],
//        [3.5, 4],
//        [4.5, 4],
//        [5, 0]
//    ]),
//    [100, 0],
//    [100, 100],
//    [0, 100]
//]

//const polygon = [
//    [0, 0],
//    [100, 0]
//]

//const dotHF = ([x1, y1], [x2, y2]) => [x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2]

//const newDot = (i1, i2) => polygon.splice(i2, 0, dotHF(polygon[i1], polygon[i2]))

//newDot(0, 1)

//const newDotsBetween = () => {
//    //const index = (polygon.length / 2) | 0
//    //newDot(index, index + 1)
//    //newDot(index - 1, index)
//    //newDot(polygon.length - 2, polygon.length - 1)
//    //newDot(0, 1)
//    //console.log(index)
//    //newDot(polygon.length - 2, polygon.length - 1)
//    //newDot(polygon.length - 2, polygon.length - 1)

//    const poly = polygon
//    //const curve = UIBezierPath()

//    poly.map(([x, y], i) => (i > ((poly.length / 2) | 0) ? newDot(i - 1, i) : null))
//    //console.log(Math.floor((polygon.length - 1) / 2))
//    poly.map(([x, y], i) => (i < Math.floor((poly.length - 1) / 2) ? newDot(i, i + 1) : null))
//    //console.log(Math.floor((polygon.length - 1) / 2))
//}

////newDot(0, 1)
////newDot(0, 1)
////newDot(2, 3)
////newDot(3, 4)
////newDot(0, 1)
////newDot(0, 1)

//newDotsBetween()
////newDotsBetween()
////newDotsBetween()
////newDotsBetween()
////newDotsBetween()

////newDotsBetween()

////console.log(polygon)

////const clip = [
////    [0, 0],
////    [100, 0],
////    [100, 100],
////    [0, 100],
////]
////    .reduce((s, [x, y], i) => {
////        s.push([x, y])
////        s.push([x * 0.5, y * 0.2])

////        return s
////    }, [])
////    .map(([x, y]) => `${x}% ${y}%`)
////    .join(', ')

////const timers = ref({ mainImg: false, mainImgCount: 0 })
////setInterval(async function () {
////    timers.value.mainImg = !timers.value.mainImg
////    timers.value.mainImgCount === 0 ? timers.value.mainImgCount++ : null
////}, 5000)

//const toProcent = (polygon) => polygon.map(([p1, p2]) => `${p1}% ${p2}%`).join(', ')

//// ---------------------------------------------

////devtools: {
////    enabled: true,
////    vscode: {},
////},

////strapi: {
////    devtools: true,
////},

////'@tailvue/nuxt',

////'nuxt-viewport',
////"@nuxtjs/fontaine",
////"@vueuse/motion",
////"@vueuse/integrations",
////"@vueuse/router",
////'@dewib/xhr-cache',
////'@vite-pwa/nuxt',

////'@vee-validate/nuxt',
////"nuxt-schema-org",
////"nuxt-full-static",
////'@nuxt/devtools',

////'nuxt-og-image',
////'nuxt-vue3-google-signin',
////'@nuxtjs/robots',
////'@nuxtjs/toast',
////'nuxt-xstate',
////'vue-final-modal/style.css'
////persistSession: false,
////robots: {
////    /* module options */
////},

////'@nuxtjs/supabase',
////supabase: {
////    //process.env.SUPABASE_URL
////    //process.env.SUPABASE_KEY
////    url: process.env.SUPABASE_URL,
////    //client: {
////    //    auth: {},
////    //},
////},

////"#1": "",
////"dev-strapi": "cross-env STRAPI_TO=true nuxt dev",
////"dev-o-strapi": "cross-env STRAPI_TO=true nuxt dev -o",
////"generate-strapi": "cross-env STRAPI_TO=true nuxt generate",
////"generate-start-strapi": "cross-env STRAPI_TO=true nuxt generate && nuxt start",
////"#2": "",
////"strapi-dev": "cd ../strapi/ && yarn strapi develop --watch-admin",
////"strapi-build": "cd ../strapi/ && yarn strapi build",
////"#3": "",
////"preview": "nuxt preview",
////"clean": "npx nuxi clean",
////"test": "node ./assets/svg.ts",
////"sync-translation-files": "node sync-translation-files.js",
////"predev": "",
////"serve": "nuxt serve",
////"f:preview": "firebase hosting:channel:deploy preview",
////"#999": "",
////"instale": "npm i -S --force"

////const { $viewport } = useNuxtApp()
////watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
////    console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint)
////})

////if (document.addEventListener) {
////    if ('onwheel' in document) {
////        document.addEventListener('wheel', document_wheel)
////    } else if ('onmousewheel' in document) {
////        document.addEventListener('mousewheel', document_wheel)
////    } else {
////        document.addEventListener('MozMousePixelScroll', document_wheel)
////    }
////    window.addEventListener('keydown', document_wheel, false)
////} else {
////    document.attachEvent('onmousewheel', document_wheel)
////}
////function document_wheel(e) {
////    e.preventDefault()
////}

////await useVerifyIp()

////     <!--<NuxtLayout name="default">-->
////            <!--{{ view }}-->

////        <!--</NuxtLayout>-->

////        <!--<div v-click-outside></div>-->
////        <!--
////        <ClientOnly>
////            <div
////                :class="[
////                    modal ? 'fixed flex-center bg-self-1 bg-opacity-95 inset-0 w-full h-full z-99999' : '!hidden h-0 w-0 overflow-hidden',
////                ]"
////            >
////                <div
////                    class="flex-center flex-col flex-shrink rounded-md elevation-10 m-auto inset-0 bg-self-2 w-4/5 px-4 py-10 max-w-sm h-auto min-h-40 max-h-none z-99999 text-white pointer-events-none"
////                >
////                    <div class="uppercase border-b">Select language</div>

////                    <div class="flex-center flex-col mt-2 pointer-events-auto">
////                        <div
////                            class="py-1 transition duration-150 cursor-pointer hover:(text-self-4 underline-light-200)"
////                            v-for="locale in locales.filter((it, i) => i < locales.length / 2)"
////                            :key="locale.code_"
////                            @click="closeModal(locale.code_)"
////                        >
////                            {{ locale.name }}
////                        </div>
////                    </div>
////                </div>
////            </div>
////        </ClientOnly>-->

////  <!--<teleport to="body">-->
////        <!--</teleport>-->

////  <!--<div class="index-nav">
////  <div
////  class="index-nav-item group relative flex-col ransition-all duration-500"
////  v-for="(it, i) in Object.values(sections)"
////  :key="i"
////  @click="!it.href ? toActive(Object.keys(sections)[i]) : toLink(it.href)"
////>
////  <div
////	  class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 rounded-t-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
////  ></div>

////  <Icon
////	  class="index-nav-icon absolute z-10 transition-all delay-1050 duration-300 opacity-100 pointer-events-none"
////	  :class="[isActive(Object.keys(sections)[i]) ? 'active' : '', !it.href ? 'group-hover:(!opacity-0 delay-150)' : '']"
////	  :name="it.icon"
////  />

////  <div
////	  v-if="!it.href"
////	  class="flex-center flex-col bg-self-7 bg-opacity-10 w-full break-all text-self-1 uppercase text-xs transition-all delay-150 duration-1550 max-h-0 overflow-y-hidden pointer-events-none group-hover:(max-h-screen !bg-opacity-100)"
////  >

////	  <div v-for="(s, j) in Object.keys(sections)[i]" :key="j">
////		  {{ s }}
////	  </div>
////  </div>

////  <div
////	  class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 bottom-0 rounded-b-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
////  ></div>
////</div>
////</div>-->

///* INDEX

////const { query } = useRoute()
////const { x, y, sourceType } = useMouse({ touch: false })
////const { itemIsArray } = useFunctions()
////const { isMobile } = useDevice()

////const { t } = useI18n()
////const { localeProperties: lp } = useI18n()
////const lang = ref(lp.value.code)

////const title = ref('~ MAIN ~')
////const description = ref('')

////const activeSlide = ref('FAQ')
////const isQuery = useQueryLength() !== 0 && !useUtm(query)

////const isActive = (i) => activeSlide.value === i

////const { data } = useNuxtData()

////data.value = {
////    work_types: await useContentData(lang.value, 'work_types'),
////    work_categories: await useContentData(lang.value, 'work_categories'),
////}

////if (isQuery) navigateTo({ path: '/link', query })
////useHead({ title, description })

//INDEX */
