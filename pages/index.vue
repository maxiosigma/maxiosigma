<template>
    <div class="w-screen h-screen overflow-hidden">
        <ItemMediaImg class="absolute right-0 h-full w-auto" src="wave_3d_1.webp"></ItemMediaImg>
        <ItemMediaImg class="absolute left-0 mirror-horizonal h-full w-auto" src="wave_3d_1.webp"></ItemMediaImg>

        <ItemMediaImg class="absolute left-0 h-full w-auto" src="wave_1.webp"></ItemMediaImg>
        <ItemMediaImg class="absolute right-0 mirror-horizonal bottom-0 h-full w-auto" src="wave_1.webp"></ItemMediaImg>

        <!--<ItemMediaImg class="absolute left-0 top-0 bottom-0 transform -rotate-90 w-20px h-full" src="wave_1.webp" bg></ItemMediaImg>-->
    </div>
</template>

<script setup>
const title = ref("Автор")
const description = ref("")
definePageMeta({ layout: "page" })
</script>

<style lang="scss">
html {
    @apply bg-self-1;
}

.mirror {
    &-horizonal {
        transform: scale(-1, 1);
    }

    &-vertical {
        transform: scale(1, -1);
    }
}
</style>
