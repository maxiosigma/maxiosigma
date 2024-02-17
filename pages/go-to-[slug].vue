<template>
    <LayoutDefault>
        <!--{{ payload }}-->
    </LayoutDefault>
</template>

<script setup>
defineI18nRoute(false)

const {
    params: { slug }
} = useRoute()

const { locale } = useI18n()
const localePath = useLocalePath()
const baseLocale = locale.value?.replace('-amp', '') ?? 'ru'
const namePayload = `${baseLocale}_go_to_${slug}`

if (process.server) {
    useNuxtApp().payload.data[namePayload] = await queryContent(`/common/links/${slug}`)
        .findOne()
        .then((item) => (!isNot(item?.link) ? useCripty(item?.link) : null))
        .catch(() => null)

    await getSPBData(useNuxtData(namePayload)?.data)
}

const payload = useNuxtData(namePayload)?.data
await getSPBData(payload)

if (isNot(payload.value)) await navigateTo(localePath('/'))

async function getSPBData(payload) {
    if (payload.value === null) {
        const client = useSupabaseClient()
        const { data: dataClient } = await client.from('links').select('link').eq('slug', slug).single()
        payload.value = !isNot(dataClient?.link) ? useCripty(dataClient?.link) : null
    }
}

function isNot(item) {
    return item === null || item?.trim() === ''
}

useHead({
    title: slug?.toUpperCase()
})

//defineRouteRules({
//    sitemap: {
//        changefreq: 'daily',
//        priority: 0.3
//    }
//})
</script>
