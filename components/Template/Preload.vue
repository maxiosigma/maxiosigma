<template>
    <Teleport to="body">
        <div
            :class="[
                loading
                    ? '!hidden'
                    : 'fixed inset-0 w-screen h-screen bg-self-1 z-99999'
            ]"
        >
            <ItemMediaImg
                class="w-full h-full"
                src="preload/index.gif"
            ></ItemMediaImg>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
const loading = ref(false)
const icon = await useGetLottie('preload')

onMounted(() => {
    //loading.value = true
})
</script>

<style lang="scss"></style>
