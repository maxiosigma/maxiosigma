<template>
    <LayoutDefault>
        <NuxtLink v-for="item in payload" :to="item">{{ item }}</NuxtLink>
    </LayoutDefault>
</template>

<script setup>
const namePayload = `portfolio`

if (process.server) {
    //const localePath = useLocalePath()
    //const client = useSupabaseClient()
    //useNuxtApp().payload.data[namePayload] = [
    //    ...((await client.from('links').select('*')?.data) ?? []),
    //    ...(await queryContent(`/common/links`)
    //        .find()
    //        .catch(() => []))
    //].map((item) => localePath(`/go-to-${item?.title?.toLowerCase() || item?.slug}`))
}

//const payload = useNuxtData(namePayload)?.data

useHead({
    title: 'Портфолио'
})
</script>
