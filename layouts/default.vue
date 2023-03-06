<template>
    <div class="layout-default">
        <slot />
    </div>
</template>

<script setup>
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
    //@apply bg-self-1;
}

.head {
}

.body {
}

.layout-default {
    @apply bg-self-1;
}
</style>
