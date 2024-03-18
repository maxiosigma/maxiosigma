<template>
    <!--<Toast class="bg-self-2">
        <template #message="slotProps">
            <div class="flex flex-col items-center">
                <slot name="text" :data="slotProps">
                    <div class="text-center">
                        <div class="text-xl my-3">{{ slotProps }}</div>
                    </div>
                </slot>

                <slot name="buttons" :data="slotProps">
                    <div class="flex gap-2">
                        <PrimeButton severity="success" label="Yes" @click="onConfirm()"></PrimeButton>
                        <PrimeButton severity="secondary" label="No" @click="onReject()"></PrimeButton>
                    </div>
                </slot>
            </div>
        </template>
    </Toast>-->

    <Toast>
        <template #message="{ message }">
            <div class="flex items-center justify-between">
                <div
                    class="w-2 bg-self-3 rounded-l-lg"
                    :style="`height: ${message.life ? (counter / (message.life / step)) * 100 : 100}%`"
                ></div>

                <div class="h-full w-1 bg-self-1"></div>
            </div>

            <div class="flex flex-col py-3 pl-5 mr-auto">
                <div>{{ message.summary }}</div>
                <div>{{ message.detail }}</div>
            </div>
        </template>

        <!--<template #icon="{ class: classIcon }">
            <div class="flex items-center min-h-full inset-0">
                <div class="h-full w-1.5 bg-self-3"></div>
                <div class="h-full w-1 bg-self-1"></div>
                <div :class="classIcon"></div>
            </div>
        </template>-->
    </Toast>
</template>

<script setup>
const step = 50
const { counter, pause } = useInterval(step, { controls: true })

watch(
    () => counter.value,
    () => (counter.value >= 20000 / step ? pause() : null)
)
</script>

<style lang="scss">
.p-toast {
    @apply w-auto min-w-[15vw] max-w-[35vw] border-0 rounded-lg overflow-hidden;

    &-message {
        @apply flex flex-col bg-self-2 border-0 mx-0 my-5 backdrop-blur-none;

        &-content {
            @apply border-0 bg-transparent items-stretch justify-between p-0;
        }

        &-text {
            @apply bg-indigo-800 p-4;
        }
    }

    &-icon-close {
        @apply mt-2 mr-4;
    }
}
</style>
