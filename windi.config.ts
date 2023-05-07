import { functions } from 'maxiosigma_libs/index'
import { extract, plugins, shortcuts, theme, utilities } from 'maxiosigma_libs/windi'

const { range } = functions

const {
    base: { defineConfig, plugin },
    built: { aspectRatio, lineClamp, typography },
    external: { animations, heropatterns, icons, questionMark },
    transform: { tailwindElevation },
} = plugins

export default defineConfig({
    shortcuts,
    attributify: false,
    theme: {
        extend: theme.extend,
    },
    safelist: [
        //
        range(10).map((i) => `order-${i}`),
        range(20).map((i) => `pl-[${i}%]`),
    ],
    plugins: [
        icons,
        lineClamp,
        typography,
        animations,
        aspectRatio,
        heropatterns({
            patterns: [
                'circuit-board',
                'floating-cogs',
                'i-like-food',
                'bank-note',
                'hexagons',
                'wiggle',
                'rain',

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
        questionMark,
        tailwindElevation,
        plugin(({ addUtilities }) => {
            addUtilities({
                ...utilities.base,
                ...utilities.clipPaths,
                ...utilities.textShadows,
            })
        }),
    ],
    extract: extract.nuxt,
})
