<template>
    <slot />
</template>

<script setup>
// <div class="layout-default"> </div>

const props = defineProps({
    bs: {
        type: String,
        required: false,
        default: 'body-bg',
    },
    title: {
        type: String,
        required: false,
        default: undefined,
    },
    description: {
        type: String,
        required: false,
        default: undefined,
    },
})

useHead({
    titleTemplate: `%s`,
    htmlAttrs: { class: 'html' },
    headAttrs: { class: 'head' },
    bodyAttrs: { class: 'body' },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'MobileOptimized', content: '768' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'HandheldFriendly', content: 'true' },
        //{ name: "", content: "" }
    ],
})

//const { $viewport } = useNuxtApp()

//watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
//    console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint)
//})

onMounted(() => {
    //if (document.addEventListener) {
    //    if ('onwheel' in document) {
    //        document.addEventListener('wheel', document_wheel)
    //    } else if ('onmousewheel' in document) {
    //        document.addEventListener('mousewheel', document_wheel)
    //    } else {
    //        document.addEventListener('MozMousePixelScroll', document_wheel)
    //    }
    //    window.addEventListener('keydown', document_wheel, false)
    //} else {
    //    document.attachEvent('onmousewheel', document_wheel)
    //}
    //function document_wheel(e) {
    //    e.preventDefault()
    //}
})
</script>

<style lang="scss">
.html {
    @apply h-auto max-w-screen relative;
}

.head {
    @apply hidden;
}

.body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
    @apply bg-self-1 font-roboto h-auto max-w-screen relative;
}

.wrapper {
    @apply h-full overflow-hidden;
}
</style>
