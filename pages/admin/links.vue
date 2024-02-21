<template>
    <LayoutDefault>
        <div class="container py-10 flex flex-wrap gap-5 text-white/40">
            <!--<NuxtLink v-for="(item, i) in payload" :key="i" :to="item">{{ item }}</NuxtLink>-->
        </div>
    </LayoutDefault>
</template>

<script setup>
//console.log(useAttrs())
//defineI18nRoute(false)
//defineI18nRoute({ locales: ['ru'] })
//const localePath = useLocalePath()
//const namePayload = `links`

//const { data } = await useFetch('/go-to-[slug]', { key: 'link' })
//console.log(data)

//if (process.server) {
//    const client = useSupabaseClient()

//    useNuxtApp().payload.data[namePayload] = [
//        ...((await client.from('links').select('*')?.data) ?? []),
//        ...(await queryContent(`/common/links`)
//            .find()
//            .catch(() => []))
//    ].map((item) => `/go-to-${item?.title?.toLowerCase() || item?.slug}`)
//}

//const payload = useNuxtData(namePayload)?.data

useHead({
    title: 'Links'
})
</script>
