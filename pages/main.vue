<template>
    <LayoutDefault :title="title">
        <ItemClip :class-container="'bg-self-7'">
            <div class="relative flex h-full bg-self-2"></div>
            <!--<div class="absolute inset-0"></div>-->

            <ItemMediaImg
                :class="[
                    'absolute inset-0 h-screen w-auto mx-auto object-t transform scale-105'
                ]"
                src="main/face_3.png"
            />

            <div class="absolute inset-0 flex flex-col justify-center my-[5%]">
                <div
                    class="grid flex-wrap gap-[5vmax] grid-cols-2 columns-2 w-full inset-0 self-center px-[10vw] mb-[5vmax]"
                >
                    <a
                        :key="ni"
                        v-for="(
                            { title, icon, style, link, lottie }, ni
                        ) in nav.side"
                        :class="[
                            'main-nav-item group',
                            ni % 2 === 0 ? '' : 'ml-a',
                            ni === 2 || ni === 4 ? 'm-l-' + (ni / 2) * 8 : '',
                            ni === 3 || ni === 5
                                ? 'm-r-' + ((ni - 1) / 2) * 8
                                : '',
                            setAnimate()
                        ]"
                        :href="link"
                    >
                        <LottieAnimation
                            v-if="lottie"
                            :animationData="lottie"
                            :class="[
                                'main-nav-icon w-full h-full transform',
                                setRotate(),
                                style
                            ]"
                            autoplay
                            loop
                        />

                        <div
                            :class="[
                                'main-nav-pop',
                                ni % 2 === 0
                                    ? 'left-full ml-4'
                                    : 'right-full mr-4',
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
                    class="flex flex-wrap gap-[5vmax] w-full self-end justify-center place-items-end inset-0 bottom-[10vh]"
                >
                    <a
                        :key="ni"
                        v-for="(
                            { title, icon, style, link, lottie }, ni
                        ) in nav.bottom"
                        :class="[
                            'main-nav-item group',
                            ni === 0 || ni === nav.bottom.length - 1
                                ? 'm-b-8'
                                : '',

                            setAnimate()
                        ]"
                        :href="link"
                    >
                        <LottieAnimation
                            v-if="lottie"
                            :animationData="lottie"
                            :class="[
                                'main-nav-icon w-full h-full transform',
                                setRotate(),
                                style
                            ]"
                            autoplay
                            loop
                        />

                        <!--{{ loadTimeout }}-->

                        <div
                            :class="[
                                'main-nav-pop bottom-full mb-4',
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
        </ItemClip>

        <TemplatePreload />
    </LayoutDefault>
</template>

<script lang="ts" setup>
const title = ref('Главная')
const nav = ref({
    side: [
        {
            title: 'Предложения',
            icon: 'bx:bxs-offer',
            style: '',
            link: '/offers',
            lottie: await useGetLottie('offers')
        },
        {
            title: 'Подарки',
            icon: 'streamline:shopping-gift-reward-box-social-present-gift-media-rating-bow',
            style: '',
            link: '/presents',
            lottie: await useGetLottie('presents')
        },
        {
            title: 'Документы',
            icon: 'oui:documentation',
            style: 'scale-140',
            link: '/documents',
            lottie: await useGetLottie('documents')
        },
        {
            title: 'Новости',
            icon: 'iconamoon:news-fill',
            lottie: await useGetLottie('news'),
            style: '',
            link: '/news'
        },
        {
            title: 'Бренды',
            icon: 'tabler:brand-github-filled',
            lottie: await useGetLottie('brands'),
            style: 'scale-70',
            link: '/brands'
        },
        {
            title: 'Контакты',
            icon: 'ri:contacts-line',
            lottie: await useGetLottie('contacts'),
            link: '/contacts',
            style: 'scale-80'
        }
    ],
    bottom: [
        {
            title: 'Проекты',
            icon: 'bi:person-workspace',
            style: 'scale-80',
            link: '/projects',
            lottie: await useGetLottie('projects')
        },
        {
            title: 'Услуги',
            icon: 'f7:rays',
            style: 'scale-110',
            link: '/services',
            lottie: await useGetLottie('services')
        },
        {
            title: 'F.A.Q',
            icon: 'bi:patch-question',
            style: '',
            link: '/questions',
            lottie: await useGetLottie('questions')
        },
        {
            title: 'Отзывы',
            icon: 'carbon:star-review',
            style: 'scale-190',
            link: '/reviews',
            lottie: await useGetLottie('reviews')
        }
    ]
})

const setAnimate = ref(() =>
    useRandomString([
        'animate-delay-200',
        'animate-delay-400',
        'animate-delay-600',
        'animate-delay-800',
        'animate-delay-1000'
    ])
)

const setRotate = ref(() =>
    useRandomString([
        'group-hover:(rotate-360)',
        'group-hover:(-rotate-360)',
        'group-hover:(rotate-720)',
        'group-hover:(-rotate-360)'
    ])
)

const position = (i: number, count: number) => i === 0 || i === count - 1

const loadTimeout = ref(false)

onMounted(() => {
    setTimeout(() => {
        loadTimeout.value = true
    }, 5000)
})
</script>

<style lang="scss">
.main {
    &-nav {
        &-item {
            @apply relative flex-center bg-self-2/50 size-18 rounded-full border-4 border-self-7/15 cursor-pointer transition-all transition-delay-200 shadow-sm-circle shadow-self-4 animate-pulse-alt animate-duration-5000 hover:(bg-self-2 border-self-7);
        }
        &-icon {
            @apply text-4xl transition-all transition-duration-300 transition-delay-100 text-self-7 group-hover:(text-self-7);
        }
        &-pop {
            @apply absolute hidden opacity-0 bg-self-2 px-2 py-1 rounded-1 text-2xl transition-all duration-1000 shadow-xs-circle shadow-self-4 text-self-7 group-hover:(flex-center animate-bounce-in opacity-100 border-2 border-self-7);
        }
    }
}
</style>
