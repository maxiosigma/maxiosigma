<template>
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
                                    v-for="({ title }, si) in skills"
                                    v-model="h2models[title]"
                                    :disabled="h2modelsDisabled"
                                    :onLabel="title"
                                    :offLabel="title"
                                    :key="si"
                                />
                            </div>
                        </div>

                        <div class="flex gap-5 pt-4 w-full justify-center">
                            <PrimeButton label="Предыдущий вопрос" severity="secondary" @click="prevCallback">
                                <template #icon>
                                    <Icon
                                        class="mr-1 transform rotate-180"
                                        size="20px"
                                        name="material-symbols-light:brightness-3-rounded"
                                    />
                                </template>
                            </PrimeButton>

                            <PrimeButton type="button" label="Следующий вопрос" iconPos="right" @click="nextCallback">
                                <template #icon>
                                    <Icon class="mr-1" size="20px" name="material-symbols-light:brightness-3-rounded" />
                                </template>
                            </PrimeButton>
                        </div>
                    </template>
                </PrimeStepperPanel>

                <PrimeStepperPanel header="Что вы предлагаете ?">
                    <template #content="{ prevCallback }">
                        <PrimeSelectButton
                            class="flex flex-wrap container justify-center mx-auto py-10"
                            v-model="h3value"
                            :options="h3selections"
                            multiple
                        />

                        <div class="flex gap-5 pt-4 justify-content-start">
                            <PrimeButton label="Предыдущий вопрос" severity="secondary" @click="prevCallback">
                                <template #icon>
                                    <Icon class="mr-1" size="20px" name="ic:sharp-arrow-back-ios-new" />
                                </template>
                            </PrimeButton>

                            <PrimeButton label="Найти подходящие работы" severity="success">
                                <template #icon>
                                    <Icon
                                        class="mr-1"
                                        size="24px"
                                        name="material-symbols-light:search-insights-rounded"
                                    />
                                </template>
                            </PrimeButton>
                        </div>
                    </template>
                </PrimeStepperPanel>
            </PrimeStepper>
        </PrimeAccordionTab>
    </PrimeAccordion>
</template>

<script setup>
const prop = defineProps({
    skills: { type: Object, default: [] }
})

const [h1value, h1selections, h3value, h3selections] = [
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

const h2models = ref({})
const h2modelsDisabled = ref(false)

watch(
    () => h2models.value,
    () => {
        //.filter((it) => it === true).length
        //console.log(Object.values(h2models.value))
        //console.log(h2models.value)
    }
)

const stepperIndex = ref(0)
const storageStepperIndex = useSaveStorageValue(stepperIndex, 'stepper-index-visible')

const storageAccordionVisible = useLocalStorage('accordion-visible')
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
    h2models.value = prop.skills.reduce((s, { title }) => (s = { ...s, [title]: false }) && s, {})
})
</script>

<style lang="scss"></style>
