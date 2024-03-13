<template>
    <LayoutPage>
        <div class="container pt-20 pb-20 gap-20 w-full flex flex-col justify-content-center">
            <TemplatePortfolioWorks :works="worksPayload" />

            <TemplatePortfolioStepper :skills="skillsPayload" />
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

        <TemplatePortfolioSidebar
            :qualities="qualitiesPayload"
            :competencies="competenciesPayload"
            :skills="skillsPayloadSidebar"
            :visible="sidebarVisible"
            @close="sidebarVisible = !sidebarVisible"
        />
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

// LocalStorage Частный предприниматель

const storageSidebarVisible = useLocalStorage('sidebar-visible')

//console.log(storageSidebarVisible.value, typeof storageSidebarVisible.value)

const sidebarVisible = ref(useLocalStorageBoolean(storageSidebarVisible.value))

watch(
    () => sidebarVisible.value,
    () => {
        storageSidebarVisible.value = sidebarVisible.value
    }
)

onMounted(() => {
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
