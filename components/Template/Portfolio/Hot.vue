<template>
    <section class="flex relative">
        <div
            v-for="(work, wi) in works"
            :key="wi"
            class=":uno: flex flex-col text-gray-400 rounded-2xl p-4"
            :class="[$style['multi-border'], wi !== 0 ? ':uno: absolute !hidden' : '']"
        >
            <div>{{ work }}</div>
            <div>{{ work.title }}</div>
            <div>{{ work.description }}</div>

            {{ work?.images?.[0] }}
            <ItemMediaImg class="w-full h-full" :src="'/' + work?.images?.[0]" />
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
