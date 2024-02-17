<template>
    <LayoutDefault>
        {{ data }}
    </LayoutDefault>
</template>

<script setup>
const {
    params: { slug }
} = useRoute()

const { locale } = useI18n()
const baseLocale = locale.value?.replace('-amp', '') ?? 'ru'

const data = ref({})

try {
    data.value = await queryContent(`/${baseLocale}/links/${slug}`)
        .only(['title', 'about', 'description', 'link'])
        .findOne()
} catch (error) {}

console.log(data.value)

// locale: locale.value?.replace('-amp', '')
//console.log()

//await navigateTo('https://nuxt.com', {
//    external: true,
//    open: true
//}).then(() => setTimeout(() => navigateTo('/'), 5000))

console.log(slug)

useHead({
    title: slug.toUpperCase()
})
</script>
