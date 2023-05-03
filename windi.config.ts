//import { functions } from 'maxiosigma_libs/index'
//import { extract, plugins, shortcuts, theme, utilities } from 'maxiosigma_libs/windi'

//const { range } = functions

//const {
//    base: { defineConfig, plugin },
//    built: { aspectRatio, lineClamp, typography },
//    external: { animations, heropatterns, icons, questionMark },
//    transform: { tailwindElevation },
//} = plugins

//export default defineConfig({
//    shortcuts,
//    attributify: false,
//    theme: {
//        extend: theme.extend,
//    },
//    safelist: [
//        //
//        range(10).map((i) => `order-${i}`),
//        range(20).map((i) => `pl-[${i}%]`),
//    ],
//    plugins: [
//        icons,
//        lineClamp,
//        typography,
//        animations,
//        aspectRatio,
//        heropatterns,
//        questionMark,
//        tailwindElevation,
//        plugin.default(({ addUtilities }) => {
//            addUtilities({
//                ...utilities.base,
//                ...utilities.clipPaths,
//                ...utilities.textShadows,
//            })
//        }),
//    ],
//    extract: extract.nuxt,
//})
