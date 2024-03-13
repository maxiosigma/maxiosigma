<template>
    <LayoutPage>
        <div class="container pt-20 pb-20 gap-20 w-full flex flex-col justify-content-center">
            <!--<div>
                <section class="text-gray-400 bg-gray-900 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div
                            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
                        >
                            <div
                                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="sm:w-16 sm:h-16 w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-white text-lg title-font font-medium mb-2">Shooting Stars</h2>
                                <p class="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                                    indxgo juice poutine.
                                </p>
                                <a class="mt-3 text-indigo-400 inline-flex items-center"
                                    >Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
                        >
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-white text-lg title-font font-medium mb-2">The Catalyzer</h2>
                                <p class="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                                    indxgo juice poutine.
                                </p>
                                <a class="mt-3 text-indigo-400 inline-flex items-center"
                                    >Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div
                                class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="sm:w-16 sm:h-16 w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                            <div
                                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="sm:w-16 sm:h-16 w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-white text-lg title-font font-medium mb-2">The 400 Blows</h2>
                                <p class="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                                    indxgo juice poutine.
                                </p>
                                <a class="mt-3 text-indigo-400 inline-flex items-center"
                                    >Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button
                            class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Button
                        </button>
                    </div>
                </section>
            </div>-->

            <!--<div class="relative min-h-80 pointer-events-none">
                <div v-for="(work, wi) in worksPayload" :key="wi">
                    <div
                        class="finger"
                        :class="[
                            wi === 0
                                ? '!pl-[110px] !pr-[5%] min-w-[500px] max-w-[500px] absolute top-0 left-0 transform origin-top-left -rotate-[50deg]'
                                : 'relative z-10'
                        ]"
                    >
                        <div class="finger-title">
                            {{ work.title }}
                        </div>

                        <div class="finger-description">{{ work.description }}</div>

                        <a
                            v-if="work.link"
                            :href="work.link"
                            class="text-xs text-self-4 border-b-[0.5px] pr-1 cursor-pointer border-self-5 mr-auto hover:border-self-5 hover:text-self-5 pointer-events-auto"
                            target="_blank"
                            >Посмотреть проект</a
                        >
                    </div>

                    <div v-if="wi !== 0" class="min-h-10 bg-self-1"></div>
                </div>
            </div>-->

            <!--<div class="flex flex-col gap-5" v-for="(work, wi) in worksPayload" :key="wi">
                {{ work }}
            </div>-->

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
        </div>

        <div class="fixed flex flex-col right-0 top-auto h-full">
            <PrimeButton
                class="my-auto p-1.5 rounded-r-none"
                severity="success"
                @click="sidebarVisible = true"
                v-p-tooltip="'About'"
            >
                <Icon name="solar:map-arrow-left-bold" size="25px" />
            </PrimeButton>
        </div>

        <!-- sidebarVisible = !sidebarVisible -->
        <TemplatePortfolioSidebar
            :qualities="qualitiesPayload"
            :competencies="competenciesPayload"
            :skills="skillsPayloadSidebar"
            :visible="sidebarVisible"
            @close="sidebarVisible = !sidebarVisible"
        />

        <!--<Toast position="top-center" group="headless" @close="false">
            <div>AAAAAAAAAAAA</div>
        </Toast>-->
    </LayoutPage>
</template>

<script setup>
const works = []
const { locale } = useI18n()
const localePath = useLocalePath()
const toast = useToast()

const skillsPayload = await usePayloadData({ name: 'portfolio-skills', path: 'skills' })
const skillsPayloadSidebar = skillsPayload.value?.filter((it) => it?.only !== 'select')
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
    callback: (items) =>
        items.map((item) => {
            delete item?._path
            delete item?._dir
            delete item?._draft
            delete item?._partial
            delete item?._extension
            delete item?._source
            delete item?._type
            delete item?._file
            delete item?._locale
            delete item?.top
            delete item?.date

            return item
        }),
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

console.log(storageSidebarVisible.value, typeof storageSidebarVisible.value)

const sidebarVisible = ref(useLocalStorageBoolean(storageSidebarVisible.value))

//storageSidebarVisible.value === 'undefined' || storageSidebarVisible.value === undefined
//? true
//: storageSidebarVisible.value === 'true'

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

    //toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' })
})

useHead({
    title: 'Портфолио'
})
</script>

<style lang="scss">
.p-stepper {
    flex-basis: 100%;
}

//https://primevue.org/speeddial/
.finger {
    //border-r-4 border-t-4 border-b-4
    @apply flex flex-col bg-self-1 justify-center px-8 py-4 w-auto border-4 border-skyblue/75  rounded-r-full rounded-l-lg shadow-[0_0_10px_0_rgba(0,0,0,0.3)] shadow-skyblue heropattern-circuitboard-skyblue/10 overflow-hidden;

    &-title {
        @apply text-2xl text-nowrap overflow-hidden text-self-3;
    }

    &-description {
        @apply text-sm text-self-7;
    }
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
