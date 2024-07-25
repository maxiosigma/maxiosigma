<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
// <ItemToast />
// <NuxtLoadingIndicator />
const { localeProperties: lp, locales, locale } = useI18n()

defineI18nRoute({
    locales: locales.value.filter(({ code }) => code !== 'index').map(({ code }) => code)
})

useHead({
    htmlAttrs: {
        class: 'html'
    },
    bodyAttrs: {
        class: 'body'
    },
    titleTemplate: (title) => {
        return `SIGMA ‡ ${title || 'Page ' + useRandomInt(1000, 99999)}`
    },
    meta: []
})

//const lang = ref(lp.value.code)

//const prop = defineProps({
//    bs: {
//        type: String,
//        default: 'body-bg'
//    },
//    title: {
//        type: String,
//        default: ''
//    },
//    description: {
//        type: String,
//        default: ''
//    },
//    toast: {
//        type: Object,
//        default: {}
//    }
//})

//const meta = {
//    //description: '[description]',

//    ogTitle: prop.title,
//    //ogDescription: '[og:description]',
//    //ogImage: '[og:image]',
//    //ogUrl: '[og:url]',

//    twitterTitle: prop.title,
//    //twitterDescription: '[twitter:description]',
//    //twitterImage: '[twitter:image]',
//    twitterCard: 'summary'
//}

//useHead({
//    //title: prop.title,
//    titleTemplate: `SIGMA | %s`,
//    htmlAttrs: { class: 'html', lang: lang },
//    headAttrs: { class: 'head' },
//    bodyAttrs: { class: 'body' },
//    meta: [
//        { charset: 'utf-8' },
//        {
//            name: 'viewport',
//            content:
//                'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
//        },
//        { name: 'HandheldFriendly', content: 'true' },
//        { name: 'MobileOptimized', content: '768' },
//        { name: 'apple-mobile-web-app-capable', content: 'yes' }
//        //{ name: "", content: "" }
//    ]
//})

//useSeoMeta({
//    ...meta
//})

//useServerSeoMeta({
//    robots: 'index, follow',
//    ...meta
//})

//onMounted(() => {})
</script>

<style lang="scss">
html {
    --at-apply: bg-self-1 flex min-h-full min-w-full relative;
    //font-size: 12px;
}

head {
    --at-apply: hidden;
}

body {
    --at-apply: bg-self-1 flex flex-col font-roboto min-h-full min-w-full h-auto max-w-screen
        relative m-0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    --at-apply: flex flex-col flex-grow overflow-hidden;
}

.header {
    --at-apply: flex-grow-0 flex-shrink-0 z-10 relative;
}

.nav {
    --at-apply: w-full z-20 relative;

    &-bar {
        --at-apply: min-h-[8vh] top-0 z-20 fixed;
    }

    &-pre {
        &-bar {
            --at-apply: min-w-[100vh] min-h-[8vh] z-0 relative;
        }

        &-cont {
            --at-apply: min-w-[100vh] min-h-[64px] z-0 relative;
        }
    }
}

.footer {
    --at-apply: flex-grow-0 flex-shrink-0 z-20 relative;
}

.preload {
    &-show {
        --at-apply: max-h-none opacity-100 transition-all duration-[250] delay-[250];

        &-nav-bar {
            --at-apply: opacity-100 transition-all duration-1000 delay-1000;
        }

        &-header {
            --at-apply: h-auto opacity-100 transition-opacity duration-75;
        }
    }

    &-hide {
        --at-apply: max-h-screen opacity-0 transition-all duration-[250] delay-0 overflow-hidden
            pointer-events-none;

        &-nav-bar {
            --at-apply: opacity-0;
            --at-apply: hidden;
        }

        &-header {
            --at-apply: h-0 opacity-0 transition-opacity overflow-hidden;
        }
    }
}

.wrapper .p-organizationchart-node {
    --at-apply: inline-flex px-2 py-1 bg-self-1 b-self-2;
}

.p-scrollpanel-bar.p-scrollpanel-bar-y,
.p-scrollpanel-bar.p-scrollpanel-bar-x {
    --at-apply: bg-self-3 mix-blend-difference;
}
</style>
