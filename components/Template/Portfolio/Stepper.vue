<template>
    <PrimeAccordion :value="STORAGE_ACCORDION_VISIBLE">
        <PrimeAccordionPanel value="0">
            <PrimeAccordionHeader
                >Желаете увидеть больше ?</PrimeAccordionHeader
            >
            <PrimeAccordionContent> aaaaaaaaaa </PrimeAccordionContent>
        </PrimeAccordionPanel>
    </PrimeAccordion>

    <!--<PrimeAccordion v-model:activeIndex="accordionVisible">
        <PrimeAccordionTab header="Желаете увидеть больше ?">
            <PrimeStepper
                class="box-animate"
                v-model:activeStep="stepperIndex"
                linear
            >
                <PrimeStepperPanel header="Кем вы являетесь ?">
                    <template #content="{ nextCallback }">
                        <PrimeSelectButton
                            class="flex flex-wrap container justify-center mx-auto py-10"
                            :modelValue="STORAGE_H1"
                            :options="H1_SELECTIONS"
                        />

                        {{ STORAGE_H1 }}
                        {{ H1_SELECTIONS }}

                        <div class="flex pt-4 w-full justify-center">
                            <TemplatePortfolioButtonQuestion
                                :callback="nextCallback"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>

                <PrimeStepperPanel header="Какие навыки вам нужны ?">
                    <template #content="{ prevCallback, nextCallback }">
                        <div class="flex flex-col gap-2 mx-auto">
                            <div
                                class="flex flex-wrap container py-10 justify-center gap-3"
                            >
                                <PrimeToggleButton
                                    v-for="({ title }, si) in skills"
                                    v-model="STORAGE_H2[title]"
                                    :disabled="h2modelsDisabled"
                                    :onLabel="title"
                                    :offLabel="title"
                                    :key="si"
                                    @change="h2change"
                                />
                            </div>
                        </div>

                        <div class="flex gap-5 pt-4 w-full justify-center">
                            <TemplatePortfolioButtonQuestion
                                label="Предыдущий вопрос"
                                position="left"
                                :callback="prevCallback"
                            />

                            <TemplatePortfolioButtonQuestion
                                :callback="nextCallback"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>

                <PrimeStepperPanel header="Что вы предлагаете ?">
                    <template #content="{ prevCallback }">
                        <PrimeSelectButton
                            class="flex flex-wrap gap-3 container justify-center mx-auto py-10"
                            :modelValue="STORAGE_H3"
                            :options="H3_SELECTIONS"
                            multiple
                        />

                        <div class="flex gap-5 pt-4 justify-center">
                            <TemplatePortfolioButtonQuestion
                                label="Предыдущий вопрос"
                                position="left"
                                :callback="prevCallback"
                            />

                            <TemplatePortfolioButtonQuestion
                                label="Найти подходящие работы"
                                icon="material-symbols-light:search-insights-rounded"
                                size="24px"
                                :callback="() => console.log('aaaa')"
                            />
                        </div>
                    </template>
                </PrimeStepperPanel>
            </PrimeStepper>
        </PrimeAccordionTab>
    </PrimeAccordion>-->
</template>

<script setup>
const prop = defineProps({
    skills: { type: Object, default: [] }
})

const [H1_SELECTIONS, H3_SELECTIONS] = [
    ref(['Частный предприниматель', 'Фрилансер', 'Представитель организации']),
    ref([
        'Личный проект',
        'Заказ на фрилансе',
        'Долгосрочный личный проект',
        'Долгосрочный проект компании & студии',
        'Работу в найме на удаленной основе'
    ])
]

const STORAGE_H1 = useLocalStorage('portfolio-h1-value')

const STORAGE_H2 = useLocalStorage('portfolio-h2-value')

const STORAGE_H3 = useLocalStorage('portfolio-h3-value')

const h2modelsDisabled = ref(false)
const h2change = () => {
    //console.log({ ...h2selections.value })
}

const stepperIndex = ref(0)
const storageStepperIndex = useSaveStorageValue(
    stepperIndex,
    'stepper-index-visible'
)

const STORAGE_ACCORDION_VISIBLE = useLocalStorage(
    'accordion-visible',
    Number(useLocalStorage('accordion-visible').value ?? 0)
)

const accordionVisible = ref()

onMounted(() => {
    //accordionVisible.value = Number(storageAccordionVisible.value ?? 0)
    stepperIndex.value = Number(storageStepperIndex.value ?? 0)

    console.log(STORAGE_H1.value, H1_SELECTIONS.value[1])

    STORAGE_H1 ??= H1_SELECTIONS.value[1]
    STORAGE_H3 ??= H3_SELECTIONS.value[1]
})

//watch(STORAGE_H1, (value) => console.log((STORAGE_H1.value = value)))
//watch(accordionVisible, () => {
//    storageAccordionVisible.value = accordionVisible.value ?? 1
//})
//useLocalStorage('portfolio-h2-value') ??
//prop.skills.reduce(
//    (s, { title }) => (s = { ...s, [title]: false }) && s,
//    {}
//)
</script>

<style lang="scss"></style>
