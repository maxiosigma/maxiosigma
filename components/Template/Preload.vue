<template>
    <!--<Teleport to="body">
        <div
            :class="[
                loading
                    ? '!hidden'
                    : 'fixed flex-center inset-0 w-screen h-screen bg-self-1 z-99999'
            ]"
        >
            <ItemMediaImg
                :class="[
                    !icon ? 'w-auto h-auto' : 'hidden',
                    !icon && preLoading
                        ? 'animate-back-out-up'
                        : 'animate-foolishIn'
                ]"
                src="preload/index.gif"
            />

            <LottieAnimation
                :animationData="icon"
                :class="[
                    icon ? 'w-full h-full' : 'hidden',
                    icon && preLoading
                        ? 'animate-back-out-up'
                        : 'animate-foolishIn'
                ]"
                autoplay
                loop
            />
        </div>
    </Teleport>-->
</template>

<script lang="ts" setup>
const loading = ref(false)
const preLoading = ref(false)
const icon = await useGetLottie('preload')

// Если куки не установлены, задерживать preload

onMounted(() => {
    setTimeout(() => {
        preLoading.value = true
    }, 1500)

    setTimeout(() => {
        loading.value = true
    }, 2500)
})
</script>

<style lang="scss"></style>
