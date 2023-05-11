<template>
    <teleport to="body">
        <ClientOnly>
            <div
                :class="[
                    show ? 'fixed flex-center bg-self-1 bg-opacity-95 inset-0 w-full h-full z-99999' : '!hidden h-0 w-0 overflow-hidden',
                ]"
            >
                <div
                    class="flex-center flex-col flex-shrink rounded-md elevation-10 m-auto inset-0 bg-self-2 w-4/5 px-4 py-10 max-w-sm h-auto min-h-40 max-h-none z-99999 text-white pointer-events-none"
                >
                    <slot></slot>
                </div>
            </div>
        </ClientOnly>
    </teleport>
</template>

<script setup>
//defineProps({
//    show: {
//        required: true,
//        default: false,
//        type: Boolean,
//    },
//})
</script>
