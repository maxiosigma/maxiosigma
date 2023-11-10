<template>
    <LayoutPage class="main">
        <!--  -->

        <div class="flex flex-grow">
            <div class="relative flex-grow h-full w-full">
                <ItemMediaImg
                    class="absolute h-full w-full ml-13 object-cover object-right"
                    src="main/face_1.webp"
                ></ItemMediaImg>
            </div>

            <div class="relative flex-grow h-full w-full">
                <ItemMediaImg
                    class="absolute h-full w-full -ml-13 object-cover object-left"
                    src="main/face_2.webp"
                ></ItemMediaImg>
            </div>
        </div>

        <!--  -->
    </LayoutPage>
</template>

<script setup>
//const { query } = useRoute()
//const { x, y, sourceType } = useMouse({ touch: false })
//const { itemIsArray } = useFunctions()
//const { isMobile } = useDevice()

//const { t } = useI18n()
//const { localeProperties: lp } = useI18n()
//const lang = ref(lp.value.code)

//const title = ref('~ MAIN ~')
//const description = ref('')

//const activeSlide = ref('FAQ')
//const isQuery = useQueryLength() !== 0 && !useUtm(query)

//const isActive = (i) => activeSlide.value === i

//const { data } = useNuxtData()

//data.value = {
//    work_types: await useContentData(lang.value, 'work_types'),
//    work_categories: await useContentData(lang.value, 'work_categories'),
//}

//if (isQuery) navigateTo({ path: '/link', query })
//useHead({ title, description })
</script>

<style lang="scss">
.main {
}
</style>
