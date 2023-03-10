<template>
    <slot />
</template>

<script setup>
// <div class="layout-default"> </div>

const props = defineProps({
    bs: {
        type: String,
        required: false,
        default: "body-bg",
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
    htmlAttrs: { class: "html" },
    headAttrs: { class: "head" },
    bodyAttrs: { class: "body" },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=768, initial-scale=1" }],
})

const { $viewport } = useNuxtApp()

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
    console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint)
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
    @apply h-full;
}
</style>
