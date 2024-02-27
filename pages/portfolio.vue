<template>
    <LayoutPage>
        <!--<PrimeMeterGroup :value="value"></PrimeMeterGroup>-->
        <div class="card flex justify-content-center" style="height: 360px">
            <PrimeMeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
        </div>
    </LayoutPage>
</template>

<script setup>
const works = []

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
])

useHead({
    title: 'Портфолио'
})
</script>
