<template>
    <LayoutPage>
        <PrimeAccordion :value="ACCORDION_VISIBLE" @update:value="(value) => (STORAGE_ACCORDION_VISIBLE = value)">
            <PrimeAccordionPanel value="0">
                <PrimeAccordionHeader> Желаете увидеть больше ? </PrimeAccordionHeader>

                <PrimeAccordionContent>
                    <PrimeStepper value="1">
                        <PrimeStepItem value="1">
                            <PrimeStep>Кем вы являетесь ?</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col py-4">
                                    <div class="flex-auto flex-center">
                                        <PrimeSelectButton
                                            class="flex flex-wrap justify-center mx-auto border-1 p-1 border-dashed border-self-5"
                                            v-model="H1"
                                            :options="H1_SELECTIONS"
                                            @change="({ value }) => (STORAGE_H1 = value)"
                                        />
                                    </div>
                                </div>

                                <div class="flex pt-4 w-full justify-start">
                                    <TemplatePortfolioButtonQuestion :callback="() => activateCallback('2')" />
                                </div>
                            </PrimeStepPanel>
                        </PrimeStepItem>
                        <PrimeStepItem value="2">
                            <PrimeStep>Какие навыки вам нужны ?</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col py-4 gap-2 mx-auto">
                                    <PrimeSelectButton
                                        class="flex flex-wrap gap-3 container justify-center mx-auto py-10"
                                        v-model="H2"
                                        :options="H2_SELECTIONS"
                                        @change="({ value }) => (STORAGE_H2 = value)"
                                        multiple
                                    />
                                </div>

                                <div class="flex gap-5 pt-4 w-full justify-start">
                                    <TemplatePortfolioButtonQuestion
                                        label="Предыдущий вопрос"
                                        position="left"
                                        :callback="() => activateCallback('1')"
                                    />

                                    <TemplatePortfolioButtonQuestion :callback="() => activateCallback('3')" />
                                </div>
                            </PrimeStepPanel>
                        </PrimeStepItem>
                        <PrimeStepItem value="3">
                            <PrimeStep>Что вы предлагаете ?</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col py-4 gap-2 mx-auto">
                                    <PrimeSelectButton
                                        class="flex flex-wrap gap-3 container justify-center mx-auto py-10"
                                        v-model="H3"
                                        :options="H3_SELECTIONS"
                                        @change="({ value }) => (STORAGE_H3 = value)"
                                        multiple
                                    />
                                </div>

                                <div class="flex gap-5 pt-4 w-full justify-start">
                                    <TemplatePortfolioButtonQuestion
                                        label="Предыдущий вопрос"
                                        position="left"
                                        :callback="() => activateCallback('2')"
                                    />

                                    <TemplatePortfolioButtonQuestion
                                        label="Найти подходящие работы"
                                        icon="material-symbols-light:search-insights-rounded"
                                        size="24px"
                                        :callback="() => console.log('aaaa')"
                                    />
                                </div>
                            </PrimeStepPanel>
                        </PrimeStepItem>
                    </PrimeStepper>
                </PrimeAccordionContent>
            </PrimeAccordionPanel>
        </PrimeAccordion>
    </LayoutPage>
</template>

<script setup>
const prop = defineProps({
    skills: { type: Object, default: [] }
})

const [H1_SELECTIONS, H2_SELECTIONS, H3_SELECTIONS] = [
    ref(['Частный предприниматель', 'Фрилансер', 'Представитель организации']),
    ref(prop?.skills?.map(({ title }) => title) ?? []),
    ref([
        'Личный проект',
        'Заказ на фрилансе',
        'Долгосрочный личный проект',
        'Долгосрочный проект компании & студии',
        'Работу в найме на удаленной основе'
    ])
]

const [H1, STORAGE_H1] = [ref(), useLocalStorage('portfolio-h1-value')]
const [H2, STORAGE_H2] = [ref(), useLocalStorage('portfolio-h2-value')]
const [H3, STORAGE_H3] = [ref(), useLocalStorage('portfolio-h3-value')]
const [INX, STORAGE_INX] = [ref(), useLocalStorage('portfolio-inx-value')]

const stepperIndex = ref(0)
const storageStepperIndex = useSaveStorageValue(stepperIndex, 'stepper-index-visible')

const [ACCORDION_VISIBLE, STORAGE_ACCORDION_VISIBLE] = [ref(), useLocalStorage('portfolio-accordion-visible')]

onMounted(() => {
    ACCORDION_VISIBLE.value = STORAGE_ACCORDION_VISIBLE.value ?? '-1'
    H1.value ??= STORAGE_H1.value
    H2.value ??= STORAGE_H2.value?.split(',')
    H3.value ??= STORAGE_H3.value?.split(',')
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

<style lang="scss">
button.p-togglebutton.p-togglebutton,
button.p-togglebutton.p-togglebutton::before {
    @apply bg-transparent #{!important};
}

button.p-togglebutton.p-togglebutton::before {
    @apply border-1 border-dotted border-self-5/50 #{!important};
}

button.p-togglebutton.p-togglebutton-checked::before {
    @apply bg-self-5 border-1 border-dotted border-self-1  #{!important};
}
</style>
