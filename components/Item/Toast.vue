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
                    class="w-2 rounded-l-lg"
                    :class="[message.life ? 'bg-self-3' : '']"
                    :style="`height: ${message.life ? (counter / (message.life / step)) * 100 : 100}%`"
                ></div>

                <div class="h-full w-1 bg-self-1"></div>
            </div>

            <div class="flex flex-col py-3 pl-5 mr-auto">
                <div class="font-bold text-self-4">{{ message.summary }}</div>
                <div class="text-self-5">{{ message.detail }}</div>
            </div>
        </template>
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
    @apply flex flex-col gap-10 w-auto min-w-[15vw] max-w-[35vw] border-0 rounded-lg overflow-hidden;

    &-message {
        //heropattern-dominos-inherit/10 bg-[length:10px_10px]
        @apply flex flex-col bg-self-2 border-0 mx-0 backdrop-blur-none heropattern-diagonallines-current/30 bg-center;

        &-content {
            @apply border-0 bg-transparent items-stretch justify-between p-0;
        }

        &-text {
            @apply p-4;
        }
    }

    &-icon-close {
        @apply mt-2 mr-4;
    }
}
</style>
