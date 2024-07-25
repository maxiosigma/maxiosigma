<template>
    <BaseNavSidebar :items="navItems" />

    <PrimeScrollPanel
        class="max-h-100vh h-full w-full overflow-hidden"
        :dt="{
            bar: {
                background: '{primary.color}'
            }
        }"
    >
        <slot :onload="setPageClass($style.body)">
            <div class="flex-center flex-grow w-full h-90vh uppercase f-text-24-48 fw-black">
                В разработке
            </div>
        </slot>
    </PrimeScrollPanel>
</template>

<script setup>
const prop = defineProps(['class', 'navItems'])

const setPageClass = (style) => {
    useClassApp(document, style)
    if (prop?.class) useClassApp(document, prop.class)
}
</script>

<style module>
.body {
    --at-apply: bg-self-3;
}
</style>

<style>
.wrapper {
    --at-apply: flex-row !important;
}
</style>
