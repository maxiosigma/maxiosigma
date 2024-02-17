<template>
    <LayoutDefault>
        <div class="flex-grow min-h-full bg-black text-light-200">
            <!--<ContentDoc path="ru" contenteditable="true" />-->

            <!--<FormKit type="form"></FormKit>-->

            <!--<div>
                <div v-for="([key, val], i) in noDefaultObj(Object.entries(dataIndex))" :key="i">
                    {{ key }} - {{ val }}
                </div>
            </div>-->

            <!-- .filter((d) => d?.[0] !== '_')  -->
            <!--<ContentRenderer :value="data">
            <h1>{{ data.title }}</h1>
        </ContentRenderer>-->
        </div>
    </LayoutDefault>
</template>

<script setup>
defineI18nRoute(false)
//const { data: dataIndex } = await useAsyncData('index', () =>
//    queryContent().where({ _file: 'ru/index.yaml' }).findOne()
//)
//const dataIndex = queryContent().where({ _file: 'ru/index.yaml' }).findOne()

//const

//console.log(await useContentData('ru', 'index').catch(console.log))
//console.log(await queryContent().where({ _extension: 'yaml' }).findOne()) //

if (process.server) {
    //const { writeFileSync } = await import('fs')
    //writeFileSync('content/ru.yaml', '')
}
//console.log(process.server)

function noDefaultObj(arr) {
    return arr.filter(([key, val]) => key?.[0] !== '_')
}
</script>
