<script lang="ts" setup>
const page = ref()
const $style = useCssModule() as any

onBeforeMount(() => {
    const elApp = document.getElementById('app') ?? document.querySelector('#app')

    if (!elApp?.getAttribute('class')?.includes($style?.page))
        elApp?.setAttribute('class', [elApp?.getAttribute('class'), $style?.page].join(' '))
})
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtPage ref="page" :page-key="(route:any) => route.fullPath" />
</template>

<style lang="scss" module>
.page {
    @apply: flex flex-grow max-w-100vw h-full relative justify-between;
}
</style>
