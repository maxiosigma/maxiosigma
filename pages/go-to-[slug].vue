<template>
    <LayoutDefault>
        {{ payload }}
    </LayoutDefault>
</template>

<script setup>
const {
    params: { slug }
} = useRoute()

const { locale } = useI18n()
const localePath = useLocalePath()
const baseLocale = locale.value?.replace('-amp', '') ?? 'ru'
const namePayload = `${baseLocale}_go_to_${slug}`

if (process.server) {
    useNuxtApp().payload.data[namePayload] = await queryContent(`/${baseLocale}/links/${slug}`)
        .only(['title', 'about', 'description', 'link'])
        .findOne()
        .catch(() => null)

    await getSPBData(useNuxtData(namePayload)?.data)
}

const payload = useNuxtData(namePayload)?.data
await getSPBData(payload)

if (payload.value === null) await navigateTo(localePath('/'))
console.log(fetchContentNavigation())

async function getSPBData(payload) {
    if (payload.value === null) {
        const client = useSupabaseClient()
        const { data: dataClient } = await client.from('links').select('*').eq('slug', slug).single()
        payload.value = dataClient
    }
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
