import plugin from 'windicss/plugin'
import colors from 'windicss/colors'
import theme from 'windicss/defaultTheme'
import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
	shortcuts: shortcuts(),
	theme: {
		//...themeBase(),
		extend: themeExtend(),
	},
	variants: {
		extend: {
			backgroundColor: ['group-focus-within', 'group-focus-visible', 'group-active', 'group-visited', 'group-disabled', 'hocus', 'group-hocus', 'can-hover', 'no-hover'],
		},
	},
	plugins: plugins(),
	safelist: safelist(),
	extract: extract(),
})

function safelist() {
	return [
		range(30).map((i) => `animate-delay-${((i + 1) * 3) / 10}s`),
		range(30).map((i) => `animate-delay-${((i + 1) * 5) / 10}s`),
		range(30).map((i) => `animate-duration-${((i + 1) * 5) / 10}s`),
	]
}

function themeExtend() {
	return {
		fontFamily: {
			vetka: ['Vetka'],
			roboto: ['Roboto'],
			raleway: ['Raleway'],
			poppins: ['Poppins'],
			ttnorms: ['TT Norms'],
			futuranew: ['Futura New'],
			robotoslab: ['Roboto Slab'],
			futuranewbook: ['Futura New Book'],
		},
		colors: {
			self: {
				purpure: '#bc66a0',
				dark: '#0c1c49',
				red: '#d3072a',
			},
		},
		backgroundSize: {
			'0.25px': '0.25px',
			'0.5px': '0.5px',
			'1px': '1px',
			'2px': '2px',
			'3px': '3px',
			'4px': '4px',
			'5px': '5px',

			'0.25r': '0.25rem',
			'1r': '1rem',
			'2r': '2rem',
			'3r': '3rem',
			'4r': '4rem',
			'5r': '5rem',
			'6r': '6rem',
			'7r': '7rem',
			'8r': '8rem',
			'9r': '9rem',
			'10r': '10rem',
			'20r': '20rem',
			'30r': '30rem',
			'40r': '40rem',
			'50r': '50rem',
			'60r': '60rem',
			'70r': '70rem',
			'80r': '80rem',
			'90r': '90rem',
			'100r': '100rem',

			'1p': '1%',
			'2p': '2%',
			'3p': '3%',
			'4p': '4%',
			'5p': '5%',
			'6p': '6%',
			'7p': '7%',
			'8p': '8%',
			'9p': '9%',
			'10p': '10%',
			'20p': '20%',
			'30p': '30%',
			'40p': '40%',
			'50p': '50%',
			'60p': '60%',
			'70p': '70%',
			'80p': '80%',
			'90p': '90%',
			'100p': '100%',
		},
		animation: {
			wiggle: 'wiggle 1s ease-in-out infinite',
			'world-rotate': 'worldRotate 1s ease-in-out infinite',
		},
		keyframes: {
			wiggle: {
				'0%, 100%': { transform: 'rotate(-3deg)' },
				'50%': { transform: 'rotate(3deg)' },
			},
			worldRotate: {
				'0%, 100%': { transform: 'rotate3D(0, -1, 0, 360deg)' },
				'50%': { transform: 'rotate3D(0, 1, 0, 360deg)' },
			},
		},
	}
}

function themeBase() {
	return {}
}

function plugins() {
	return [
		require('@windicss/plugin-icons'),
		require('windicss/plugin/typography'),
		//require('windicss/plugin/line-clamp'),
		transform('tailwindcss-elevation')(['responsive']),
		require('@windicss/plugin-animations')({
			settings: {
				animatedSpeed: 1000,
				heartBeatSpeed: 1000,
				hingeSpeed: 2000,
				bounceInSpeed: 750,
				bounceOutSpeed: 750,
				animationDelaySpeed: 1000,
			},
		}),
		require('@windicss/plugin-heropatterns')({
			patterns: [
				'polka-dots',
				'leaf',
				'aztec',
				'bubbles',
				'falling-triangles',
				'floating-cogs',
				'wiggle',
				'circuit-board',
				'bamboo',
				'hexagons',
				'flipped-diamonds',
				'texture',
				'topography',
				'i-like-food',
			],
			colors: {
				default: '#eeeeee',
				chocolate: '#ff7000',
				water: '#00a5ff',
				blue: '#0000FF',
				skyblue: '#87CEEB',
				white: '#ffffff',
				black: '#000000',
			},
			opacity: {
				default: '0.4',
				5: '0.05',
				10: '0.1',
				15: '0.15',
				20: '0.20',
				25: '0.25',
				30: '0.3',
				40: '0.4',
				50: '0.5',
				60: '0.6',
				75: '0.75',
				100: '1.0',
			},
		}),
		plugin(({ addUtilities, addComponents, addBase, theme }) => {
			addUtilities({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.inline-flex-center': {
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.grid-center': {
					display: 'grid',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.inline-grid-center': {
					display: 'inline-grid',
					alignItems: 'center',
					justifyContent: 'center',
				},
			})
		}),
	]
}

function shortcuts() {
	return {}
}

function extract() {
	return {
		include: [
			'./assets/index.scss',
			'./fonts/**/index.css',
			'./config/head/index.js',
			'./plugins/passive/*.js',
			'./store/**/*.js',
			'./store/*.js',

			'**/*.{vue, js}',
			'**/**/*.{vue, js}',
			'**/**/**/*.{vue, js}',
			'**/**/**/**/*.{vue, js}',

			//'./components/**/*.vue',
			//'./components/**/**/*.vue',
			//'./components/**/**/**/*.vue',
			//'./pages/*.vue',
			//'./pages/**/*.vue',
			//'./pages/**/**/*.vue',
			//'./layouts/*.vue',
			//'./plugins/**/*.js',
			//'./content/*.md',
			//'./content/**/*.md',
			//'./content/**/**/*.md',
		],
		exclude: ['node_modules', 'dist', '.nuxt', '.vscode', '.git'],
	}
}

function range(size, startAt = 1) {
	return Array.from(Array(size).keys()).map((i) => i + startAt)
}

function comments() {
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
}
