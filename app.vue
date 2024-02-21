<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
if (process.server) {
    //useFetch('/go-to-mw', { server: true })
    //navigateTo('/go-to-mw')
}

// :foobar="123"
// page-key="static"
//if (process.server) {
//    try {
//        //console.log(await useFetch(`/go-to-mw`))
//    } catch (error) {}
//}
</script>
