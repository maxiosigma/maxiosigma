<template>
    <div></div>
</template>

<script setup>
const data = await queryContent().find()

console.log(data)

useHead({
    title: 'Projects'
})
</script>
