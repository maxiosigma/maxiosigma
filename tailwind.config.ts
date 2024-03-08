import type { Config } from 'tailwindcss'

//import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
//import tailwindcssAnimate from 'tailwindcss-animated'
import tailwindcssHeroPatterns from 'tailwindcss-hero-patterns'
//import tailwindcssHeroPatterns from 'tailwindcss-hero-patterns/src/patterns'

export default {
    //mode: 'jit',
    content: [
        //
        './components/**/*.{js,vue,ts}',
        './components/*.{js,vue,ts}',
        './pages/**/*.vue'
        './pages/*.vue'
    ],
    theme: {
        //heroPatternsShades: ['100', '500'],
        //heroPatternsColors: ['blue', 'red'],
        //heroPatternsOpacities: ['0', '10', '15', '25', '30', '50', '90', '100'],

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
        extend: {
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
        }
    },
    plugins: [
        //tailwindcssAnimate,
        tailwindcssHeroPatterns,
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            )
        })
    ]
} satisfies Config
