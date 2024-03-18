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

    {{ counter }}

    <Toast @life-end="lifeEnd = true">
        <template #message="{ message }">
            <div class="flex items-center min-h-full inset-0">
                <div
                    class="w-2 bg-self-3 rounded-l-lg"
                    :style="`height: ${message.life ? (counter / (message.life / step)) * 100 : 100}%`"
                ></div>

                <!--{{ (cn[message.id] = useInterval(step, { controls: true })) }}-->

                <div class="h-full w-1 bg-self-1"></div>
            </div>

            <div class="min-h-20 px-5">
                {{ lifeEnd }}
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
const lifeEnd = ref(false)
const { counter, pause } = useInterval(step, { controls: true })

watch(
    () => counter.value,
    () => (counter.value >= 20000 / step ? pause() : null)
)
</script>

<style lang="scss">
.p-toast {
    @apply border-0 rounded-lg overflow-hidden;

    &-message {
        @apply bg-self-2 border-0 mx-0 my-5 backdrop-blur-none;

        &-content {
            @apply border-0 bg-transparent items-stretch p-0;
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
