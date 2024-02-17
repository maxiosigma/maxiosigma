<template>
    <LayoutDefault>
        <NuxtLink v-for="item in payload" :to="item">{{ item }}</NuxtLink>
    </LayoutDefault>
</template>

<script setup>
const namePayload = `links`

if (process.server) {
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const baseLocale = locale.value?.replace('-amp', '') ?? 'ru'

    const client = useSupabaseClient()

    useNuxtApp().payload.data[namePayload] = [
        ...((await client.from('links').select('*')?.data) ?? []),
        ...(await queryContent(`/links`)
            .find()
            .catch(() => []))
    ].map((item) => localePath(`/go-to-${item?.title?.toLowerCase() || item?.slug}`))
}

const payload = useNuxtData(namePayload)?.data
</script>
