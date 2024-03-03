<template>
    <LayoutPage>
        <div class="card container py-20 w-full flex flex-col justify-content-center">
            <div class="">Пройдите тест, чтобы увидеть больше</div>

            <PrimeStepper linear>
                <PrimeStepperPanel header="Кем вы являетесь ?">
                    <template #content="{ nextCallback }">
                        <!--<div></div>-->

                        <PrimeSelectButton />

                        <!--<div class="flex flex-col gap-2 mx-auto">
                            <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
                            <div class="flex flex-wrap justify-content-center gap-3">
                                <PrimeToggleButton v-model="o1" onLabel="Nature" offLabel="Nature" />
                                <PrimeToggleButton v-model="o2" onLabel="Art" offLabel="Art" />
                                <PrimeToggleButton v-model="o3" onLabel="Music" offLabel="Music" />
                                <PrimeToggleButton v-model="o4" onLabel="Design" offLabel="Design" />
                                <PrimeToggleButton v-model="o5" onLabel="Photography" offLabel="Photography" />
                                <PrimeToggleButton v-model="o6" onLabel="Movies" offLabel="Movies" />
                                <PrimeToggleButton v-model="o7" onLabel="Sports" offLabel="Sports" />
                                <PrimeToggleButton v-model="o8" onLabel="Gaming" offLabel="Gaming" />
                                <PrimeToggleButton v-model="o9" onLabel="Traveling" offLabel="Traveling" />
                                <PrimeToggleButton v-model="o10" onLabel="Dancing" offLabel="Dancing" />
                            </div>
                        </div>-->

                        <div class="flex pt-4 justify-center">
                            <PrimeButton
                                label="Следующий вопрос"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                @click="nextCallback"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>

                <PrimeStepperPanel header="Какие навыки вы ищите ?">
                    <template #content="{ prevCallback, nextCallback }">
                        <div class="flex flex-col gap-2 mx-auto">
                            <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
                            <div class="flex flex-wrap justify-content-center container py-10 gap-3">
                                <PrimeToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
                                <PrimeToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
                                <PrimeToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
                                <PrimeToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
                                <PrimeToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
                                <PrimeToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
                                <PrimeToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
                                <PrimeToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
                                <PrimeToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
                                <PrimeToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
                            </div>
                        </div>

                        <div class="flex gap-5 pt-4 w-full justify-center">
                            <PrimeButton
                                label="Предыдущий вопрос"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                @click="prevCallback"
                            />

                            <PrimeButton
                                label="Следующий вопрос"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                @click="nextCallback"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>

                <PrimeStepperPanel header="Header III">
                    <template #content="{ prevCallback }">
                        <div class="flex flex-column h-12rem">
                            <div
                                class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
                            >
                                Content III
                            </div>
                        </div>

                        <div class="flex gap-5 pt-4 justify-content-start">
                            <PrimeButton
                                label="Предыдущий вопрос"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                @click="prevCallback"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>
            </PrimeStepper>
        </div>

        <div></div>

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
                    <!-- Qualities -->
                    <h3 class="text-xl tracking-wider">Качества</h3>
                    <div class="flex justify-content-center text-slate-300">
                        <TemplatePortfolioMeter :items="qualitiesPayload" :visible="sidebarVisible" />
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <!-- Competencies -->
                    <h3 class="text-xl tracking-wider">Компетенции</h3>
                    <div class="flex justify-content-center text-slate-300">
                        <TemplatePortfolioMeter :items="competenciesPayload" :visible="sidebarVisible" />
                    </div>
                </div>

                <div class="flex flex-col gap-5 min-w-52">
                    <!-- Skills -->
                    <h3 class="text-xl tracking-wider">Навыки</h3>
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

const [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10] = useRange(10).map(() => ref(false))

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

<style scoped>
.p-stepper {
    flex-basis: 100%;
}
</style>

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
