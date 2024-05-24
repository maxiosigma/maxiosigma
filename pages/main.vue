<template>
    <LayoutDefault :title="title">
        <!--        v-p-tooltip="{
                        value: title,
                        showDelay: 200,
                        pt: {
                            arrow: 'border-transparent',
                            text: 'bg-self-5 text-2xl'
                        }
                    }" -->
        <div class="relative container flex h-full">
            <div
                class="absolute grid gap-14 grid-cols-2 columns-2 w-full inset-0 self-center px-[10%]"
            >
                <div
                    v-for="({ title, icon, style }, ni) in nav.side"
                    class="relative flex-center bg-self-4 size-14 rounded-full cursor-pointer transition-all transition-delay-200 group hover:(bg-self-5) border-dotted border-2 border-self-5"
                    :class="[
                        ni % 2 === 0 ? '' : 'ml-a',
                        ni === 2 || ni === 4 ? 'm-l-' + (ni / 2) * 8 : '',
                        ni === 3 || ni === 5 ? 'm-r-' + ((ni - 1) / 2) * 8 : ''
                    ]"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="text-2xl transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                        :class="[style]"
                    />

                    <div
                        class="absolute hidden opacity-0 bg-self-5 px-2 py-1 rounded-1 text-2xl transition-all duration-1000 group-hover:(flex-center)"
                        :class="[
                            ni % 2 === 0
                                ? 'left-full ml-2 group-hover:(animate-bounce-in opacity-100)'
                                : 'right-full mr-2 group-hover:(animate-bounce-in opacity-100)'
                        ]"
                    >
                        {{ title }}
                    </div>
                </div>
            </div>

            <div
                class="absolute flex gap-14 w-full self-end justify-center place-items-end inset-0 bottom-[10%]"
            >
                <div
                    v-for="({ title, icon }, ni) in nav.bottom"
                    class="relative flex-center bg-self-4 size-14 rounded-full cursor-pointer border-12 border-self-7 transition-all transition-delay-200 group hover:(bg-self-5)"
                    :class="[
                        ni === 0 || ni === nav.bottom.length - 1 ? 'm-b-8' : ''
                        //'animate-pulse-alt animate-duration-3000',
                        //useRandomString([
                        //    'animate-delay-200',
                        //    'animate-delay-400',
                        //    'animate-delay-600',
                        //    'animate-delay-800',
                        //    'animate-delay-1000'
                        //])
                    ]"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="text-2xl transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                    />

                    <div
                        class="absolute hidden opacity-0 bg-self-5 px-2 py-1 rounded-1 text-2xl transition-all duration-1000 bottom-full mb-2 group-hover:(flex-center animate-bounce-in opacity-100)"
                    >
                        {{ title }}
                    </div>
                </div>
            </div>
        </div>
    </LayoutDefault>
</template>

<script lang="ts" setup>
const title = ref('Главная')
const nav = ref({
    side: [
        { title: 'Предложения', icon: 'bx:bxs-offer', style: '!text-3xl' },
        {
            title: 'Подарки',
            icon: 'streamline:shopping-gift-reward-box-social-present-gift-media-rating-bow'
        },
        { title: 'Документы', icon: 'oui:documentation', style: '!text-3xl' },
        { title: 'Новости', icon: 'iconamoon:news-fill', style: '!text-3xl' },
        {
            title: 'Бренды',
            icon: 'tabler:brand-github-filled',
            style: '!text-3xl'
        },
        { title: 'Контакты', icon: 'ri:contacts-line' }
    ],
    bottom: [
        { title: 'Проекты', icon: 'bi:person-workspace' },
        { title: 'Услуги', icon: 'f7:rays' },
        { title: 'F.A.Q', icon: 'bi:patch-question' },
        { title: 'Отзывы', icon: 'carbon:star-review' }
    ]
})

const position = (i: number, count: number) => i === 0 || i === count - 1

//const navWithPosition = (position: 'bottom' | 'top' | 'left' | 'right') =>
//    nav.value.filter((it) => it.position === position)
</script>

<style lang="scss"></style>
