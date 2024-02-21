<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
if (process.server) {
    useFetch('/go-to-mw', { server: false })
}

// :foobar="123"
// page-key="static"
//if (process.server) {
//    try {
//        //console.log(await useFetch(`/go-to-mw`))
//    } catch (error) {}
//}
</script>
