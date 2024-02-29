<template>
    <LayoutPage>
        <div class="fixed flex flex-col right-0 top-auto h-full">
            <PrimeButton
                class="my-auto p-1.5 rounded-r-none"
                severity="success"
                @click="sidebarVisible = true"
                v-p-tooltip="'Skills'"
            >
                <Icon name="solar:map-arrow-left-bold" size="25px" />
            </PrimeButton>
        </div>

        <PrimeSidebar v-model:visible="sidebarVisible" header="Skills" position="right">
            <div class="flex py-8 pr-8 justify-content-center text-slate-300">
                <TemplatePortfolioMeter :visible="sidebarVisible" />
            </div>
        </PrimeSidebar>
    </LayoutPage>
</template>

<script setup>
const works = []
//const sidebarVisible = ref(false)
//const sidebarVisible = ref(true)

const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

//watchEffect(() => {
//    useLocalStorage('sidebar-visible', sidebarVisible.value)
//    console.log(sidebarVisible.value, useLocalStorage('sidebar-visible').value)
//})

watch(
    () => sidebarVisible.value,
    () => (storageSidebarVisible.value = sidebarVisible.value)
)

onMounted(() => {
    setTimeout(() => {
        if (sidebarVisible.value === true) {
            sidebarVisible.value = false
            //useLocalStorage('sidebar-visible', sidebarVisible.value)
        }
    }, 25000)
})

useHead({
    title: 'Портфолио'
})
</script>
