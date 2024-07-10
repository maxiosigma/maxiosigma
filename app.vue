<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
        <!--<ItemToast />-->
    </NuxtLayout>
</template>

<script setup>
const { localeProperties: lp, locales, locale } = useI18n()

defineI18nRoute({
    locales: locales.value.filter(({ code }) => code !== 'index').map(({ code }) => code)
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
    @apply bg-self-1 flex min-h-full min-w-full relative;
    //font-size: 12px;
}

head {
    @apply hidden;
}

body {
    @apply bg-self-1 flex flex-col font-roboto min-h-full min-w-full h-auto max-w-screen relative m-0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    @apply flex flex-col flex-grow overflow-hidden;
}

.header {
    @apply flex-grow-0 flex-shrink-0 z-10 relative;
}

.nav {
    @apply w-full z-20 relative;

    &-bar {
        @apply min-h-[8vh] top-0 z-20 fixed;
    }

    &-pre {
        &-bar {
            @apply min-w-[100vh] min-h-[8vh] z-0 relative;
        }

        &-cont {
            @apply min-w-[100vh] min-h-[64px] z-0 relative;
        }
    }
}

.footer {
    @apply flex-grow-0 flex-shrink-0 z-20 relative;
}

.preload {
    &-show {
        @apply max-h-none opacity-100 transition-all duration-[250] delay-[250];

        &-nav-bar {
            @apply opacity-100 transition-all duration-1000 delay-1000;
        }

        &-header {
            @apply h-auto opacity-100 transition-opacity duration-75;
        }
    }

    &-hide {
        @apply max-h-screen opacity-0 transition-all duration-[250] delay-0 overflow-hidden pointer-events-none;

        &-nav-bar {
            @apply opacity-0;
            @apply hidden;
        }

        &-header {
            @apply h-0 opacity-0 transition-opacity overflow-hidden;
        }
    }
}
</style>
