<template>
    <ItemModal :show="show">
        <div class="uppercase border-b">Select language</div>

        <div class="flex-center flex-col mt-2 pointer-events-auto">
            <div
                class="py-1 transition duration-150 cursor-pointer hover:(text-self-4 underline-light-200)"
                v-for="locale in locales_filter"
                :key="locale.code_"
                @click="closeModal(locale.code_)"
            >
                {{ locale.name }}
            </div>
        </div>
    </ItemModal>

    <div class="fixed w-full flex-center bottom-10 pointer-events-none group">
        <div
            class="flex-center transition duration-1000 pointer-events-auto cursor-pointer opacity-25 sm:(opacity-10) group-hover:opacity-75"
            @click="openModal"
        >
            <div class="absolute bg-self-7 rounded-full w-8 h-8"></div>
            <Icon class="relative z-1 text-xl text-self-4" name="ooui:language"></Icon>
        </div>
    </div>
</template>

<script setup>
const { locales, locale } = useI18n()
const locales_filter = locales.value.filter((it, i) => i < locales.value.length / 2)

const [views, views_lang, modal, modal_first] = useLocalsStorage(
    { n: `views`, v: 0 },
    { n: `views_${locale.value}`, v: 0 },
    'lang_check',
    'lang_check_first'
)

const show = ref(modal.value)

const openModal = () => {
    show.value = true
    modal.value = true
}

const closeModal = (code) => {
    modal.value = false
    modal_first.value = true
    useCookieLang().value = code
    useSwitcherRedirect(code)
}

onMounted(() => {
    const { toast } = useTailvue()

    if (!modal_first.value)
        toast.show({
            timeout: 0,
            type: 'danger',
            title: 'SELECT LANGUAGE',
            message: locales_filter.map((lf) => lf.name).join(', '),
            primary: {
                label: 'CHANGE',
                action: () => openModal()
            },
            secondary: {
                label: 'ACCEPT',
                action: () => closeModal(locale.value)
            }
        })
})

views.value++
views_lang.value++
</script>
