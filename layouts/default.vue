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
    meta: [{}],
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
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    @apply bg-self-1 font-roboto h-auto max-w-screen relative;
}

.wrapper {
    @apply h-full;
}
</style>
