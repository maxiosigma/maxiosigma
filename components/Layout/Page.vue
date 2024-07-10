<script setup>
//useSwitchLang()

//defineProps({
//    bs: { type: String, required: false, default: 'body-bg' },
//    title: { type: String, required: false, default: undefined },
//    description: { type: String, required: false, default: undefined },
//    preloader: { type: Boolean, required: false, default: true },
//    view: { type: Boolean, required: false, default: true },
//    pagecl: { type: String, required: false, default: '' }
//})

//toast.show()

//;(function () {
//    //if (!useLocalStorage('lang_check_first').value) openModal()
//})()

//onMounted(() => {})

//onMounted(() => {})

//https://content.nuxtjs.org/v1/getting-started/advanced#handling-hot-reload
//https://vuejs.org/api/built-in-components.html#teleport

//const modal = useLocalStorage('lang_check', false)
//const first_entry = useLocalStorage('first_entry', false)
//if (!first_entry.value) modal.value = true
//const openModal = () => (modal.value = true)
//const closeModal = (code) => {
//    modal.value = false
//    modalClose.value = true
//    useCookieLang().value = code
//    useSwitcherRedirect(code)
//}
</script>

<template>
    <div :class="[$style.page]">
        <slot />
    </div>

    <!--<TemplatePreload />-->
</template>

<style module>
.page {
    @apply flex flex-grow flex-col max-w-[100vw] relative justify-between;
}
</style>

<style lang="scss">
.header {
    @apply flex-grow-0 flex-shrink-0 z-10 relative;
}

.nav {
    @apply w-full z-20 relative;

    &-bar {
        @apply min-h-[8vh] top-0 z-20 fixed;
    }

    &-pre {
        &-bar {
            @apply min-w-[100vh] min-h-[8vh] z-0 relative;
        }

        &-cont {
            @apply min-w-[100vh] min-h-[64px] z-0 relative;
        }
    }
}

.footer {
    @apply flex-grow-0 flex-shrink-0 z-20 relative;
}

.preload {
    &-show {
        @apply max-h-none opacity-100 transition-all duration-[250] delay-[250];

        &-nav-bar {
            @apply opacity-100 transition-all duration-1000 delay-1000;
        }

        &-header {
            @apply h-auto opacity-100 transition-opacity duration-75;
        }
    }

    &-hide {
        @apply max-h-screen opacity-0 transition-all duration-[250] delay-0 overflow-hidden pointer-events-none;

        &-nav-bar {
            @apply opacity-0;
            @apply hidden;
        }

        &-header {
            @apply h-0 opacity-0 transition-opacity overflow-hidden;
        }
    }
}
</style>
