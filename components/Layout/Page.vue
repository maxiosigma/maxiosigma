<template>
    <slot :onload="setPageClass($style.body)" />
</template>

<script setup>
const setPageClass = (style) => {
    useClassApp(document, style)
}
</script>

<style module>
.body {
    @apply bg-self-3;
}
</style>
