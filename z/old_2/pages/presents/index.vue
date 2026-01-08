<template>
    <LayoutPage>
        <!--<ItemCookieControl />-->

        <fragment v-if="$dev">aaaa</fragment>
    </LayoutPage>
</template>

<script lang="ts" setup>
const title = ref('Подарки')
useHead({
    title
})
</script>

<style lang="scss"></style>
