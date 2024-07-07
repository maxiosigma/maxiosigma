<template>
    <PrimeMeterGroup
        :value="meterGroups"
        :orientation="orientation"
        :labelOrientation="labelOrientation"
    />
</template>

<script setup>
const { items, visible } = defineProps({
    items: { type: Object, default: [] },
    orientation: { type: String, default: 'vertical' },
    labelOrientation: { type: String, default: 'vertical' },
    visible: { type: Boolean, default: false }
})

const baseMeterGroups = ref(
    items?.length > 0 ? items?.map((it) => ({ label: it?.title, weight: it?.weight ?? 10 })) : []
)

const colorsMeterGroups = ref([])
const valuesMeterGroups = ref(
    baseMeterGroups.value.reduce((s, it) => (s += it?.weight ?? 0) && s, 0)
)

const meterGroups = computed(() =>
    baseMeterGroups.value.map((it, i) => ({
        color: colorsMeterGroups.value[i],
        value: (it?.weight / valuesMeterGroups.value) * 100,
        ...it
    }))
)

onMounted(() => {
    colorsMeterGroups.value = useRandTwColors(baseMeterGroups.value.length)

    if (!!visible)
        setInterval(() => {
            colorsMeterGroups.value = useRandTwColors(baseMeterGroups.value.length)
        }, 5000)
})
</script>

<style lang="scss">
.p-metergroup-meter,
.p-metergroup-label-marker {
    @apply transition-all duration-[2s];
}

.p-metergroup-meter {
    @apply min-w-[0.5rem];
}

.p-metergroup-meter:nth-child(n + 1) {
    @apply mt-[0.2rem];
}

.p-metergroup-label-marker {
    @apply min-w-[0.5rem] min-h-[0.5rem];
}
</style>
