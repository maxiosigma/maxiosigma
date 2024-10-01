import {
    transformerCompileClass,
    transformerVariantGroup,
    transformerDirectives,
    defineConfig,
    presetWind,
    presetUno
} from 'unocss' //, resolvedConfig

//import extractorArbitrary from '@unocss/extractor-arbitrary-variants'

import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
import { presetGridAreas } from 'unocss-preset-grid-areas'
//import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { presetUseful } from 'unocss-preset-useful'
import { presetScrollbar } from 'unocss-preset-scrollbar'
//import presetRemToPx from '@unocss/preset-rem-to-px'
//https://renatomoor.github.io/unocss-preset-fluid/utilities.html
import { presetFluid } from 'unocss-preset-fluid'
//import presetEase from 'unocss-preset-ease'

const isGenerateMode = process.argv.includes('generate')

export default defineConfig({
    //warn: false,

    //sortLayers(layers) {
    //    //console.log(layers)
    //    return layers
    //},

    safelist: [
        //
        ...range(20, 1).map((i) => `p-l-${i * 5}`),
        ...range(20, 1).map((i) => `p-l-${i * 5}%`),
        ...range(20, 1).map((i) => `-m-b-${i * 10}`),
        ...range(20, 1).map((i) => `-m-b-${i * 5}%`),
        ...range(3, 1).map((i) => `m-l-${i * 5}`),
        ...range(3, 1).map((i) => `m-l-${i * 8}`),
        ...range(3, 1).map((i) => `m-r-${i * 5}`),
        ...range(3, 1).map((i) => `m-r-${i * 8}`),
        ...range(20, 1).map((i) => `m-r-${i * 5}%`),
        ...range(20, 1).map((i) => `z-${i * 5}`),
        ...range(50, 1).map((i) => `hue-rotate-${i * 10}`),
        ...range(50, 1).map((i) => `-hue-rotate-${i * 10}`)
        //...Object.keys(resolvedConfig.theme?.animation?.keyframes ?? {}).map(k => [`animate-${k}`, `group-hover-animate-${k}`]).flat()
    ],

    shortcuts: [[/^flex-center$/, ([, c], { theme }) => `flex justify-center items-center`]],

    variants: [
        (matcher) =>
            matcher.startsWith('child:')
                ? { matcher: '*' + matcher.slice(5), selector: (s) => s }
                : matcher
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem'
            }
        },
        colors: {
            default: '#eeeeee',
            chocolate: '#ff7000',
            water: '#00a5ff',
            blue: '#0000FF',
            skyblue: '#87CEEB',
            white: '#ffffff',
            black: '#000000',
            self: {
                1: '#0C2142',
                2: '#003366',
                3: '#F1860E',
                4: '#22C2B5',
                5: '#499DF3',
                6: '#FFC300',
                7: '#E2E8F0'
            }

            //...getPrime()
        },
        fontFamily: {
            //vetka: ['Vetka'],
            //roboto: ['Roboto'],
            //raleway: ['Raleway'],
            //poppins: ['Poppins'],
            //ttnorms: ['TT Norms'],
            //windctt: ['Wind CTT'],
            //futuranew: ['Futura New'],
            //robotoslab: ['Roboto Slab'],
            //futuranewbook: ['Futura New Book'],
            //oranienbaum: ['Oranienbaum'],
            //nanumpen: ['Nanum Pen', 'cursive'],
            //'cera-pro-regular': ['cera-pro-regular']
        },
        textShadow: {
            'double-text': '5px 5px 2px rgba(255, 0, 0, 0.5)',
            sm: '0 1px 2px var(--tw-shadow-color)',
            DEFAULT: '0 2px 4px var(--tw-shadow-color)',
            lg: '0 8px 16px var(--tw-shadow-color)',

            'xs-circle': '0 0 3px rgba(0, 0, 0, 0.3)',
            'sm-circle': '0 0 5px rgba(0, 0, 0, 0.3)',
            'lg-circle': '0 0 10px rgba(0, 0, 0, 0.3)',
            'xl-circle': '0 0 20px rgba(0, 0, 0, 0.3)',
            '2xl-circle': '0 0 40px rgba(0, 0, 0, 0.3)',
            '3xl-circle': '0 0 60px rgba(0, 0, 0, 0.3)',

            'xs-circle-light': '0 0 3px rgba(255, 255, 255, 0.7)',
            'sm-circle-light': '0 0 5px rgba(255, 255, 255, 0.7)',
            'lg-circle-light': '0 0 10px rgba(255, 255, 255, 0.7)',
            'xl-circle-light': '0 0 20px rgba(255, 255, 255, 0.7)',
            '2xl-circle-light': '0 0 40px rgba(255, 255, 255, 0.7)',
            '3xl-circle-light': '0 0 60px rgba(255, 255, 255, 0.7)'
        },
        boxShadow: {
            'xs-circle': '0 0 3px 0 rgba(0, 0, 0, 0.3)',
            'sm-circle': '0 0 5px 0 rgba(0, 0, 0, 0.3)',
            'lg-circle': '0 0 10px 0 rgba(0, 0, 0, 0.3)',
            'xl-circle': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
            '2xl-circle': '0 0 40px 0 rgba(0, 0, 0, 0.3)',
            '3xl-circle': '0 0 60px 0 rgba(0, 0, 0, 0.3)',

            'xs-circle-light': '0 0 3px 0 rgba(255, 255, 255, 0.7)',
            'sm-circle-light': '0 0 5px 0 rgba(255, 255, 255, 0.7)',
            'lg-circle-light': '0 0 10px 0 rgba(255, 255, 255, 0.7)',
            'xl-circle-light': '0 0 20px 0 rgba(255, 255, 255, 0.7)',
            '2xl-circle-light': '0 0 40px 0 rgba(255, 255, 255, 0.7)',
            '3xl-circle-light': '0 0 60px 0 rgba(255, 255, 255, 0.7)',

            'inner-0.5': 'inset 0 0 5px 0 rgba(0, 0, 0, 0.3)',
            'inner-1': 'inset 0 0 10px 0 rgba(0, 0, 0, 0.3)',
            'inner-2': 'inset 0 0 20px 0 rgba(0, 0, 0, 0.3)',
            'inner-3': 'inset 0 0 30px 0 rgba(0, 0, 0, 0.3)'
        },
        dropShadow: {
            '3xl': 'drop-shadow(0 30px 30px rgba(0, 0, 0, 0.5))',
            '4xl': 'drop-shadow(0 40px 40px rgba(0, 0, 0, 0.5))',

            'xs-circle': 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.5))',
            'sm-circle': 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))',
            'lg-circle': 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))',
            'xl-circle': 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))',
            '2xl-circle': 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.5))',
            '3xl-circle': 'drop-shadow(0 0 60px rgba(0, 0, 0, 0.5))',
            '3xl-circle-full': 'drop-shadow(0 0 60px #000000)',

            test: 'drop-shadow(0 50px 5px #000000)'
        }
    },
    content: {
        pipeline: {
            include: [
                //
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
                'components/**/*.{js,vue,ts}',
                'components/*.{js,vue,ts}',
                'layouts/*.{js,vue,ts}',
                'pages/**/*.{js,vue,ts}',
                'pages/*.{js,vue,ts}',
                'app.vue'
            ]
        }
    },
    //extractors: [extractorArbitrary()],
    presets: [
        //
        presetUno({
            variablePrefix: 'wind'
        }),
        presetWind({
            //important: true,
            variablePrefix: 'wind'
        }),
        //presetHeroPatterns(),
        //presetAttributify(),
        presetUseful({
            enableMagicAnimations: true
        }),
        //presetRemToPx()
        //presetLegacyCompat({
        //    commaStyleColorFunction: true
        //}),
        presetGridAreas({
            gridTemplateAreas: {
                layout: ['header header header', 'nav main main', 'nav footer footer']
            }
        }),
        presetFluid({
            maxWidth: 1440,
            minWidth: 375,
            extendMaxWidth: 1920,
            extendMinWidth: 320,
            remBase: 16,
            useRemByDefault: false,
            ranges: {
                xs: [12, 16],
                sm: [14, 18],
                md: [18, 24],
                lg: [22, 30],
                xl: [32, 56],
                xxl: [44, 64]
            },
            commentHelpers: true
        }),
        //presetEase()
        presetScrollbar({
            // config
        })
    ],

    transformers: [
        //
        ...(isGenerateMode
            ? [
                  transformerCompileClass({
                      classPrefix: 'max:'
                  })
              ]
            : []),
        transformerDirectives({
            applyVariable: ['--at-apply', '--at-sigma', '--sigma'],
            varStyle: false
        }),
        transformerVariantGroup()
    ]
})

function getPrime() {
    return {
        colors: {
            'primary-50': 'rgb(var(--primary-50))',
            'primary-100': 'rgb(var(--primary-100))',
            'primary-200': 'rgb(var(--primary-200))',
            'primary-300': 'rgb(var(--primary-300))',
            'primary-400': 'rgb(var(--primary-400))',
            'primary-500': 'rgb(var(--primary-500))',
            'primary-600': 'rgb(var(--primary-600))',
            'primary-700': 'rgb(var(--primary-700))',
            'primary-800': 'rgb(var(--primary-800))',
            'primary-900': 'rgb(var(--primary-900))',
            'primary-950': 'rgb(var(--primary-950))',
            'surface-0': 'rgb(var(--surface-0))',
            'surface-50': 'rgb(var(--surface-50))',
            'surface-100': 'rgb(var(--surface-100))',
            'surface-200': 'rgb(var(--surface-200))',
            'surface-300': 'rgb(var(--surface-300))',
            'surface-400': 'rgb(var(--surface-400))',
            'surface-500': 'rgb(var(--surface-500))',
            'surface-600': 'rgb(var(--surface-600))',
            'surface-700': 'rgb(var(--surface-700))',
            'surface-800': 'rgb(var(--surface-800))',
            'surface-900': 'rgb(var(--surface-900))',
            'surface-950': 'rgb(var(--surface-950))'
        }
    }
}

function range(n: number, init?: number) {
    const res = Array.from(Array(n).keys())
    return !!init ? res.map((it) => it + 1) : res
}
