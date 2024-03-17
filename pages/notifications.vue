<template>
    <LayoutPage>
        <ItemNotification />
    </LayoutPage>
</template>

<script setup>
//const notifications = useLocalsStorage()

console.log(useLocalStorage('*').value)

useHead({
    title: 'Уведомления'
})
</script>

<style lang="scss"></style>
