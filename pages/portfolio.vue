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
