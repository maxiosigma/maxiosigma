<template>
    <div></div>
</template>

<script lang="ts" setup>
defineI18nRoute(false)

const { locales, defaultLocale, setLocale } = useI18n()
const vueLangs = locales.value.filter(({ code }) => code !== 'index').map(({ code }) => code)

onMounted(() => {
    const navLangs = navigator.languages.filter(
        (lang) => lang?.length === 2 || vueLangs.includes(lang)
    )

    const lang = navLangs?.[0] ?? defaultLocale

    setLocale(lang)
        .then(() => {
            navigateTo(`/${lang}/main`)
        })
        .catch(console.log)
})
</script>

<style lang="scss"></style>
