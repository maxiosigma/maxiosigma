<template>
    <NuxtLayout title="Services" @titleService="console.log">
        <LayoutPage></LayoutPage>
    </NuxtLayout>
</template>

<script setup>
const { locale } = useI18n()
const routes = await Promise.all(
    useRouter()
        .getRoutes()
        .filter((route) => route.path?.includes(`/${locale.value}/service/`))
        .map(async (route) => ({ ...route, data: (await useFetch(route.path)).data.value }))
)

//console.log(emit)
console.log(routes?.[0])
console.log(useRoute())

//console.log(useNuxtData('stylePage').data.value)
const title = ref('Услуги')
useHead({
    title
})
</script>

<style lang="scss"></style>
