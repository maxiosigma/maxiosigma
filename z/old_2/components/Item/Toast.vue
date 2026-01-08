<template>
    <Toast>
        <template #message="{ message }">
            <div class="flex items-center justify-between">
                <!-- rounded-l-lg -->
                <!--:style="`height: ${message.life ? (counter / (message.life / step)) * 100 : 100}%`"-->
                <div
                    class="w-2"
                    :class="[message.life ? 'bg-self-1' : '']"
                    :style="`height: ${
                        message.life
                            ? ((message.life / step - counter) / (message.life / step)) * 100
                            : 100
                        //message.life ? (counter / (message.life / step)) * 100 : 100
                    }%`"
                ></div>

                <div class="h-full w-1 bg-self-1"></div>
            </div>

            <div class="flex flex-col py-3 pl-5 mr-auto">
                <div class="font-bold text-self-4">{{ message.summary }}</div>
                <div class="text-self-5 text-justify" style="hyphens: auto">
                    {{ message.detail }}
                </div>
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
    --at-apply: flex flex-col gap-10 w-auto min-w-[15vw] max-w-[35vw] border-0 rounded-lg
        overflow-hidden;

    &-message {
        //heropattern-dominos-inherit/10 bg-[length:10px_10px]
        --at-apply: flex flex-col bg-self-2 border-0 mx-0 backdrop-blur-none
            heropattern-diagonallines-current/50 bg-center;

        &-content {
            --at-apply: border-0 bg-transparent items-stretch justify-between p-0;
        }
    }

    &-icon-close {
        --at-apply: mt-2 mr-4;
    }
}
</style>
