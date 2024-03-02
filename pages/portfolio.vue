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

        <PrimeSidebar v-model:visible="sidebarVisible" header="About" position="right">
            <div class="flex gap-20 px-5">
                <div class="flex flex-col gap-5">
                    <h3 class="text-xl tracking-wider">Qualities</h3>
                    <div class="flex justify-content-center text-slate-300">
                        <TemplatePortfolioMeter :items="qualitiesPayload" :visible="sidebarVisible" />
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <h3 class="text-xl tracking-wider">Competencies</h3>
                    <div class="flex justify-content-center text-slate-300">
                        <TemplatePortfolioMeter :items="competenciesPayload" :visible="sidebarVisible" />
                    </div>
                </div>

                <div class="flex flex-col gap-5 min-w-52">
                    <h3 class="text-xl tracking-wider">Skills</h3>
                    <div class="flex justify-content-center text-slate-300">
                        <TemplatePortfolioMeter :items="skillsPayload" :visible="sidebarVisible" />
                    </div>
                </div>
            </div>
        </PrimeSidebar>
    </LayoutPage>
</template>

<script setup>
const works = []
const { locale } = useI18n()
const localePath = useLocalePath()

const skillsPayload = await usePayloadData({ name: 'portfolio-skills', path: 'skills' })
const qualitiesPayload = await usePayloadData({ name: 'portfolio-qualities', path: 'qualities' })
const competenciesPayload = await usePayloadData({ name: 'portfolio-competencies', path: 'competencies' })
const worksPayload = await usePayloadData({
    name: 'portfolio-works',
    path: 'works/',
    type: 'multi',
    callback: (item) => item,
    optionsWhere: { top: true }
})

console.log(worksPayload.value)

const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

watch(
    () => sidebarVisible.value,
    () => (storageSidebarVisible.value = sidebarVisible.value)
)

onMounted(() => {
    //setTimeout(() => {
    //    if (sidebarVisible.value === true) {
    //        //sidebarVisible.value = false
    //    }
    //}, 25000)
})

useHead({
    title: 'Портфолио'
})
</script>

<style lang="scss">
.p-sidebar-right .p-sidebar {
    @apply w-auto lg:max-w-[90%] max-w-full #{!important};
}

.p-sidebar-header {
    @apply flex justify-end gap-3 uppercase tracking-[0.3rem];
}

.p-sidebar-header-content {
    @apply border-b-2 border-b-self-3 border-dashed pl-1.5 text-center;
}
</style>
