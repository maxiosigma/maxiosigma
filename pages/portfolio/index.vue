<template>
    <LayoutPage
        class="portfolio"
        :navItems="[
            {
                title: 'Превью',
                icon: 'streamline:interface-arrows-horizontal-up-down-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big',
                slug: ''
            },
            ...worksCategories
        ]"
        @clickNav="(e) => (category = e)"
    >
        <div class="transition-all flex-grow-1 duration-1000 py-8 px-4">
            <TemplatePortfolioTopProjects :category="category" />
            <!--<TemplatePortfolioStepper />-->
        </div>

        <div class="flex-center absolute left-0 top-0 z-10">
            <PrimeButton
                class="!px-2 !py-1 !rounded-l-none !rounded-t-none !bg-self-3/85 !b-0 !b-b-4 !b-r-4 !b-self-2 hover:(!bg-self-6 shadow-sm-circle)"
                severity="success"
                @click="sidebarVisible = true"
                v-tooltip="'About'"
            >
                <Icon name="solar:map-arrow-right-bold" size="15px" />
            </PrimeButton>
        </div>

        <TemplatePortfolioSidebar
            :visible="sidebarVisible"
            @close="sidebarVisible = !sidebarVisible"
        />
    </LayoutPage>
</template>

<script setup>
//https://blocks.primevue.org/application/sidebarlayout

const title = ref('Портфолио')
const storageSidebarVisible = useLocalStorage('sidebar-visible')
const sidebarVisible = ref(useLocalStorageBoolean(storageSidebarVisible.value))
const worksCategories = usePayloadData('portfolio_works_categories')
const category = ref(null)

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
    --at-apply: flex-row;
    flex-direction: row !important;
}

.p-stepper {
    flex-basis: 100%;
}

.p-button-success {
    border: 0;
}

.p-stepper-content {
    --at-apply: transition-all duration-300;
}

.finger {
    --at-apply: flex flex-col bg-self-1 justify-center px-8 py-4 w-auto border-4 border-skyblue/75
        rounded-r-full rounded-l-lg shadow-[0_0_10px_0_rgba(0, 0, 0, 0.3)] shadow-skyblue heropattern-circuitboard-skyblue/10
        overflow-hidden;

    &-title {
        --at-apply: text-2xl text-nowrap overflow-hidden text-self-3;
    }

    &-description {
        --at-apply: text-sm text-self-7;
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
    --at-apply: b-0 b-none filter;
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
