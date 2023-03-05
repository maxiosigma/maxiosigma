<template>
    <div class="w-screen h-screen">
        <ItemMediaImg src="wave_1.webp" bg></ItemMediaImg>
    </div>
</template>

<script setup>
const title = ref("Автор")
const description = ref("")
definePageMeta({ layout: "page" })
</script>

<style lang="scss">
html {
    @apply bg-black;
}
</style>
