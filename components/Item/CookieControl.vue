<template>
    <CookieControl :locale="locale">
        <template #bar>
            <h2>Bar title</h2>
            <p>Bar description (you can use $cookies.text.barDescription)</p>
            <n-link>Go somewhere</n-link>
        </template>

        <template #cookie="{ cookie }">
            <h3 v-text="cookie.name" />
            <span v-html="cookie.description" />

            <div v-if="cookie.targetCookieIds">
                <b>Cookie ids: </b>
                <span v-text="cookie?.targetCookieIds?.join(', ')" />
            </div>
        </template>

        <template #modal>
            <h2>Modal title</h2>
            <p>Modal description</p>
        </template>
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
