<template>
    <LayoutPage>
        <div class="container py-20 gap-20 w-full flex flex-col justify-content-center">
            <PrimeAccordion v-model:activeIndex="accordionVisible">
                <PrimeAccordionTab header="Желаете увидеть больше ?">
                    <PrimeStepper class="box-animate" v-model:activeStep="stepperIndex" linear>
                        <PrimeStepperPanel header="Кем вы являетесь ?">
                            <template #content="{ nextCallback }">
                                <PrimeSelectButton
                                    class="flex flex-wrap container justify-center mx-auto py-10"
                                    v-model="h1value"
                                    :options="h1selections"
                                />

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

                        <PrimeStepperPanel header="Какие навыки вам нужны ?">
                            <template #content="{ prevCallback, nextCallback }">
                                <div class="flex flex-col gap-2 mx-auto">
                                    <div class="flex flex-wrap container py-10 justify-center gap-3">
                                        <PrimeToggleButton
                                            v-for="({ title }, si) in skillsPayload"
                                            v-model="h2models[title]"
                                            :disabled="h2modelsDisabled"
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
                                <PrimeSelectButton
                                    class="flex flex-wrap container justify-center mx-auto py-10"
                                    v-model="h2value"
                                    :options="h2selections"
                                    multiple
                                />

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

            <div class="relative">
                <div
                    class="relative min-h-64 min-w-full border-4 border-skyblue/75 rounded-lg drop-shadow-[0_0_15px_0_rgba(0,0,0,0.3)] shadow-[0_0_15px_0_rgba(0,0,0,0.3)] shadow-skyblue"
                >
                    <div class="absolute min-h-full min-w-full heropattern-circuitboard-skyblue opacity-5"></div>
                </div>
            </div>
        </div>

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
                        <TemplatePortfolioMeter
                            :items="skillsPayload.filter((it) => it?.only !== 'select')"
                            :visible="sidebarVisible"
                        />
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

const [h1value, h1selections, h2value, h2selections] = [
    ref('Фрилансер'),
    ref(['Частный предприниматель', 'Фрилансер', 'Представитель организации']),
    ref('Заказ на фрилансе'),
    ref([
        'Личный проект',
        'Заказ на фрилансе',
        'Долгосрочный личный проект',
        'Долгосрочный проект компании & студии',
        'Работу в найме на удаленной основе'
    ])
]

// LocalStorage Частный предприниматель

const [storageSidebarVisible, storageAccordionVisible, storageStepperIndex] = [
    useLocalStorage('sidebar-visible'),
    useLocalStorage('accordion-visible'),
    useLocalStorage('stepper-index-visible')
]

const stepperIndex = ref(0)

watch(
    () => stepperIndex.value,
    () => {
        storageStepperIndex.value = stepperIndex.value
    }
)

const h2models = ref({})
const h2modelsDisabled = ref(false)

watch(
    () => h2models.value,
    () => {
        //.filter((it) => it === true).length
        //console.log(Object.values(h2models.value))
        console.log(h2models.value)
    }
)

const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

watch(
    () => sidebarVisible.value,
    () => {
        storageSidebarVisible.value = sidebarVisible.value
    }
)

//const storageAccordionVisible = useLocalStorage('accordion-visible')
const accordionVisible = ref()

watch(
    () => accordionVisible.value,
    () => {
        storageAccordionVisible.value = accordionVisible.value ?? 1
    }
)

onMounted(() => {
    accordionVisible.value = Number(storageAccordionVisible.value ?? 0)
    stepperIndex.value = Number(storageStepperIndex.value ?? 0)
    h2models.value = skillsPayload.value.reduce((s, { title }) => (s = { ...s, [title]: false }) && s, {})
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

.p-stepper-content {
    @apply transition-all duration-300;
}

.box-animate {
    border: 1px solid transparent;
    border-radius: 1px;
    position: relative;
    z-index: 0;
}

.box-animate:hover:after,
.box-animate:hover:before {
    opacity: 1;
}

.box-animate:before {
    animation: clippath 15s linear infinite;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1px;
    bottom: -2px;
    content: '';
    left: -2px;
    opacity: 0;
    position: absolute;
    right: -2px;
    top: -2px;
    transition: all 3.5s;
    z-index: -1;
}

.box-animate:after {
    animation: clippath 1.5s linear -0.5s infinite;
}

@keyframes clippath {
    0%,
    to {
        -webkit-clip-path: inset(0 0 98% 0);
        clip-path: inset(0 0 98% 0);
    }

    25% {
        -webkit-clip-path: inset(0 98% 0 0);
        clip-path: inset(0 98% 0 0);
    }

    50% {
        -webkit-clip-path: inset(98% 0 0 0);
        clip-path: inset(98% 0 0 0);
    }

    75% {
        -webkit-clip-path: inset(0 0 0 98%);
        clip-path: inset(0 0 0 98%);
    }
}
</style>
