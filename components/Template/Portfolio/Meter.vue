<template>
    <PrimeMeterGroup
        :value="meterGroups"
        :orientation="orientation ?? 'vertical'"
        :labelOrientation="labelOrientation ?? 'vertical'"
    />
</template>

<script setup>
const prop = defineProps(['orientation', 'labelOrientation', 'visible'])

const baseMeterGroups = ref(
    [
        //
        { label: 'Nuxt', weight: 100 },
        { label: 'Tailwind', weight: 50 },
        { label: 'Strapi CMS', weight: 70 },
        { label: 'October CMS' },
        { label: 'Wordpress CMS' },
        { label: 'Handlebars' },
        { label: 'PowerPoint' },
        { label: 'Photoshop' },
        { label: 'Playwright', weight: 70 },
        { label: 'Puppeteer' },
        { label: 'Prettier' },
        { label: 'Anime.JS' },
        { label: 'Windicss' },
        { label: 'Blender', weight: 40 },
        { label: 'Devtool' },
        { label: '3DsMax' },
        { label: 'MatLab' },
        { label: 'Html5' },
        { label: 'Figma', weight: 50 },
        { label: 'Visio' },
        { label: 'CSS3' },
        { label: 'Maya' },
        { label: 'Vue', weight: 30 },
        { label: 'PHP' },
        { label: 'PUG' },
        { label: 'GIT' },
        { label: 'SQL' },
        { label: 'TS', weight: 30 },
        { label: 'JS' }
    ].map((it) => ({ ...it, weight: it?.weight ?? 10 }))
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

    if (prop.visible)
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

.p-metergroup-meter:nth-child(n-1) {
    @apply mb-[0.2rem];
}
</style>
