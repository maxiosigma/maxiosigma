<template>
    <PrimeSidebar :visible="visible" position="right">
        <template #container>
            <div class="flex flex-col h-full">
                <div class="p-sidebar-header">
                    <div class="p-sidebar-header-content">About</div>

                    <Icon
                        class="text-self-7 mb-1 border-2 border-self-3 border-dashed rounded-full cursor-pointer transition-colors duration-200 hover:text-self-3"
                        size="28px"
                        name="material-symbols:cancel-rounded"
                        @click="emit('close')"
                    />
                </div>

                <div
                    class="flex gap-20 px-5 overflow-auto scrollbar-thin scrollbar-corner-self-1 scrollbar-track-self-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-self-3"
                >
                    <div
                        class="flex flex-col gap-5 pointer-events-none"
                        :class="[name === 'Навыки' ? ' min-w-52' : '']"
                        v-for="({ name, items }, ti) in [
                            { name: 'Качества', items: qualities },
                            { name: 'Компетенции', items: competencies },
                            { name: 'Навыки', items: skills }
                        ]"
                        :key="ti"
                    >
                        <h3 class="text-xl tracking-wider">{{ name }}</h3>
                        <TemplatePortfolioMeter class="text-slate-300" :items="items" :visible="visible" />
                    </div>
                </div>

                <div class="flex items-center justify-center gap-5 px-5 pt-1 pb-3">
                    <Icon class="text-self-4" size="28px" name="ic:sharp-format-quote" />

                    <div class="border-l-2 border-self-4 pl-2 opacity-50">
                        Если и создавать code, то только с душой ...
                    </div>
                </div>
            </div>
        </template>
    </PrimeSidebar>
</template>

<script setup>
const emit = defineEmits(['close'])

const prop = defineProps({
    qualities: { type: Object, default: [] },
    competencies: { type: Object, default: [] },
    skills: { type: Object, default: [] },
    visible: { type: Boolean, default: false }
})
</script>

<style lang="scss">
body .p-drawer-right .p-drawer,
body .p-sidebar-right .p-sidebar {
    @apply w-auto lg:(max-w-[90%]) max-w-full #{!important};
}

.p-sidebar-header {
    @apply flex justify-end gap-3 uppercase tracking-[0.3rem];
}

.p-sidebar-header-content {
    @apply border-b-2 border-b-self-3 rounded-br-full border-b-dashed pl-1.5 text-center;
}
</style>
