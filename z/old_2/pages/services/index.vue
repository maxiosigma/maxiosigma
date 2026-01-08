<template>
    <NuxtLayout title="Services" @titleService="console.log">
        <LayoutPage>
            {{ routes?.[0] }}
        </LayoutPage>
    </NuxtLayout>
</template>

<script setup>
const { locale, t } = useI18n()
const routes = await Promise.all(
    useRouter()
        .getRoutes()
        .filter((route) => route.path?.includes(`/${locale.value}/service/`))
        .map(async (route) => ({ ...route, data: (await useFetch(route.path)).data.value }))
)
//data: (await useFetch(route.path)).data.value

console.log(routes?.[0])

const title = t('titleServices')
useHead({
    title
})
</script>

<style lang="scss"></style>
