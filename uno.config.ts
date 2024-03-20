import { defineConfig, presetAttributify, presetUno, presetWind } from 'unocss'
//import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
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
            },

            ...getPrime()
        },
        fontFamily: {
            vetka: ['Vetka'],
            roboto: ['Roboto'],
            raleway: ['Raleway'],
            poppins: ['Poppins'],
            ttnorms: ['TT Norms'],
            windctt: ['Wind CTT'],
            futuranew: ['Futura New'],
            robotoslab: ['Roboto Slab'],
            futuranewbook: ['Futura New Book'],
            oranienbaum: ['Oranienbaum'],
            nanumpen: ['Nanum Pen', 'cursive'],
            'cera-pro-regular': ['cera-pro-regular']
        },
        textShadow: {
            'double-text': '5px 5px 2px rgba(255, 0, 0, 0.5)',
            sm: '0 1px 2px var(--tw-shadow-color)',
            DEFAULT: '0 2px 4px var(--tw-shadow-color)',
            lg: '0 8px 16px var(--tw-shadow-color)'
        },
        boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
            //skyblue: '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
        }
    },

    content: {
        pipeline: {
            include: [
                //
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,

                'components/**/*.{js,vue,ts}',
                'components/*.{js,vue,ts}',
                'pages/**/*.{js,vue,ts}',
                'pages/*.{js,vue,ts}'
            ]
        }
    },

    presets: [
        //
        presetUno(),
        presetWind(),
        //presetHeroPatterns(),
        presetAttributify(),
        presetRemToPx()
    ],

    transformers: [
        //
        transformerVariantGroup(),
        transformerDirectives()
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
