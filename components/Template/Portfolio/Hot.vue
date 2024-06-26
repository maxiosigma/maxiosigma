<template>
    <section class="flex gap-20 container relative overflow-hidden">
        <PrimeTabs :value="0" class="w-full">
            <PrimeTabList>
                <PrimeTab v-for="(work, wi) in works" :key="work.slug" :value="wi">
                    {{ wi }}
                </PrimeTab>
            </PrimeTabList>

            <PrimeTabPanels>
                <PrimeTabPanel v-for="(work, wi) in works" :key="work.slug" :value="wi">
                    <p class="m-0">{{ work.description }}</p>
                </PrimeTabPanel>
            </PrimeTabPanels>
        </PrimeTabs>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
//console.log(prop.works)
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
