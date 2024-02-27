<template>
    <LayoutPage>
        <!--<PrimeMeterGroup :value="value"></PrimeMeterGroup>-->
        <div class="card flex justify-content-center" style="height: 360px">
            <PrimeMeterGroup :value="meterGroups" orientation="vertical" labelOrientation="vertical" />
        </div>
    </LayoutPage>
</template>

<script setup>
const works = []

const baseMeterGroups = [
    { label: 'Apps', value: 16 },
    { label: 'Messages', value: 8 },
    { label: 'Media', value: 24 },
    { label: 'System', value: 10 }
]
const colorsMeterGroups = useRandTwColors(baseMeterGroups.length)

const meterGroups = useState(() => baseMeterGroups.map((it, i) => ({ ...it, color: colorsMeterGroups[i] })))

//const payloadKey = 'works-colors'
//if (process.server) {
//    const baseMeterGroups = [
//        { label: 'Apps', value: 16 },
//        { label: 'Messages', value: 8 },
//        { label: 'Media', value: 24 },
//        { label: 'System', value: 10 }
//    ]

//    const colorsMeterGroups = useRandTwColors(baseMeterGroups.length)

//    useNuxtApp().payload.data[payloadKey] = baseMeterGroups.map((it, i) => ({ ...it, color: colorsMeterGroups[i] }))
//}
//const meterGroups = useNuxtData(payloadKey).data

useHead({
    title: 'Портфолио'
})
</script>
