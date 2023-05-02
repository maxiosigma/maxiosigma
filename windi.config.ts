import { functions } from 'maxiosigma_libs/index'
import { extract, plugins, shortcuts, theme } from 'maxiosigma_libs/windi'

const { range } = functions

const {
    base: { defineConfig },
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
        //
        aspectRatio,
        lineClamp,
        typography,
        animations,
        heropatterns,
        icons,
        questionMark,
        tailwindElevation,
    ],
    extract: extract.nuxt,
})
