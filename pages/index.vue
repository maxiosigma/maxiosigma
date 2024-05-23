<template>
    <LayoutDefault :title="title">
        <div class="relative container flex h-full">
            <div
                class="absolute grid gap-10 grid-cols-2 columns-2 w-full inset-0 self-center"
            >
                <div
                    v-for="({ title, icon }, ni) in nav.side"
                    class="flex-center bg-self-4 size-10 rounded-full cursor-pointer transition-all transition-delay-200 group group-hover:bg-self-5"
                    :class="[
                        ni % 2 === 0 ? '' : 'ml-a',
                        ni === 2 || ni === 4 ? 'm-l-' + (ni / 2) * 5 : '',
                        ni === 3 || ni === 5 ? 'm-r-' + ((ni - 1) / 2) * 5 : ''
                    ]"
                    v-p-tooltip="{
                        value: title,
                        showDelay: 200,
                        pt: {
                            arrow: 'border-transparent',
                            text: 'bg-self-5'
                        }
                    }"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                    />
                </div>
            </div>

            <div
                class="absolute flex gap-10 w-full self-end justify-center place-items-end inset-0 bottom-[10%]"
            >
                <div
                    v-for="({ title, icon }, ni) in nav.bottom"
                    class="flex-center bg-self-4 size-10 rounded-full cursor-pointer transition-all transition-delay-200 group group-hover:(bg-self-5)"
                    :class="[
                        position(ni, nav.bottom.length) ? 'm-b-5' : ''
                        //'animate-pulse-alt animate-duration-3000',
                        //useRandomString([
                        //    'animate-delay-200',
                        //    'animate-delay-400',
                        //    'animate-delay-600',
                        //    'animate-delay-800',
                        //    'animate-delay-1000'
                        //])
                    ]"
                    v-p-tooltip.top="{
                        value: title,
                        showDelay: 200,
                        pt: {
                            arrow: 'border-transparent',
                            text: 'bg-self-5'
                        }
                    }"
                >
                    <Icon
                        :name="icon"
                        mode="css"
                        class="transition-all transition-duration-300 transition-delay-200 text-self-2 group-hover:(text-self-7 rotate-360)"
                    />
                </div>
            </div>
        </div>
    </LayoutDefault>
</template>

<script lang="ts" setup>
const title = ref('Главная')
const nav = ref({
    side: [
        { title: 'Предложения', icon: '' },
        { title: 'Подарки', icon: '' },
        { title: 'Документы', icon: '' },
        { title: 'Новости', icon: '' },
        { title: 'Брэнды', icon: '' },
        { title: 'Контакты', icon: '' }
    ],
    bottom: [
        { title: 'Проекты', icon: 'bi:person-workspace' },
        { title: 'Услуги', icon: 'f7:rays' },
        { title: 'F.A.Q', icon: 'bi:patch-question' },
        { title: 'Отзывы', icon: 'carbon:star-review' }
    ]
})

const position = (i: number, count: number) => i === 0 || i === count - 1

const position_ = (i: number, count: number) => i === 2 || i === 3

//const navWithPosition = (position: 'bottom' | 'top' | 'left' | 'right') =>
//    nav.value.filter((it) => it.position === position)
</script>

<style lang="scss"></style>
