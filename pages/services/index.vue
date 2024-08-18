<template>
    <NuxtLayout title="Services">
        <LayoutPage></LayoutPage>
    </NuxtLayout>
</template>

<script lang="ts" setup>
//console.log(useNuxtData('stylePage').data.value)
const title = ref('Услуги')
useHead({
    title
})
</script>

<style lang="scss"></style>
