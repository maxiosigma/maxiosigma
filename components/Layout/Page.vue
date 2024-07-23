<template>
    <slot :onload="setPageClass($style.body)" />
</template>

<script setup>
const prop = defineProps(['class'])

const setPageClass = (style) => {
    useClassApp(document, style)
    if (prop?.class) useClassApp(document, prop.class)
}
</script>

<style module>
.body {
    @apply bg-self-3;
}
</style>
