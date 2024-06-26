<template>
    <section class="flex gap-20 relative overflow-hidden">
        <PrimeTabs value="1" class="w-full" scrollable>
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
                        class="flex transition-all duration-300 cursor-pointer min-h-30vmin h-full w-full text-gray-400 rounded-2xl gap-4 bg-self-1 mt-a border-2 border-self-2 overflow-hidden group <md:(flex-col) md:(max-h-50vmin)"
                        :class="[$style['multi-border']]"
                    >
                        <div
                            class="relative z-0 overflow-hidden <md:(max-h-45vmin) md:(min-w-3/8 max-w-3/8)"
                        >
                            <ItemMediaImg
                                class="relative w-full h-full md:(rounded-l-2xl flex-shrink-1 h-full)"
                                :src="'/' + work?.images?.[0]"
                            />
                        </div>

                        <div
                            class="flex flex-col py-4 pr-4 self-center flex-grow gap-4 <md:(px-8%)"
                        >
                            <div class="f-text-18-36 text-self-4">{{ work.title }}</div>

                            <div class="f-text-10-24">{{ work.description }}</div>

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
.p-tablist-content {
    @apply flex;
}

.p-tablist-prev-button,
.p-tablist-next-button {
    @apply bg-self-2;
}

.p-tablist-tab-list {
    @apply f-c mx-a;
}

.p-tabpanels {
    @apply bg-transparent;
}

.p-tabs-scrollable > .p-tablist {
    @apply min-h-10vmin h-full overflow-x-hidden overflow-y-auto;
}

.p-tab {
    @apply w-auto;
}
</style>
