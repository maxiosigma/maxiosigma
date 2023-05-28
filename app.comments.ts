// SETTINGS Shared View State  New Window Dimensions

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
