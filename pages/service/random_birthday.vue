<template>
    <NuxtLayout title="Services" onload='$parent.$emit("titleService", title)'>
        <LayoutPage></LayoutPage>
    </NuxtLayout>
</template>

<script lang="ts" setup>
//console.log(useNuxtData('stylePage').data.value)
const title = ref('Генератор поздравлений с ДР')
useHead({
    title
})

useSeoMeta({
    title
})

useServerSeoMeta({
    title
})
</script>

<style lang="scss"></style>
