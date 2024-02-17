<template>
    <LayoutDefault>
        <!--  -->
    </LayoutDefault>
</template>

<script setup>
const namePayload = `links`

if (process.server) {
    useNuxtApp().payload.data[namePayload] = await queryContent(`/${baseLocale}/links`)
        .only(['title', 'about', 'description', 'link'])
        .findOne()
        .catch(() => null)

    //await getSPBData(useNuxtData(namePayload)?.data)
}

const payload = useNuxtData(namePayload)?.data
</script>
