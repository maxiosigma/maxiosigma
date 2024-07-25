<template>
    <!-- :class="[sc, active ? 'section-to' : 'section-no']" -->
    <div class="section" :class="[sc]">
        <!-- section-no -->
        <div class="section-waves z-0">
            <LazyItemMediaImg
                v-if="wdr"
                class="absolute right-0 h-full w-auto"
                src="wave_3d_1.webp"
            ></LazyItemMediaImg>
            <LazyItemMediaImg
                v-if="wdl"
                class="absolute left-0 mirror-horizonal h-full w-auto"
                src="wave_3d_1.webp"
            ></LazyItemMediaImg>
        </div>

        <!-- :class="[scc, active ? 'section-content-to' : 'section-content-no']" -->
        <div class="section-content" :class="[scc]">
            <slot></slot>
        </div>

        <div class="section-waves z-20">
            <ItemMediaImg
                v-if="wl"
                class="absolute -left-1px h-full w-auto"
                src="wave_1.webp"
            ></ItemMediaImg>
            <ItemMediaImg
                v-if="wr"
                class="absolute -right-1px mirror-horizonal h-full w-auto"
                src="wave_1.webp"
            ></ItemMediaImg>
            <ItemMediaImg
                v-if="wt"
                class="absolute -top-1px mirror-vertical w-full h-auto"
                src="wave_2.webp"
            ></ItemMediaImg>
            <ItemMediaImg
                v-if="wb"
                class="absolute -bottom-1px w-full h-auto"
                src="wave_2.webp"
            ></ItemMediaImg>
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
    scc: { default: '', type: undefined, required: false },
    sc: { default: '', type: undefined, required: false }
})
</script>

<style lang="scss">
.section {
    // m-auto h-full max-h-full transition delay-500 duration-1000
    --at-apply: relative flex-center flex-grow min-w-[100vh] min-h-screen max-w-full overflow-hidden;

    &-no {
        //--at-apply:  !(h-0 min-h-0 min-w-[100vh] overflow-y-hidden opacity-0);
    }

    &-content {
        //h-full w-0 pt-10 pb-30 overflow-hidden transition-all duration-1500
        --at-apply: flex-center;

        //&-to {
        //    --at-apply:  w-full;
        //}
    }

    &-waves {
        --at-apply: pointer-events-none absolute inset-0;
    }
}
</style>
