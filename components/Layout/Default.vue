<template>
    <NuxtLoadingIndicator />
    <slot />
    <ItemToast />
</template>

<style lang="scss">
html {
    //font-size: 12px;
}

.html {
    @apply bg-self-1 flex min-h-full min-w  relative;
}

.head {
    @apply hidden;
}

.body {
    @apply bg-self-1 flex flex-col font-roboto min-h-full h-auto max-w-[100vw] relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    @apply flex flex-col flex-grow overflow-hidden;
}
</style>

<script setup>
const { localeProperties: lp } = useI18n()
const lang = ref(lp.value.code)

const prop = defineProps({
    bs: {
        type: String,
        default: 'body-bg'
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    toast: {
        type: Object,
        default: {}
    }
})

const meta = {
    //description: '[description]',

    ogTitle: prop.title,
    //ogDescription: '[og:description]',
    //ogImage: '[og:image]',
    //ogUrl: '[og:url]',

    twitterTitle: prop.title,
    //twitterDescription: '[twitter:description]',
    //twitterImage: '[twitter:image]',
    twitterCard: 'summary'
}

useHead({
    title: prop.title,
    titleTemplate: `SIGMA | %s`,
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
})

useSeoMeta({
    ...meta
})

useServerSeoMeta({
    robots: 'index, follow',
    ...meta
})

onMounted(() => {})
</script>
