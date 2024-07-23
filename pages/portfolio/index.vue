<template>
    <LayoutPage class="portfolio">
        <div class="fixed bg-self-1 h-full w-25vw overflow-hidden max-h-screen pr-4">
            <div class="flex-center h-25vh py-8">
                <Icon name="material-symbols:logo-dev" class="text-5xl"></Icon>
            </div>

            <!-- page-scroll -->
            <PrimeScrollPanel
                class="max-h-60vh p-0.5 -mr-4 py-4 b-t-8 b-b-8 b-self-2"
                :dt="{
                    bar: {
                        background: '{primary.color}'
                    }
                }"
            >
                <div class="flex flex-center flex-wrap gap-4.5">
                    <div
                        class="flex-center flex-col min-w-[40%] b-2 p-1 b-self-2 rounded-lg"
                        v-for="it in [
                            { name: '1', link: '', icon: '' },
                            { name: '2', link: '', icon: '' },
                            { name: '3', link: '', icon: '' },
                            { name: '4', link: '', icon: '' },
                            { name: '5', link: '', icon: '' },
                            { name: '6', link: '', icon: '' },
                            { name: '7', link: '', icon: '' },
                            { name: '8', link: '', icon: '' },
                            { name: '9', link: '', icon: '' },
                            { name: '10', link: '', icon: '' },
                            { name: '11', link: '', icon: '' },
                            { name: '12', link: '', icon: '' },
                            { name: '13', link: '', icon: '' },
                            { name: '14', link: '', icon: '' },
                            { name: '15', link: '', icon: '' },
                            { name: '16', link: '', icon: '' }
                        ]"
                    >
                        <Icon
                            :name="it?.icon || 'ph:github-logo-fill'"
                            class="text-6xl opacity-25"
                        ></Icon>
                        <div class="text-self-7">{{ it.name }}</div>
                    </div>
                </div>
            </PrimeScrollPanel>

            <div class="flex-center flex-wrap p-4">
                <div
                    v-for="it in [
                        { name: '1', link: '', icon: '' },
                        { name: '2', link: '', icon: '' },
                        { name: '3', link: '', icon: '' },
                        { name: '4', link: '', icon: '' },
                        { name: '5', link: '', icon: '' },
                        { name: '6', link: '', icon: '' },
                        { name: '7', link: '', icon: '' },
                        { name: '8', link: '', icon: '' },
                        { name: '9', link: '', icon: '' },
                        { name: '10', link: '', icon: '' },
                        { name: '11', link: '', icon: '' },
                        { name: '12', link: '', icon: '' },
                        { name: '13', link: '', icon: '' },
                        { name: '14', link: '', icon: '' },
                        { name: '15', link: '', icon: '' },
                        { name: '16', link: '', icon: '' }
                    ]"
                >
                    <Icon
                        :name="it?.icon || 'ph:github-logo-fill'"
                        class="text-xl opacity-25"
                    ></Icon>
                </div>
            </div>
        </div>

        <div
            class="container transition-all duration-1000 pt-20 gap-20 w-full h-full flex flex-col justify-between"
        >
            <!--<TemplatePortfolioTopProjects />-->
            <!--<TemplatePortfolioStepper />-->
        </div>

        <!--<div class="flex flex-col fixed right-0 top-auto h-full">
        <PrimeButton
            class="my-auto p-1.5 h-full rounded-none bg-self-4/50"
            severity="success"
            @click="sidebarVisible = true"
            v-tooltip="'About'"
        >
            <Icon name="solar:map-arrow-left-bold" size="25px" />
        </PrimeButton>
    </div>

    <TemplatePortfolioSidebar :visible="sidebarVisible" @close="sidebarVisible = !sidebarVisible" />-->
    </LayoutPage>
</template>

<script setup>
//https://blocks.primevue.org/application/sidebarlayout

const title = ref('Портфолио')
const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(useLocalStorageBoolean(storageSidebarVisible.value))

watch(
    () => sidebarVisible.value,
    () => {
        storageSidebarVisible.value = sidebarVisible.value
    }
)

useHead({
    title
})
</script>

<style lang="scss">
.portfolio {
    @apply flex-row;
}
.p-stepper {
    flex-basis: 100%;
}

.p-button-success {
    border: 0;
}

.p-stepper-content {
    @apply transition-all duration-300;
}

.finger {
    @apply flex flex-col bg-self-1 justify-center px-8 py-4 w-auto border-4 border-skyblue/75  rounded-r-full rounded-l-lg shadow-[0_0_10px_0_rgba(0,0,0,0.3)] shadow-skyblue heropattern-circuitboard-skyblue/10 overflow-hidden;

    &-title {
        @apply text-2xl text-nowrap overflow-hidden text-self-3;
    }

    &-description {
        @apply text-sm text-self-7;
    }
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

.p-button-success:not(:disabled):hover {
    @apply b-0 b-none filter;
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

.p-scrollpanel-bar.p-scrollpanel-bar-y {
    @apply bg-self-7;
}
</style>
