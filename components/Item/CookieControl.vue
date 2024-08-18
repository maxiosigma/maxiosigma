<template>
    <CookieControl :locale="locale">
        <!--  -->
    </CookieControl>
</template>

<script setup>
const { locale } = useI18n()

const { cookiesEnabled, cookiesEnabledIds, isConsentGiven, isModalActive, moduleOptions } =
    useCookieControl()

watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
        console.log('cooks', { current, previous })

        window.location.reload()

        //if (
        //  !previous?.includes('google-analytics') &&
        //  current?.includes('google-analytics')
        //) {
        //  // cookie with id `google-analytics` got added
        //  window.location.reload() // placeholder for your custom change handler
        //}
    },
    { deep: true }
)
</script>

<style lang="scss" scoped></style>
