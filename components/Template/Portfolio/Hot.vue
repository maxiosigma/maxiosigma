<template>
    <section class="flex relative">
        <!-- :uno: -->
        <div
            class="flex text-gray-400 rounded-2xl gap-4 overflow-hidden"
            :class="[
                $style['multi-border'],
                wi !== 1 ? 'absolute !hidden' : '',
                `mr-[${(wi + 1) * 10}px]`
            ]"
            v-for="(work, wi) in works"
            :key="wi"
        >
            <div class="min-w-3/8 max-w-3/8 pl-0.5 py-0.5" :class="[$style['multi-border']]">
                <ItemMediaImg
                    class="flex-shrink-1 w-full h-full rounded-l-2xl"
                    :class="[$style['multi-border']]"
                    :src="'/' + work?.images?.[0]"
                />
            </div>

            <div class="flex flex-col py-4 pr-4 self-center flex-grow gap-4">
                <!--<div>{{ work }}</div>-->
                <div class="text-3xl text-self-4">{{ work.title }}</div>
                <div class="">{{ work.description }}</div>
                <PrimeButton class="self-start">Посмотреть →</PrimeButton>
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
    box-shadow: 
    //
        inset 0 0 5px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);
}
</style>
