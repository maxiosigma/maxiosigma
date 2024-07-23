<template>
    <div
        class="container transition-all duration-1000 pt-20 gap-20 w-full h-full flex flex-col justify-between"
    >
        <TemplatePortfolioTopProjects />
        <TemplatePortfolioStepper />
    </div>

    <div class="flex flex-col fixed right-0 top-auto h-full">
        <PrimeButton
            class="my-auto p-1.5 !rounded-r-none bg-self-4"
            severity="success"
            @click="sidebarVisible = true"
            v-tooltip="'About'"
        >
            <Icon name="solar:map-arrow-left-bold" size="25px" />
        </PrimeButton>
    </div>

    <TemplatePortfolioSidebar :visible="sidebarVisible" @close="sidebarVisible = !sidebarVisible" />
</template>

<script setup>
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
    title: 'Портфолио'
})
</script>

<style lang="scss">
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
