<template>
    <NuxtLayout name="default">
        <div :class="$style.page">
            <!-- Разрешение экрана меньше *** переключитесь на мобильный телефон -->
            <slot />
        </div>
    </NuxtLayout>
</template>

<script setup>
defineProps({
    bs: { type: String, required: false, default: 'body-bg' },
    title: { type: String, required: false, default: undefined },
    description: { type: String, required: false, default: undefined },
    preloader: { type: Boolean, required: false, default: true },
    navIntex: { type: Boolean, required: false, default: true },
})
</script>

<style module>
.page {
    @apply flex flex-col h-auto min-h-full max-w-screen relative justify-between;
}
</style>

<style lang="scss">
.header {
    @apply flex-grow-0 flex-shrink-0 z-10 relative;
}

.nav {
    @apply w-full z-20 relative;

    &-bar {
        @apply min-h-8vh top-0 z-20 fixed;
    }

    &-pre {
        &-bar {
            @apply min-w-screen min-h-8vh z-0 relative;
        }

        &-cont {
            @apply min-w-screen min-h-64px z-0 relative;
        }
    }
}

.footer {
    @apply flex-grow-0 flex-shrink-0 z-20 relative;
}

.preload {
    &-show {
        @apply max-h-none opacity-100 transition-all duration-250 delay-250;

        &-nav-bar {
            @apply opacity-100 transition-all duration-1000 delay-1000;
        }

        &-header {
            @apply h-auto opacity-100 transition-opacity duration-75;
        }
    }

    &-hide {
        @apply max-h-screen opacity-0 transition-all duration-250 delay-0 overflow-hidden pointer-events-none;

        &-nav-bar {
            @apply opacity-0;
            @apply hidden #{!important};
        }

        &-header {
            @apply h-0 opacity-0 transition-opacity overflow-hidden;
        }
    }
}
</style>
