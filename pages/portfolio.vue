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

                <div class="flex flex-col gap-5">
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
//const sidebarVisible = ref(false)
//const sidebarVisible = ref(true)
//console.log(useContent(""));

const { locale } = useI18n()
const localePath = useLocalePath()

const skillsPayload = await getPayloadData({ name: 'portfolio-skills', path: 'skills' })
const qualitiesPayload = await getPayloadData({ name: 'portfolio-qualities', path: 'qualities' })
const competenciesPayload = await getPayloadData({ name: 'portfolio-competencies', path: 'competencies' })

console.log(skillsPayload)

const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

watch(
    () => sidebarVisible.value,
    () => (storageSidebarVisible.value = sidebarVisible.value)
)

onMounted(() => {
    setTimeout(() => {
        if (sidebarVisible.value === true) {
            //sidebarVisible.value = false
        }
    }, 25000)
})

useHead({
    title: 'Портфолио'
})
</script>

<style lang="scss">
.p-sidebar-right .p-sidebar {
    @apply w-auto #{!important};
}

.p-sidebar-header {
    @apply flex justify-end gap-3 uppercase tracking-[0.3rem];
}

.p-sidebar-header-content {
    @apply border-b-2 border-b-self-3 border-dashed pl-1.5 text-center;
}
</style>
