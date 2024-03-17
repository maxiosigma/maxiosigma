<template>
    <NuxtLoadingIndicator />

    <slot />
    <Toast>
        <!-- class="aaaaaaa" -->
        <!--<template #container="{ message, closeCallback }">
            <div>{{ message }}}</div>
        </template>-->

        <template #icon="{ class: classIcon }">
            <div class="flex items-center min-h-full inset-0">
                <div class="h-full w-1.5 bg-self-3"></div>
                <div class="h-full w-1 bg-self-1"></div>
                <div :class="classIcon"></div>
            </div>
        </template>
    </Toast>

    <!--<Toast class="bg-self-2">
        <template #message="slotProps">
            <div class="flex flex-col items-center">
                <slot name="text" :data="slotProps">
                    <div class="text-center">
                        <div class="text-xl my-3">{{ slotProps }}</div>
                    </div>
                </slot>

                <slot name="buttons" :data="slotProps">
                    <div class="flex gap-2">
                        <PrimeButton severity="success" label="Yes" @click="onConfirm()"></PrimeButton>
                        <PrimeButton severity="secondary" label="No" @click="onReject()"></PrimeButton>
                    </div>
                </slot>
            </div>
        </template>
    </Toast>-->
</template>

<script setup>
const { localeProperties: lp } = useI18n()
const lang = ref(lp.value.code)

const prop = defineProps({
    bs: {
        type: String,
        default: 'body-bg'
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    toast: {
        type: Object,
        default: {}
    }
})

useHead({
    title: prop.title,
    titleTemplate: `SIGMA | %s`,
    htmlAttrs: { class: 'html', lang: lang },
    headAttrs: { class: 'head' },
    bodyAttrs: { class: 'body' },
    meta: [
        { charset: 'utf-8' },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'MobileOptimized', content: '768' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
        //{ name: "", content: "" }
    ]
})

const meta = {
    //description: '[description]',

    ogTitle: prop.title,
    //ogDescription: '[og:description]',
    //ogImage: '[og:image]',
    //ogUrl: '[og:url]',

    twitterTitle: prop.title,
    //twitterDescription: '[twitter:description]',
    //twitterImage: '[twitter:image]',
    twitterCard: 'summary'
}

useSeoMeta({
    ...meta
})

useServerSeoMeta({
    robots: 'index, follow',
    ...meta
})

onMounted(() => {})
</script>

<style lang="scss">
html {
    //font-size: 12px;
}

.html {
    @apply bg-self-1 h-auto max-w-[100vw] relative;
}

.head {
    @apply hidden;
}

.body {
    @apply bg-self-1 flex flex-col font-roboto h-auto min-h-screen max-w-[100vw] relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-rendering: optimizeLegibility;
}

.wrapper {
    @apply min-h-full h-full flex flex-col flex-grow overflow-hidden;
}

.p-toast {
    @apply bg-indigo-800 border-0 rounded-lg overflow-hidden;

    &-message {
        @apply bg-transparent border-0 m-0 backdrop-blur-none;

        &-content {
            @apply border-0 bg-transparent items-stretch p-0;
        }

        &-text {
            @apply p-4;
        }
    }

    &-icon-close {
        @apply mt-2 mr-4;
    }
}
</style>
