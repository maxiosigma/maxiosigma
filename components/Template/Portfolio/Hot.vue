<template>
    <section class="flex relative">
        <div
            v-for="(work, wi) in works"
            :key="wi"
            class="flex flex-col text-gray-400 multi-border rounded-2xl p-4"
            :class="[wi !== 0 ? 'absolute !hidden' : '']"
        >
            <div>{{ work }}</div>
            <div>{{ work.title }}</div>
            <div>{{ work.description }}</div>

            <!--{{ work?.images?.[0] }}-->
            <!--<ItemMediaImg class="w-1/6" :src="'/' + work?.images?.[0]" />-->
        </div>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
//console.log(prop.works)
</script>

<style lang="scss">
.multi-border {
    box-shadow: 
    //
    //0 0 0 4px rgb(241 134 14 / var(--un-bg-opacity)),
        inset 0 0 10px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);
}
</style>
