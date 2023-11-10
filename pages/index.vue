<template>
    <LayoutPage class="main">
        <!--  -->

        <div class="flex flex-grow">
            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full ml-10 object-cover object-right',
                        timers.mainImg
                            ? 'animated animate-fade-in'
                            : 'animated animate-fade-out',
                    ]"
                    src="main/face_1.webp"
                ></ItemMediaImg>
            </div>

            {{ timers }}

            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full -ml-10 object-cover object-left',
                        !timers.mainImg
                            ? 'animated animate-fade-in'
                            : 'animated animate-fade-out',
                    ]"
                    src="main/face_2.webp"
                ></ItemMediaImg>
            </div>
        </div>

        <!--  -->
    </LayoutPage>
</template>

<script setup>
const timers = ref({ mainImg: true })

setInterval(async function () {
    timers.value.mainImg = !timers.value.mainImg
    console.log(timers.value)
}, 5000)
</script>

<style lang="scss">
.main {
}
</style>
