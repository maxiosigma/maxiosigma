<template>
    <section class="flex gap-20 relative overflow-hidden">
        <PrimeTabs
            value="1"
            class="flex w-full p-4 border-2 border-self-2 rounded-2xl"
            :class="[$style['multi-border']]"
            scrollable
        >
            <PrimeTabList>
                <PrimeTab
                    class="f-text-14-24"
                    v-for="(category, ci) in worksCategories"
                    :key="`tab_${category.slug}_${ci}`"
                    :value="`${ci + 1}`"
                >
                    {{ category.title }}
                </PrimeTab>
            </PrimeTabList>

            <PrimeTabPanels>
                <PrimeTabPanel
                    class="transition-all duration-300 text-gray-400 bg-self-1 group"
                    v-for="(category, ci) in worksCategories"
                    :key="`panel_${category.slug}_${ci}`"
                    :value="`${ci + 1}`"
                >
                    <div
                        v-for="work in works
                            .filter((w) => !!w.category && w.category === category.slug)
                            .filter((w) => !!w)"
                    >
                        <!--<div
                            class="relative z-0 overflow-hidden <md:(max-h-45vmin) md:(min-w-3/8 max-w-3/8)"
                        >
                            <ItemMediaImg
                                class="relative w-full h-full md:(rounded-l-2xl flex-shrink-1 h-full)"
                                :src="'/' + work?.images?.[0]"
                            />
                        </div>-->

                        <div class="flex flex-col py-4 pr-4 self-center flex-grow gap-4">
                            <div class="f-text-16-28 text-self-4">
                                {{ work.title }}

                                <a @click.default="clicked(work.link)">
                                    <Icon
                                        class="f-text-12-24 text-self-5 text-shadow-lg text-shadow-color-self-5 transition-all duration-200 cursor-pointer hover:(text-self-6)"
                                        name="ph:paper-plane-right-bold"
                                    />
                                </a>
                            </div>

                            <div class="f-text-12-24">{{ work.description }}</div>
                            <!--
                            <PrimeButton v-if="work.link" class="self-start !px-1.5 !py-1">
                                Посмотреть →
                            </PrimeButton>-->
                        </div>
                    </div>
                </PrimeTabPanel>
            </PrimeTabPanels>
        </PrimeTabs>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
const worksCategories = usePayloadData('portfolio_works_categories')
const works = usePayloadData('portfolio_works_top')

const clicked = (href) => {
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    link.href = href
    link.target = '_blank'

    const event = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    })

    link.dispatchEvent(event)
}
</script>

<style lang="scss" module>
.multi-border {
    box-shadow: inset 0 0 15px 0 rgb(73 157 243), 0 0 10px 12px rgb(73 157 243);

    &-hover:hover {
        box-shadow: inset 0 0 15px 0 rgb(73 157 243), 0 0 10px 12px rgb(73 157 243);
        @apply z-50;
    }
}

//
</style>

<style lang="scss">
.p-tablist-content {
    @apply flex items-center relative mx-a;
}

.p-tablist-prev-button,
.p-tablist-next-button {
    @apply bg-self-2 border-self-4 border-2 border-inset rounded-md h-[90%] my-a top-0 bottom-0 opacity-75;
}

.p-tablist-tab-list {
    @apply mx-a bg-transparent;
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
