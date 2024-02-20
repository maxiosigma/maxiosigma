<template>
    <LayoutDefault></LayoutDefault>
</template>

<script setup>
//defineI18nRoute(false)
//defineI18nRoute({ locales: ['ru'] })

//definePageMeta({
//    key: (route) => route.fullPath
//})

const {
    params: { slug },
    query
} = useRoute()

const localePath = useLocalePath()
const namePayload = `${useBaseLocale()}_go_to_${slug}`

if (process.server) {
    useNuxtApp().payload.data[namePayload] = await queryContent(`/common/links/${slug}`)
        .findOne()
        .then((item) => (!isNot(item?.link) ? useCripty(item?.link) : null))
        .catch(() => null)

    await getSPBData(useNuxtData(namePayload)?.data)
}

const payload = useNuxtData(namePayload)?.data
await getSPBData(payload.value)

if (isNot(payload.value)) await navigateTo(localePath('/'))
else {
    let check = false
    const link = useUncript(payload.value)

    if (link?.includes('http')) {
        //?directly=true //!query?.directly //http://localhost:3000/go-to-bizup?directly=true
        //await navigateTo(link, { external: true, open: !query?.directly })
        check = true
    }

    //if (check) setTimeout(() => navigateTo(localePath('/')), 1500)
}

async function getSPBData(payload) {
    if (payload === null) {
        const client = useSupabaseClient()
        const { data: dataClient } = await client.from('links').select('link').eq('slug', slug).single()
        payload = !isNot(dataClient?.link) ? useCripty(dataClient?.link) : null
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
