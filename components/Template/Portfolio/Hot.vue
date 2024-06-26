<template>
    <section class="flex gap-20 relative overflow-hidden">
        <PrimeTabs value="1" class="w-full">
            <PrimeTabList>
                <PrimeTab
                    v-for="(category, ci) in worksCategories"
                    :key="`${category.slug}`"
                    :value="`${ci + 1}`"
                >
                    {{ category.title }}
                </PrimeTab>
            </PrimeTabList>

            <PrimeTabPanels class="h-full">
                <PrimeTabPanel
                    v-for="(work, wi) in works"
                    :key="`${work.category}`"
                    :value="`${wi}`"
                >
                    <div
                        class="flex transition-all duration-300 cursor-pointer h-full w-full text-gray-400 rounded-2xl gap-4 bg-self-1 mt-a border-2 border-self-2 max-h-50vh overflow-hidden group"
                        :class="[$style['multi-border']]"
                    >
                        <div class="min-w-3/8 max-w-3/8 pl-0.5 py-0.5">
                            <ItemMediaImg
                                class="flex-shrink-1 w-full h-full rounded-l-2xl"
                                :src="'/' + work?.images?.[0]"
                            />
                        </div>

                        <div class="flex flex-col py-4 pr-4 self-center flex-grow gap-4">
                            <div class="text-3xl text-self-4">{{ work.title }}</div>
                            <div class="">{{ work.description }}</div>
                            <PrimeButton v-if="work.link" class="self-start !px-1.5 !py-1">
                                Посмотреть →
                            </PrimeButton>
                        </div>
                    </div>
                </PrimeTabPanel>
            </PrimeTabPanels>
        </PrimeTabs>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])

const worksCategories = await usePayloadData({
    name: 'portfolio-works-categories',
    path: 'works_categories'
})
</script>

<style lang="scss" module>
.multi-border {
    box-shadow: inset 0 0 5px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);

    &-hover:hover {
        box-shadow: inset 0 0 5px 0 rgb(73 157 243), 0 0 10px 2px rgb(73 157 243);
        @apply z-50;
    }
}
</style>

<style lang="scss">
div.p-tablist-tab-list,
div.p-tabpanels {
    @apply bg-transparent #{!important};
}
</style>
