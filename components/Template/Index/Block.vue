<template>
    <div class="block">
        <slot></slot>

        <div class="block-waves z-0">
            <LazyItemMediaImg v-if="wdr" class="absolute right-0 h-full w-auto" src="wave_3d_1.webp"></LazyItemMediaImg>
            <LazyItemMediaImg v-if="wdl" class="absolute left-0 mirror-horizonal h-full w-auto" src="wave_3d_1.webp"></LazyItemMediaImg>
        </div>

        <div class="block-waves z-9000">
            <ItemMediaImg v-if="wt" class="absolute top-0 mirror-vertical w-full h-auto" src="wave_2.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wb" class="absolute bottom-0 w-full h-auto" src="wave_2.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wl" class="absolute left-0 h-full w-auto" src="wave_1.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wr" class="absolute right-0 mirror-horizonal h-full w-auto" src="wave_1.webp"></ItemMediaImg>
        </div>
    </div>
</template>

<script setup>
const { wl, wr, wt, wb, wdl, wdr } = defineProps({
    wl: { default: false, type: Boolean, required: false },
    wr: { default: false, type: Boolean, required: false },
    wt: { default: false, type: Boolean, required: false },
    wb: { default: false, type: Boolean, required: false },
    wdl: { default: false, type: Boolean, required: false },
    wdr: { default: false, type: Boolean, required: false },
})
</script>

<style lang="scss">
.block {
    @apply relative flex-center w-screen h-screen;
    // flex-grow

    &-waves {
        @apply pointer-events-none absolute inset-0;
    }
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
