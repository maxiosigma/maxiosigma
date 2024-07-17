<template>
    <slot :onload="setPageClass($style.body)" />
</template>

<script setup>
const setPageClass = (style) => {
    console.log(style)
    useClassApp(document, style)
}
</script>

<style module>
.body {
    @apply bg-self-3;
}
</style>
