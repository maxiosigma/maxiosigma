<template>
    <section class="flex flex-col">
        <!--{{ works }}-->

        <div class="text-gray-400 bg-gray-900 body-font" v-for="(work, wi) in works" :key="wi">
            <!--<div>{{ work }}</div>-->
            {{ work?.images?.[0] }}
            <ItemMediaImg class="w-1/6" :src="'/' + work?.images?.[0]" />
        </div>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
//console.log(prop.works)
</script>

<style lang="scss"></style>
