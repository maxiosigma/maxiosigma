<template>
    <LayoutDefault> </LayoutDefault>
</template>

<script setup>
const {
    params: { slug }
} = useRoute()

//await navigateTo('https://nuxt.com', {
//    external: true,
//    open: true
//}).then(() => setTimeout(() => navigateTo('/'), 5000))

console.log(slug)

useHead({
    title: slug
})
</script>
