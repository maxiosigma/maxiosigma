<script lang="ts" setup>
onMounted(() => {
    document.querySelector('.nuxt-loading-indicator')?.removeAttribute('class')
})
</script>

<template>
    <NuxtLoadingIndicator />
</template>
