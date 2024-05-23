<template>
    <LayoutDefault :title="title">
        <div
            class="absolute flex gap-5 w-full justify-center place-items-end bottom-[10%]"
        >
            <div
                v-for="({ title, icon }, ni) in nav.bottom"
                class="flex-center bg-self-4 size-8 rounded-full cursor-pointer transition-all transition-delay-200 animate-pulse-alt animate-duration-3000 group group-hover:bg-self-5"
                :class="[
                    position(ni, nav.bottom.length) ? 'm-b-5' : '',
                    useRandomString([
                        'animate-delay-200',
                        'animate-delay-400',
                        'animate-delay-600',
                        'animate-delay-800',
                        'animate-delay-1000'
                    ])
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
                    class="transition-all transition-delay-200 text-self-2 group-hover:text-self-7"
                />
            </div>
        </div>
    </LayoutDefault>
</template>

<script lang="ts" setup>
const title = ref('Главная')
const nav = ref({
    left: [],
    right: [],
    bottom: [
        { title: 'Проекты', icon: 'bi:person-workspace' },
        { title: 'Направления', icon: 'f7:rays' },
        { title: 'F.A.Q', icon: 'bi:patch-question' },
        { title: 'Отзывы', icon: 'carbon:star-review' }
    ]
})

const position = (i: number, count: number) => i === 0 || i === count - 1

//const navWithPosition = (position: 'bottom' | 'top' | 'left' | 'right') =>
//    nav.value.filter((it) => it.position === position)
</script>

<style lang="scss"></style>
