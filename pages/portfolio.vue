<template>
    <LayoutPage>
        <div class="card container py-20 w-full flex flex-col justify-content-center">
            <PrimeAccordion v-model:activeIndex="accordionVisible">
                <PrimeAccordionTab header="Желаю увидеть больше">
                    <PrimeStepper class="box" linear>
                        <PrimeStepperPanel header="Кем вы являетесь ?">
                            <template #content="{ nextCallback }">
                                <div class="container flex py-20 justify-content-center">
                                    <PrimeSelectButton class="mx-auto" v-model="h1value" :options="h1selections" />
                                </div>

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
                                    <div class="flex flex-wrap container py-20 justify-center gap-3">
                                        <PrimeToggleButton
                                            v-for="({ title }, si) in skillsPayload"
                                            v-model="h2models[title]"
                                            :onLabel="title"
                                            :offLabel="title"
                                            :key="si"
                                        />
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

                        <PrimeStepperPanel header="Что вы предлагаете ?">
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

                                    <PrimeButton
                                        label="Найти подходящие работы"
                                        severity="secondary"
                                        icon="pi pi-arrow-left"
                                    />
                                </div>
                            </template>
                        </PrimeStepperPanel>
                    </PrimeStepper>
                </PrimeAccordionTab>
            </PrimeAccordion>
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

const skillsPayload = await usePayloadData({ name: 'portfolio-skills', path: 'skills' })
const qualitiesPayload = await usePayloadData({
    name: 'portfolio-qualities',
    path: 'qualities'
})

const competenciesPayload = await usePayloadData({
    name: 'portfolio-competencies',
    path: 'competencies'
})

const worksPayload = await usePayloadData({
    name: 'portfolio-works',
    path: 'works/',
    type: 'multi',
    callback: (item) => item,
    optionsWhere: { top: true }
})

const [h1value, h1selections] = [
    ref('Фрилансер'),
    ref(['Частный предприниматель', 'Фрилансер', 'Представитель организации'])
]

const h2models = ref(skillsPayload.value.reduce((s, { title }) => (s = { ...s, [title]: false }) && s, {}))

const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

watch(
    () => sidebarVisible.value,
    () => (storageSidebarVisible.value = sidebarVisible.value)
)

const storageAccordionVisible = useLocalStorage('accordion-visible')
const accordionVisible = ref(storageAccordionVisible.value === '0' ? 0 : null)

watch(
    () => accordionVisible.value,
    () => (storageAccordionVisible.value = accordionVisible.value)
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

.box:before {
    animation: clippath 3s linear infinite;
    border: 2px solid var(--home-box-ring-color);
    border-radius: 10px;
    bottom: -2px;
    content: '';
    left: -2px;
    opacity: 0;
    position: absolute;
    right: -2px;
    top: -2px;
    transition: all 0.5s;
    z-index: -1;
}

.box:after {
    animation: clippath 3s linear -1.5s infinite;
}
</style>
