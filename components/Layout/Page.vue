<template>
    <LayoutDefault>
        <!--<NuxtLayout name="default">-->
        <div :class="[$style.page, view ? '' : '!hidden']">
            <!--{{ view }}-->

            <slot />
        </div>
        <!--</NuxtLayout>-->

        <!--<div v-click-outside></div>-->

        <div
            :class="[modal ? 'fixed flex-center bg-self-1 bg-opacity-95 inset-0 w-full h-full z-99999' : '!hidden h-0 w-0 overflow-hidden']"
        >
            <div
                class="flex-center flex-col flex-shrink m-auto inset-0 bg-self-2 w-4/5 px-4 py-10 max-w-sm h-auto min-h-40 max-h-none z-99999 text-white pointer-events-none"
            >
                <div class="uppercase border-b">Select language</div>

                <div class="flex-center flex-col mt-2 pointer-events-auto">
                    <div
                        class="py-1 transition duration-150 cursor-pointer hover:(text-self-4 underline-light-200)"
                        v-for="locale in locales.filter((it, i) => i < locales.length / 2)"
                        :key="locale.code"
                        @click="closeModal(locale.name)"
                    >
                        {{ locale.title }}
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed w-full flex-center bottom-10 pointer-events-none group">
            <div
                class="flex-center transition duration-1000 pointer-events-auto cursor-pointer opacity-25 sm:(opacity-10) group-hover:opacity-75"
                @click="openModal()"
            >
                <div class="absolute bg-self-7 rounded-full w-8 h-8"></div>
                <Icon class="relative z-1 text-xl text-self-4" name="ooui:language"></Icon>
            </div>
        </div>
    </LayoutDefault>
</template>

<script setup>
useSwitchLang()

defineProps({
    bs: { type: String, required: false, default: 'body-bg' },
    title: { type: String, required: false, default: undefined },
    description: { type: String, required: false, default: undefined },
    preloader: { type: Boolean, required: false, default: true },
    view: { type: Boolean, required: false, default: true },
})

const { locales } = useI18n()
const lang_check = useCookie('lang_check')
const modal = ref(!lang_check.value)

const openModal = () => {
    lang_check.value = false
    useCookieLang().value = undefined
    modal.value = true
}

const closeModal = (code) => {
    lang_check.value = true
    useCookieLang().value = code
    useSwitcherRedirect(code)
    modal.value = false
}
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
