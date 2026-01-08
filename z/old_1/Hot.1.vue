<template>
    <section class="flex gap-20 relative">
        <!-- :uno: -->
        <div
            class="flex transition-all duration-300 cursor-pointer w-full text-gray-400 rounded-2xl gap-4 bg-self-1 mt-a border-2 border-self-2 max-h-50vh overflow-hidden group"
            :class="[
                $style['multi-border-hover'],
                wi !== 0 ? 'absolute bottom-0' : `relative top-0 mb-${works.length * 5}`,
                `-m-b-${wi * 10}`,
                `z-${(works.length - wi) * 5}`
            ]"
            v-for="(work, wi) in works"
            :key="wi"
        >
            <div
                class="group-hover:(hidden)"
                :class="[wi !== 0 ? 'absolute inset-0 bg-self-1 z-10 opacity-75' : 'hidden']"
            ></div>

            <div class="min-w-3/8 max-w-3/8 pl-0.5 py-0.5">
                <ItemMediaImg
                    class="flex-shrink-1 w-full h-full rounded-l-2xl"
                    :src="'/' + work?.images?.[0]"
                />
            </div>

            <div class="flex flex-col py-4 pr-4 self-center flex-grow gap-4">
                <!--<div>{{ work }}</div>-->
                <div class="text-3xl text-self-4">{{ work.title }}</div>
                <div class="">{{ work.description }}</div>
                <PrimeButton v-if="work.link" class="self-start !px-1.5 !py-1">
                    Посмотреть →
                </PrimeButton>
            </div>
            <!--{{ work?.images?.[0] }}-->
        </div>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
//console.log(prop.works)
</script>

<style lang="scss" module>
.multi-border {
    box-shadow: inset 0 0 5px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);

    &-hover:hover {
        box-shadow: inset 0 0 5px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);
        @apply z-50;
    }
}
</style>
