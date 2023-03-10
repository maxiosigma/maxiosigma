import plugin from "windicss/plugin"
//import colors from 'windicss/colors'
//import theme from 'windicss/defaultTheme'
import { defineConfig, transform } from "windicss/helpers"

import pluginLineClamp from "windicss/plugin/line-clamp"
import pluginTypography from "windicss/plugin/typography"

import pluginIcons from "@windicss/plugin-icons"
import pluginAnimations from "@windicss/plugin-animations"
import pluginHeropatterns from "@windicss/plugin-heropatterns"

export default defineConfig({
    attributify: false,
    shortcuts: shortcuts(),
    theme: {
        //...themeBase(),
        extend: themeExtend(),
    },
    //variants: {
    //   extend: {
    //      //   backgroundColor: [
    //      //      "group-focus-within",
    //      //      "group-focus-visible",
    //      //      "group-active",
    //      //      "group-visited",
    //      //      "group-disabled",
    //      //      "hocus",
    //      //      "group-hocus",
    //      //      "can-hover",
    //      //      "no-hover",
    //      //   ],
    //   },
    //},
    plugins: plugins(),
    safelist: safelist(),
    extract: extract(),
    //preflight: {
    //	alias: {
    //		// add nuxt aliases
    //		"nuxt-link": "a",
    //		// @nuxt/image module
    //		"nuxt-img": "img",
    //	},
    //},
})

function safelist() {
    return [
        range(10).map((i) => `order-${i}`),
        range(20).map((i) => `pl-[${i}%]`),
        //range(10).map((i) => `pl-${i * 3}`),
        //range(30).map((i) => `animate-delay-${((i + 1) * 3) / 10}s`),
        //range(30).map((i) => `animate-delay-${((i + 1) * 5) / 10}s`),
        //range(30).map((i) => `animate-duration-${((i + 1) * 5) / 10}s`),
        //range(30).map((i) => `hue-rotate-${(i + 1) * 5}`),
    ]
}

function themeExtend() {
    return {
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
        },
        fontSize: {
            h1: "64px",
            h2: "48px",
            h2_1: "164px",
            h3: "36px",
            h4: "32px",
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
            wiggle: { "0%, 100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
            worldRotate: { "0%, 100%": { transform: "rotate3D(0, -1, 0, 360deg)" }, "50%": { transform: "rotate3D(0, 1, 0, 360deg)" } },
            customOpacity: { from: { opacity: 0.0 }, to: { opacity: 0.85 } },
        },
    }
}

function themeBase() {
    return {}
}

function plugins() {
    return [
        pluginIcons,
        require("windicss/plugin/typography"),
        require("windicss/plugin/aspect-ratio"),
        require("@windicss/plugin-question-mark"),
        pluginTypography,
        pluginLineClamp,
        transform("tailwindcss-elevation")(["responsive"]),
        pluginAnimations({
            settings: {
                animatedSpeed: 1000,
                heartBeatSpeed: 1000,
                hingeSpeed: 2000,
                bounceInSpeed: 750,
                bounceOutSpeed: 750,
                animationDelaySpeed: 1000,
            },
        }),
        pluginHeropatterns({
            patterns: [
                "circuit-board",
                "floating-cogs",
                "i-like-food",
                "bank-note",
                "hexagons",
                "wiggle",
                "rain",

                //"jigsaw",
                //"polka-dots",
                //"leaf",
                //"aztec",
                //"bubbles",
                //"autumn",
                //"stamp-collection",
                //"falling-triangles",
                //"charlie-brown",
                //"bamboo",
                //"flipped-diamonds",
                //"texture",
                //"topography",
            ],
            colors: {
                default: "#eeeeee",
                chocolate: "#ff7000",
                water: "#00a5ff",
                blue: "#0000FF",
                skyblue: "#87CEEB",
                white: "#ffffff",
                black: "#000000",
            },
            opacity: {
                default: "0.4",
                5: "0.05",
                10: "0.1",
                15: "0.15",
                20: "0.20",
                25: "0.25",
                30: "0.3",
                40: "0.4",
                50: "0.5",
                60: "0.6",
                75: "0.75",
                100: "1.0",
            },
        }),
        plugin(({ addUtilities, addComponents, addBase, theme }) => {
            addUtilities({
                ".flex-center": { display: "flex", alignItems: "center", justifyContent: "center" },
                ".inline-flex-center": { display: "inline-flex", alignItems: "center", justifyContent: "center" },
                ".grid-center": { display: "grid", alignItems: "center", justifyContent: "center" },
                ".inline-grid-center": { display: "inline-grid", alignItems: "center", justifyContent: "center" },
                ".all-small-caps": { fontVariantCaps: "all-small-caps" },
                ".small-caps": { fontVariantCaps: "small-caps" },
                ".normal-caps": { fontVariantCaps: "normal" },
                ".text-3d": {
                    fontFamily: "helvetica",
                    textTransform: "uppercase",
                    textAlign: "center",
                    color: "#fefefe",
                    textShadow: "#e7e7e7 3px 5px 0, #999 4px 6px 3px, #ccc 8px 11px 10px",
                },
                ...textShadows(),
            })
        }),
    ]
}

function textShadows() {
    //console.log(custom_base);

    return {
        ".text-shadow-neon": {
            "text-shadow":
                "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 2px 2px 2px rgba(255,255,255,0)",
        },
        ...range(20).reduce((sum, it, i) => {
            ;["white", "black", "indigo", "cyan", "green", "orange", "blue"].map((color) => {
                sum = {
                    ...sum,
                    [`.text-shadow-custom-${color}-${it * 1}px`]: {
                        "text-shadow": `0 0 ${it * 1}px ${color}`,
                    },
                    [`.shadow-custom-${color}-${(it - 1) * 5}px`]: {
                        "box-shadow": `0 0 ${(it - 1) * 5}px ${color}`,
                    },
                }
            })

            return sum
        }, {}),
    }
}

function shortcuts() {
    return {
        "smoothly-200": "transition-all duration-200",
        "smoothly-300": "transition-all duration-300",
        "text-shadow-white-1": {
            color: "white",
        },
        "#{!important}": "",
        "{!important}": "",
    }
}

function extract() {
    return {
        include: [
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
        ],
        exclude: [
            //
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
    }
}

function range(size = 1, startAt = 1) {
    return Array.from(Array(size).keys()).map((i) => i + startAt)
}
