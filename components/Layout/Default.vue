<template>
    <slot />
</template>

<script setup>
const { localeProperties: lp } = useI18n()
const lang = ref(lp.value.code)

const props = defineProps({
    bs: {
        type: String,
        required: false,
        default: 'body-bg'
    },
    title: {
        type: String,
        required: false,
        default: undefined
    },
    description: {
        type: String,
        required: false,
        default: undefined
    }
})

useHead({
    titleTemplate: `SIGMA %s`,
    htmlAttrs: { class: 'html', lang: lang },
    headAttrs: { class: 'head' },
    bodyAttrs: { class: 'body' },
    meta: [
        { charset: 'utf-8' },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'MobileOptimized', content: '768' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
        //{ name: "", content: "" }
    ]
    //link: [
    //    {
    //        rel: 'icon',
    //        type: 'image/png',
    //        href: '/favicon.png',
    //    },
    //],
})

//useSeoMeta({
//    description: '[description]',
//    ogTitle: '[og:title]',
//    ogDescription: '[og:description]',
//    ogImage: '[og:image]',
//    ogUrl: '[og:url]',
//    twitterTitle: '[twitter:title]',
//    twitterDescription: '[twitter:description]',
//    twitterImage: '[twitter:image]',
//    twitterCard: 'summary'
//})

onMounted(() => {})
</script>

<style lang="scss">
.html {
    @apply bg-self-1 h-auto max-w-screen relative;
}

.head {
    @apply hidden;
}

.body {
    @apply bg-self-1 flex font-roboto h-auto min-h-screen max-w-screen relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    @apply h-full flex flex-grow overflow-hidden;
}
</style>
