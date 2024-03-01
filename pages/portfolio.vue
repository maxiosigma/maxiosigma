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

        <PrimeSidebar v-model:visible="sidebarVisible" header="Skills" position="right">
            <div class="flex py-8 pr-8 justify-content-center text-slate-300">
                <TemplatePortfolioMeter :visible="sidebarVisible" />
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
//const namePayload = `${locale}-portfolio`
const worksTagsPayloadName = `${locale}-portfolio-tags`

if (process.server) {
    useNuxtApp().payload.data[worksTagsPayloadName] = await queryContent(`/${locale.value}/work_tags`)
        .findOne()
        .then((item) => item?.body ?? [])
        .catch(() => [])
}

const worksTagsPayload = useNuxtData(worksTagsPayloadName)?.data

//console.log(payload.value.map(({ _id }) => _id.split(':').splice(-1)[0].replace('.yaml', '')))
console.log(useAllVariantsArrayItems(worksTagsPayload.value.map(({ slug }) => slug)))

const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(storageSidebarVisible.value === 'true' ?? true)

watch(
    () => sidebarVisible.value,
    () => (storageSidebarVisible.value = sidebarVisible.value)
)

onMounted(() => {
    setTimeout(() => {
        if (sidebarVisible.value === true) {
            sidebarVisible.value = false
        }
    }, 25000)
})

useHead({
    title: 'Портфолио'
})
</script>
