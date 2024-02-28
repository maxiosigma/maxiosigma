<template>
    <PrimeMeterGroup
        :value="meterGroups"
        :orientation="orientation ?? 'vertical'"
        :labelOrientation="labelOrientation ?? 'vertical'"
    />
</template>

<script setup>
const props = defineProps(['orientation', 'labelOrientation'])

const baseMeterGroups = [
    //
    { label: 'Nuxt', value: 20 },
    { label: 'Tailwind', value: 15 },
    { label: 'Strapi CMS', value: 15 },
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
    { label: 'TS', value: 10 },
    { label: 'JS' },
    { label: 'C#' }
]

const colorsMeterGroups = useRandTwColors(baseMeterGroups.length)
const valuesMeterGroups = baseMeterGroups.reduce((s, it) => (s += it?.value ?? 0) && s, 0)

const meterGroups = useState(
    () =>
        baseMeterGroups.map((it, i) => ({
            color: colorsMeterGroups[i],
            value: 100 / valuesMeterGroups,
            ...it
        }))
    //.sort((a, b) => b.value - a.value)
)
</script>
