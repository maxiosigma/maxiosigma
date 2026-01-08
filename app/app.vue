<script lang="ts" setup>
useHead({
    htmlAttrs: {
        class: `html max:dark`,
        lang: 'ru'
    },
    bodyAttrs: {
        class: 'body'
    },
    titleTemplate: (title) => {
        return `${
            title
                ? title?.toUpperCase()
                : 'Page' + ' ' + Math.floor(41624 + Math.random() * (412648126 + 1 - 41624))
        } ‡ MAXIOSIGMA`
    },
    link: [{ rel: 'manifest', href: '/manifest.json' }],
    meta: [
        { name: 'charset', content: 'utf-8' },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'theme-color', content: '#000000' }
    ]
})
</script>

<template>
    <NuxtLayout>
        <TemplateNuxtLoadingIndicator />
        <TemplateNuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
html {
    @apply: bg-self-background-soft flex min-h-full min-w-full relative;
    font-size: 14px;
}

head {
    @apply: hidden;
}

body {
    @apply: bg-self-background-soft flex flex-col font-roboto min-h-full min-w-full h-auto max-w-screen
        relative m-0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    @apply: flex flex-col flex-grow overflow-hidden;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
