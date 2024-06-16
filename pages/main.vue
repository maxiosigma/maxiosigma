<template>
    <LayoutDefault :title="title">
        <ItemClip :class-container="'bg-self-7'">
            <div class="relative flex h-full bg-self-2"></div>

            <!--<ItemMediaImg
                :class="[
                    'absolute inset-0 h-screen w-auto mx-auto object-t transform scale-105 '
                ]"
                src="main/face_3.png"
            />-->

            <div class="absolute inset-0 flex flex-col justify-center mt-[10%]">
                <div
                    class="grid flex-wrap gap-[5vmax] grid-cols-2 columns-2 w-full inset-0 self-center px-[10vw] mb-[5vmax]"
                >
                    <a
                        :key="ni"
                        v-for="({ title, icon, style, link }, ni) in nav.side"
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
                        <Icon
                            :name="icon"
                            mode="css"
                            :class="['main-nav-icon', style]"
                        />

                        <div
                            :class="[
                                'main-nav-pop',
                                ni % 2 === 0
                                    ? 'left-full ml-2'
                                    : 'right-full mr-2',
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
                        v-for="({ title, icon, link }, ni) in nav.bottom"
                        :class="[
                            'main-nav-item group',
                            ni === 0 || ni === nav.bottom.length - 1
                                ? 'm-b-8'
                                : '',

                            setAnimate()
                        ]"
                        :href="link"
                    >
                        <!--<Icon
                            ref="refIcon"
                            :name="icon"
                            mode="css"
                            class="main-nav-icon"
                        />-->

                        <VueLottie
                            :animationData="iconPresents"
                            :height="200"
                            :width="200"
                        />

                        <div
                            :class="[
                                'main-nav-pop bottom-full mb-2',
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
    </LayoutDefault>
</template>

<script lang="ts" setup>
//import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import iconProjects from '~/assets/images/main/lottie/projects.json'
import iconPresents from '~/assets/images/main/lottie/presents.json'
//import iconPresents2 from '~/assets/images/main/lottie/presents.lottie'

console.log(iconPresents)

const title = ref('Главная')
const nav = ref({
    side: [
        {
            title: 'Предложения',
            icon: 'bx:bxs-offer',
            style: '',
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
            style: '',
            link: ''
        },
        {
            title: 'Новости',
            icon: 'iconamoon:news-fill',
            style: '',
            link: ''
        },
        {
            title: 'Бренды',
            icon: 'tabler:brand-github-filled',
            style: '',
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

const setAnimate = ref(() =>
    useRandomString([
        'animate-delay-200',
        'animate-delay-400',
        'animate-delay-600',
        'animate-delay-800',
        'animate-delay-1000'
    ])
)

const position = (i: number, count: number) => i === 0 || i === count - 1

const loadTimeout = ref(false)
onMounted(() => {
    setTimeout(() => {
        loadTimeout.value = true
    }, 3000)
})
</script>

<style lang="scss">
.main {
    &-nav {
        &-item {
            @apply relative flex-center bg-transparent size-14 rounded-full border-4 border-self-3 cursor-pointer transition-all transition-delay-200 shadow-sm-circle shadow-self-4 animate-pulse-alt animate-duration-5000 hover:(bg-self-5);
        }
        &-icon {
            @apply text-4xl transition-all transition-duration-300 transition-delay-200 text-self-7 group-hover:(text-self-7 rotate-360);
        }
        &-pop {
            @apply absolute hidden opacity-0 bg-transparent px-2 py-1 rounded-1 text-2xl transition-all duration-1000 shadow-xs-circle shadow-self-4 text-self-7 group-hover:(flex-center animate-bounce-in opacity-100);
        }
    }
}
</style>
