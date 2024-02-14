const range = (s, i = 1) => require("./index").functions.range(s, i);
const { defineConfig, transform } = require("windicss/helpers");

const exp = {
	shortcuts: {
		"smoothly-200": "transition-all duration-200",
		"smoothly-300": "transition-all duration-300",
		"text-shadow-white-1": { color: "white" },
		"#{!important}": "",
		"{!important}": "",
	},
	theme: {
		extend: {
			fontFamily: {
				vetka: ["Vetka"],
				roboto: ["Roboto"],
				raleway: ["Raleway"],
				poppins: ["Poppins"],
				ttnorms: ["TT Norms"],
				windctt: ["Wind CTT"],
				futuranew: ["Futura New"],
				robotoslab: ["Roboto Slab"],
				futuranewbook: ["Futura New Book"],
				oranienbaum: ["Oranienbaum"],
				nanumpen: ["Nanum Pen", "cursive"],
			},
			fontSize: {
				h1: "64px",
				h2: "48px",
				h2_1: "164px",
				h3: "36px",
				h4: "32px",
				h5: "26px",
				h6: "20px",
				h7: "18px",
				h8: "14px",
				h9: "10px",
				text: "20px",
			},
			colors: {
				self: {
					1: "#0C2142",
					2: "#003366",
					3: "#F1860E",
					4: "#22C2B5",
					5: "#499DF3",
					6: "#FFC300",
					7: "#E2E8F0",
				},
			},
			backgroundSize: {
				"0.25px": "0.25px",
				"0.5px": "0.5px",
				"1px": "1px",
				"2px": "2px",
				"3px": "3px",
				"4px": "4px",
				"5px": "5px",
				"0.25r": "0.25rem",
				"0.5r": "0.5rem",
				"1r": "1rem",
				"2r": "2rem",
				"3r": "3rem",
				"4r": "4rem",
				"5r": "5rem",
				"6r": "6rem",
				"7r": "7rem",
				"8r": "8rem",
				"9r": "9rem",
			},
			animation: {
				"custom-wiggle": "wiggle 1s ease-in-out infinite",
				"custom-world-rotate": "worldRotate 1s ease-in-out infinite",
				"custom-opacity": "customOpacity 1s ease-in-out",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				worldRotate: {
					"0%, 100%": { transform: "rotate3D(0, -1, 0, 360deg)" },
					"50%": { transform: "rotate3D(0, 1, 0, 360deg)" },
				},
				customOpacity: { from: { opacity: 0.0 }, to: { opacity: 0.85 } },
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: [
				"group-focus-within",
				"group-focus-visible",
				"group-active",
				"group-visited",
				"group-disabled",
				"hocus",
				"group-hocus",
				"can-hover",
				"no-hover",
			],
		},
	},
	plugins: {
		base: {
			defineConfig,
			transform,
			plugin: require("windicss/plugin"),
			theme: require("windicss/defaultTheme"),
			colors: require("windicss/colors"),
		},
		built: {
			lineClamp: require("windicss/plugin/line-clamp"),
			typography: require("windicss/plugin/typography"),
			aspectRatio: require("windicss/plugin/aspect-ratio"),
		},
		external: {
			icons: require("@windicss/plugin-icons"),
			animations: require("@windicss/plugin-animations"),
			heropatterns: require("@windicss/plugin-heropatterns"),
			questionMark: require("@windicss/plugin-question-mark"),
		},
		transform: { tailwindElevation: transform("tailwindcss-elevation")(["responsive"]) },
	},
	utilities: {
		base: {
			".flex-center": { display: "flex", alignItems: "center", justifyContent: "center" },
			".inline-flex-center": {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
			},
			".grid-center": { display: "grid", alignItems: "center", justifyContent: "center" },
			".inline-grid-center": {
				display: "inline-grid",
				alignItems: "center",
				justifyContent: "center",
			},
			".all-small-caps": { fontVariantCaps: "all-small-caps" },
			".small-caps": { fontVariantCaps: "small-caps" },
			".normal-caps": { fontVariantCaps: "normal" },
			".mirror-horizonal": { transform: "scale(-1, 1)" },
			".mirror-vertical": { transform: "scale(1, -1)" },
			".text-3d": {
				fontFamily: "helvetica",
				textTransform: "uppercase",
				textAlign: "center",
				color: "#fefefe",
				textShadow: "#e7e7e7 3px 5px 0, #999 4px 6px 3px, #ccc 8px 11px 10px",
			},
		},
		textShadows: textShadows(),
		clipPaths: clipPaths(),
	},
	extract: {
		nuxt: {
			include: [
				"**/*.{vue,js}",
				"**/**/*.{vue,js}",
				"**/**/**/*.{vue,js}",

				"./assets/index.scss",
				"./assets/scss/*.scss",

				"./fonts/**/index.css",
				"./fonts/**/**/index.css",

				"./plugins/passive/*.js",

				"./store/**/*.js",
				"./store/*.js",

				"./components/*.vue",
				"./components/**/*.vue",
				"./components/**/**/*.vue",
				"./components/**/**/**/*.vue",
				"./components/**/**/**/**/*.vue",

				"./pages/*.vue",
				"./pages/**/*.vue",
				"./pages/**/**/*.vue",

				"./layouts/*.vue",

				"node_modules/tailvue/dist/tailvue.es.js",
			],
			exclude: [
				"node_modules",
				"nuxt.config.ts",
				"dist",
				".nuxt",
				".firebase",
				".vercel",
				".vscode",
				".github",
				".git",
				"z",
			],
		},
		laravelMix: {
			include: ["./app/**/*.*", "**/pages/*.html", "**/index.scss"],
			exclude: ["node_modules", "webpack.mix.js", "comments"],
		},
	},
};

module.exports = exp;

function clipPaths() {
	const clips = [
		{
			name: "category",
			path: "M2.18024 8.89913C-0.735744 5.52634 1.6411 0 6.09965 0H482.602C486.958 0 489.367 5.28809 486.656 8.69707C478.232 19.2914 465.568 37.3849 465.568 50.4167C465.568 63.3241 477.992 80.8332 486.414 91.2202C489.178 94.6284 486.776 100 482.388 100H6.33792C1.84632 100 -0.519536 94.3842 2.45056 91.0148C11.6278 80.6036 24.9939 63.2394 24.9939 50.4167C24.9939 37.4674 11.3629 19.5202 2.18024 8.89913Z",
		},
	];

	return {
		...clips.reduce(
			(s, cl) =>
				(s = {
					...s,
					[`.clip-${cl.name}`]: {
						"clip-path": `path('${cl.path}')`,
					},
				}) && s,
			{},
		),
	};
}

function textShadows() {
	return {
		".text-shadow-neon": {
			"text-shadow":
				"0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 2px 2px 2px rgba(255,255,255,0)",
		},
		...range(20).reduce((sum, it, i) => {
			["white", "black", "indigo", "cyan", "green", "orange", "blue"].map((color) => {
				sum = {
					...sum,
					[`.text-shadow-custom-${color}-${it * 1}px`]: {
						"text-shadow": `0 0 ${it * 1}px ${color}`,
					},
					[`.shadow-custom-${color}-${(it - 1) * 5}px`]: {
						"box-shadow": `0 0 ${(it - 1) * 5}px ${color}`,
					},
				};
			});

			return sum;
		}, {}),
	};
}
