<template>
    <div class="f-c flex-col py-14">
        <div class="py-8" v-for="it in worksAll">
            <div>{{ it.slug }}</div>
        </div>
    </div>
</template>

<script setup>
const worksAll = (await useGetContent('portfolio/works/all')).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
)

const worksCategories = await useGetContent('portfolio/works/categories')
const worksSubcategories = await useGetContent('portfolio/works/subcategories')
const worksTechnologies = await useGetContent('portfolio/works/technologies')
const worksTags = await useGetContent('portfolio/works/tags')

console.log(worksAll)
console.log([worksCategories, worksSubcategories, worksTechnologies, worksTags])

useHead({
    title: 'Projects'
})
</script>
