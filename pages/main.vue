<template>
    <LayoutDefault :title="title">
        <div class="relative container flex h-full">
            <div
                class="absolute grid flex-wrap gap-14 grid-cols-2 columns-2 w-full inset-0 self-center px-[10%]"
            >
                <a
                    v-for="({ title, icon, style, link }, ni) in nav.side"
                    class="relative flex-center bg-self-4 size-14 rounded-full cursor-pointer transition-all transition-delay-200 shadow-sm-circle shadow-self-4 group hover:(bg-self-5)"
                    :class="[
                        ni % 2 === 0 ? '' : 'ml-a',
                        ni === 2 || ni === 4 ? 'm-l-' + (ni / 2) * 8 : '',
                        ni === 3 || ni === 5 ? 'm-r-' + ((ni - 1) / 2) * 8 : '',
                        'animate-pulse-alt animate-duration-5000',
                        useRandomString([
                            'animate-delay-200',
                            'animate-delay-400',
                            'animate-delay-600',
                            'animate-delay-800',
                            'animate-delay-1000'
                        ])
                    ]"
                    :href="link"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="text-2xl transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                        :class="[style]"
                    />

                    <div
                        class="absolute hidden opacity-0 bg-self-5 px-2 py-1 rounded-1 text-2xl transition-all duration-1000 shadow-xs-circle shadow-self-4 text-self-7 group-hover:(flex-center animate-bounce-in opacity-100)"
                        :class="[
                            ni % 2 === 0 ? 'left-full ml-2' : 'right-full mr-2',
                            !loadTimeout
                                ? '!flex-center animate-bounce-in opacity-100'
                                : ''
                        ]"
                    >
                        {{ title }}
                    </div>
                </a>
            </div>

            <div
                class="absolute flex flex-wrap gap-14 w-full self-end justify-center place-items-end inset-0 bottom-[10%]"
            >
                <a
                    v-for="({ title, icon, link }, ni) in nav.bottom"
                    class="relative flex-center bg-self-4 size-14 rounded-full cursor-pointer border-12 border-self-7 transition-all transition-delay-200 shadow-sm-circle shadow-self-4 group hover:(bg-self-5)"
                    :class="[
                        ni === 0 || ni === nav.bottom.length - 1 ? 'm-b-8' : '',
                        'animate-pulse-alt animate-duration-5000',
                        useRandomString([
                            'animate-delay-200',
                            'animate-delay-400',
                            'animate-delay-600',
                            'animate-delay-800',
                            'animate-delay-1000'
                        ])
                    ]"
                    :href="link"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="text-2xl transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                    />

                    <div
                        class="absolute hidden opacity-0 bg-self-5 px-2 py-1 rounded-1 text-2xl transition-all duration-1000 bottom-full mb-2 shadow-xs-circle shadow-self-4 text-self-7 group-hover:(flex-center animate-bounce-in opacity-100)"
                        :class="[
                            !loadTimeout
                                ? '!flex-center animate-bounce-in opacity-100'
                                : ''
                        ]"
                    >
                        {{ title }}
                    </div>
                </a>
            </div>
        </div>
    </LayoutDefault>
</template>

<script lang="ts" setup>
const title = ref('Главная')
const nav = ref({
    side: [
        {
            title: 'Предложения',
            icon: 'bx:bxs-offer',
            style: '!text-3xl',
            link: ''
        },
        {
            title: 'Подарки',
            icon: 'streamline:shopping-gift-reward-box-social-present-gift-media-rating-bow',
            link: ''
        },
        {
            title: 'Документы',
            icon: 'oui:documentation',
            style: '!text-3xl',
            link: ''
        },
        {
            title: 'Новости',
            icon: 'iconamoon:news-fill',
            style: '!text-3xl',
            link: ''
        },
        {
            title: 'Бренды',
            icon: 'tabler:brand-github-filled',
            style: '!text-3xl',
            link: ''
        },
        {
            title: 'Контакты',
            icon: 'ri:contacts-line',
            link: '/contacts'
        }
    ],
    bottom: [
        { title: 'Проекты', icon: 'bi:person-workspace', link: '' },
        { title: 'Услуги', icon: 'f7:rays', link: '' },
        { title: 'F.A.Q', icon: 'bi:patch-question', link: '' },
        { title: 'Отзывы', icon: 'carbon:star-review', link: '' }
    ]
})

const position = (i: number, count: number) => i === 0 || i === count - 1

const loadTimeout = ref(false)
onMounted(() => {
    setTimeout(() => {
        loadTimeout.value = true
    }, 3000)
})

//const navWithPosition = (position: 'bottom' | 'top' | 'left' | 'right') =>
//    nav.value.filter((it) => it.position === position)
</script>

<style lang="scss"></style>
