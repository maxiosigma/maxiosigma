<template>
    <LayoutPage>
        <PrimeAccordion
            :value="ACCORDION_VISIBLE"
            @update:value="(value) => (STORAGE_ACCORDION_VISIBLE = value)"
        >
            <PrimeAccordionPanel value="0">
                <PrimeAccordionHeader>
                    Желаете увидеть больше ?
                </PrimeAccordionHeader>

                <PrimeAccordionContent>
                    <PrimeStepper value="1">
                        <PrimeStepItem value="1">
                            <PrimeStep>Кем вы являетесь ?</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col h-48">
                                    <div
                                        class="border-2 border-dashed border-surface-200/25 dark:border-surface-700/25 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                    >
                                        <PrimeSelectButton
                                            class="flex flex-wrap container justify-center mx-auto py-10"
                                            :modelValue="STORAGE_H1"
                                            :options="H1_SELECTIONS"
                                        />
                                    </div>
                                </div>
                                <div class="py-6">
                                    <PrimeButton
                                        label="Next"
                                        @click="activateCallback('2')"
                                    />
                                </div>
                            </PrimeStepPanel>
                        </PrimeStepItem>
                        <PrimeStepItem value="2">
                            <PrimeStep>Header II</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col h-48">
                                    <div
                                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                    >
                                        Content II
                                    </div>
                                </div>
                                <div class="flex py-6 gap-2">
                                    <PrimeButton
                                        label="Back"
                                        severity="secondary"
                                        @click="activateCallback('1')"
                                    />
                                    <PrimeButton
                                        label="Next"
                                        @click="activateCallback('3')"
                                    />
                                </div>
                            </PrimeStepPanel>
                        </PrimeStepItem>
                        <PrimeStepItem value="3">
                            <PrimeStep>Header III</PrimeStep>
                            <PrimeStepPanel v-slot="{ activateCallback }">
                                <div class="flex flex-col h-48">
                                    <div
                                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                    >
                                        Content III
                                    </div>
                                </div>
                                <div class="py-6">
                                    <PrimeButton
                                        label="Back"
                                        severity="secondary"
                                        @click="activateCallback('2')"
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

const [H1, STORAGE_H1] = [ref(), useLocalStorage('portfolio-h1-value')]
const [H2, STORAGE_H2] = [ref(), useLocalStorage('portfolio-h2-value')]
const [H3, STORAGE_H3] = [ref(), useLocalStorage('portfolio-h3-value')]

const h2modelsDisabled = ref(false)
const h2change = () => {
    //console.log({ ...h2selections.value })
}

const stepperIndex = ref(0)
const storageStepperIndex = useSaveStorageValue(
    stepperIndex,
    'stepper-index-visible'
)

const [ACCORDION_VISIBLE, STORAGE_ACCORDION_VISIBLE] = [
    ref(),
    useLocalStorage('portfolio-accordion-visible')
]

onMounted(() => {
    ACCORDION_VISIBLE.value = STORAGE_ACCORDION_VISIBLE.value ?? '-1'
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
