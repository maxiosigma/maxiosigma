<template>
    <div class="section" :class="[sc, active ? 'section-to' : 'section-no']">
        <!-- section-no -->
        <div class="section-waves z-0">
            <LazyItemMediaImg v-if="wdr" class="fixed right-0 h-full w-auto" src="wave_3d_1.webp"></LazyItemMediaImg>
            <LazyItemMediaImg v-if="wdl" class="fixed left-0 mirror-horizonal h-full w-auto" src="wave_3d_1.webp"></LazyItemMediaImg>
        </div>

        <div class="section-content" :class="[scc, active ? 'section-content-to' : 'section-content-no']">
            <slot></slot>
        </div>

        <div class="section-waves z-20">
            <ItemMediaImg v-if="wl" class="fixed -left-1px h-full w-auto" src="wave_1.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wr" class="fixed -right-1px mirror-horizonal h-full w-auto" src="wave_1.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wt" class="fixed -top-1px mirror-vertical w-full h-auto" src="wave_2.webp"></ItemMediaImg>
            <ItemMediaImg v-if="wb" class="fixed -bottom-1px w-full h-auto" src="wave_2.webp"></ItemMediaImg>
        </div>
    </div>
</template>

<script setup>
//const { active, wl, wr, wt, wb, wdl, wdr, scc, sc } =
defineProps({
    active: { default: false, type: Boolean, required: false },
    wl: { default: false, type: Boolean, required: false },
    wr: { default: false, type: Boolean, required: false },
    wt: { default: false, type: Boolean, required: false },
    wb: { default: false, type: Boolean, required: false },
    wdl: { default: false, type: Boolean, required: false },
    wdr: { default: false, type: Boolean, required: false },
    scc: { default: '', type: String, required: false },
    sc: { default: '', type: String, required: false },
})
</script>

<style lang="scss">
.section {
    @apply relative flex-center h-full max-h-full w-full overflow-hidden transition-all duration-750;

    &-no {
        @apply !(h-0 min-h-0 min-w-screen overflow-y-hidden opacity-0);
    }

    &-content {
        @apply flex-center h-full w-0 transition-all duration-1500 overflow-x-hidden overflow-y-auto pb-20;

        &-to {
            @apply w-full;
        }
    }

    &-waves {
        @apply pointer-events-none absolute inset-0;
    }
}
</style>
