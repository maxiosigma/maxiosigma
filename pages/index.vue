<template>
    <!-- :view="!isQuery" -->
    <LayoutPage>
        <!--  -->
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
.index {
    &-services {
        &-category {
            @apply relative flex justify-start items-center flex-col font-oranienbaum mx-1;
        }
    }

    &-nav {
        //auto-cols-max grid-cols-4 bg-self-2/50 rounded-lg  grid-rows-3 sm:grid-rows-2 lg:grid-rows-1
        @apply fixed grid justify-center items-end px-4 py-2 self-center z-30 max-w-1/2 h-auto bottom-[5.5%] grid-flow-col-dense <sm: (hidden);

        &-item {
            // bg-self-7 border-self-5 border-3 border-transparent
            @apply flex-center rounded-full m-1 transition-all duration-300 cursor-pointer bg-opacity-10 elevation-1 hover: (bg-opacity-100);
        }

        &-icon {
            @apply w-5 h-5 transition duration-500 text-self-1 opacity-75 group-hover: (opacity-100);

            &.active {
                @apply text-self-5 opacity-100 group-hover: (opacity-100);
            }
        }
    }
}

.face {
    &_1_shadow {
        &_1 {
            filter: blur(1px) drop-shadow(10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }

    &_2_shadow {
        &_1 {
            //filter: drop-shadow(10px -10px 10px #003366);
            filter: blur(1px) drop-shadow(-10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }
}
</style>
