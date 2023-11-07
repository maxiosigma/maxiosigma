<template>
    <div class="bg-black text-light-200">
        <!--<ContentDoc path="ru" />-->
        <!--{{ data }}-->
    </div>
</template>

<script setup>
//const { data } = await useAsyncData('hello', () => queryContent('/index').findOne())

console.log(await useContentData('ru', 'index', 'yaml').catch(console.log))

if (process.server) {
    //const { writeFileSync } = await import('fs')
    //writeFileSync('content/ru.yaml', '')
}
//console.log(process.server)
</script>
