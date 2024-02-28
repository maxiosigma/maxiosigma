<template>
    <PrimeMeterGroup
        :value="meterGroups"
        :orientation="orientation ?? 'vertical'"
        :labelOrientation="labelOrientation ?? 'vertical'"
    />
</template>

<script setup>
const props = defineProps(['orientation', 'labelOrientation'])

const baseMeterGroups = ref(
    [
        //
        { label: 'Nuxt', weight: 100 },
        { label: 'Tailwind', weight: 70 },
        { label: 'Strapi CMS', weight: 90 },
        { label: 'October CMS' },
        { label: 'Wordpress CMS' },
        { label: 'Handlebars' },
        { label: 'PowerPoint' },
        { label: 'Photoshop' },
        { label: '3DsMax' },
        { label: 'Blender' },
        { label: 'MatLab' },
        { label: 'Html5' },
        { label: 'Visio' },
        { label: 'CSS3' },
        { label: 'Maya' },
        { label: 'PHP' },
        { label: 'PUG' },
        { label: 'GIT' },
        { label: 'SQL' },
        { label: 'TS', weight: 50 },
        { label: 'JS' },
        { label: 'C#' }
    ].map((it) => ({ ...it, weight: it?.weight ?? 5 }))
)

const colorsMeterGroups = ref([])
const valuesMeterGroups = ref(baseMeterGroups.value.reduce((s, it) => (s += it?.weight ?? 0) && s, 0))

const meterGroups = computed(() =>
    baseMeterGroups.value.map((it, i) => ({
        color: colorsMeterGroups.value[i],
        value: Math.ceil((it?.weight / valuesMeterGroups.value) * 100),
        ...it
    }))
)

onMounted(() => {
    colorsMeterGroups.value = useRandTwColors(baseMeterGroups.value.length)

    setInterval(() => {
        colorsMeterGroups.value = useRandTwColors(baseMeterGroups.value.length)
    }, 15000)
})
</script>

<style lang="scss">
.p-metergroup-meter,
.p-metergroup-label-marker {
    @apply transition-all duration-[2s];
}

.p-metergroup-meter:nth-child(n-1) {
    @apply mb-[0.2rem];
}
</style>
