<template>
    <LayoutPage>
        <div class="flex self-end py-8 pr-8 justify-content-center text-slate-300">
            <PrimeMeterGroup :value="meterGroups" orientation="vertical" labelOrientation="vertical" />
        </div>
    </LayoutPage>
</template>

<script setup>
const works = []

const baseMeterGroups = [
    //
    { label: 'Nuxt', value: 20 },
    { label: 'Strapi', value: 15 },
    { label: 'Tailwind', value: 15 },
    { label: 'October CMS' },
    { label: 'Wordpress CMS' },
    { label: 'Handlebars' },
    { label: 'PowerPoint' },
    { label: 'Photoshop' },
    { label: 'Blender' },
    { label: 'MatLab' },
    { label: 'Html5' },
    { label: 'Visio' },
    { label: 'CSS3' },
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

useHead({
    title: 'Портфолио'
})
</script>
