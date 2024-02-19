<template>
    <LayoutDefault>
        <div class="container py-10 flex flex-wrap gap-5 text-white/40">
            <NuxtLink v-for="item in payload" :to="item">{{ item }}</NuxtLink>
        </div>
    </LayoutDefault>
</template>

<script setup>
defineI18nRoute(false)
const namePayload = `links`

if (process.server) {
    //const localePath = useLocalePath()
    const client = useSupabaseClient()

    useNuxtApp().payload.data[namePayload] = [
        ...((await client.from('links').select('*')?.data) ?? []),
        ...(await queryContent(`/common/links`)
            .find()
            .catch(() => []))
    ].map((item) => `/go-to-${item?.title?.toLowerCase() || item?.slug}`)
}

const payload = useNuxtData(namePayload)?.data

useHead({
    title: 'Links'
})
</script>
