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

                <PrimeAccordionContent> aaaaaaaaaa </PrimeAccordionContent>
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
