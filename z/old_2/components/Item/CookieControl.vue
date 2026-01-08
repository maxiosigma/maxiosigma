<template>
    <div class="fixed inset-0 flex-center top-a w-full b-t-6 pt-1 b-self-2">
        <div class="flex items-stretch bg-self-2 divide-self-3 divide-x-4 z-90">
            <div class="h-full flex flex-col justify-center f-gap-2-6 p-4 pb-2">
                <div class="f-text-16-24">Файлы сookie</div>

                {{ isCookie }}

                <div class="f-text-8-14">
                    Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать
                    взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона
                    152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с
                    использованием файлов cookie и политикой конфиденциальности.
                </div>
            </div>

            <div class="min-h-full flex flex-col justify-center gap-2 p-4 pb- min-w-1/5">
                <PrimeButton
                    class="!f-text-8-16 !bg-self-6 !bg-self-6 !hover:(bg-self-2 text-self-7)"
                    >Управление файлами cookie</PrimeButton
                >

                <PrimeButton
                    class="!f-text-8-16 !bg-self-6 !bg-self-6 !hover:(bg-self-2 text-self-7)"
                    >Принять все</PrimeButton
                >
            </div>
        </div>

        <div
            class="fixed flex flex-col gap-5 my-a top-0 bottom-[15%] right-[10%] w-1/2 max-h-3/5 rounded-lg p-8 bg-self-1 overflow-x-hidden z-100"
        >
            <div class="flex flex-col gap-2">
                <div class="text-xl font-bold text-self-3">Необходимые файлы cookie</div>

                <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                        <PrimeCheckbox v-model="cookie.default.check" binary disabled />

                        <div class="text-sm font-medium uppercase">
                            {{ cookie.default.title }}

                            <span
                                v-if="cookie.default.description"
                                class="text-[10px] font-medium uppercase"
                            >
                                ~ {{ cookie.default.description }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div v-for="it in cookie.default.items">~ {{ it }}</div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <div class="text-xl font-bold text-self-3">Необязательные файлы cookie</div>

                <div
                    class="flex flex-col gap-1"
                    v-for="[key, val] in Object.entries(cookie).filter(
                        ([key]) => key !== 'default'
                    )"
                >
                    <div class="flex items-center gap-2">
                        <PrimeCheckbox v-model="val.check" binary />

                        <div class="text-sm font-medium uppercase">
                            {{ val.title }}

                            <span v-if="val.description" class="text-[10px] font-medium uppercase">
                                ~ {{ val.description }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div v-for="it in val.items">~ {{ it }}</div>
                    </div>
                </div>
            </div>

            <div class="flex-center flex-wrap gap-4">
                <PrimeButton>Сохранить</PrimeButton>
                <PrimeButton>Принять все</PrimeButton>
                <PrimeButton>Удалить все</PrimeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n()

const isCookie = useCookie('cook-check')

const cookie = ref({
    default: {
        check: useCookie('cook-default', { default: () => true }),
        title: 'Куки по умолчанию',
        description: 'Используются для управления файлами cookie',
        items: ['lang', 'cook-*', 'i18n_redirected']
    },
    google: {
        check: useCookie('cook-google', { default: () => true }),
        title: 'Google Analitycs',
        description: 'Google GTM',
        items: ['_ga', '_gat', '_gid', '_ga_*']
    },
    yandex: {
        check: useCookie('cook-yandex', { default: () => true }),
        title: 'Yandex Metrika',
        description: 'Yandex Pixel',
        items: ['_ym_d', '_ym_isad', '_ym_uid', '_ym_visorc', 'metrika_enabled']
    },
    pulse: {
        check: useCookie('cook-pulse', { default: () => true }),
        title: 'Pulse Pixel',
        description: '',
        items: [
            'sbjs_current_add',
            'sbjs_migrations',
            'sbjs_current',
            'sbjs_first',
            'sbjs_udata',
            'sbjs'
        ]
    },
    vk: {
        check: useCookie('cook-vk', { default: () => true }),
        title: 'VK Pixel',
        description: '',
        items: ['remixir']
    },
    other: {
        check: useCookie('cook-other', { default: () => true }),
        title: 'Other Cookie',
        description: '',
        items: ['ncc_*']
    }
})

watch(
    () => cookie.value,
    (current, prev) => {
        console.log({ current, prev })
    },
    { deep: true }
)
</script>

<style lang="scss"></style>
