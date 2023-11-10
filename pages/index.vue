<template>
    <LayoutPage class="main">
        <!--  -->

        <div class="flex flex-grow">
            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full ml-10 object-cover object-right',
                        timers.mainImgLeft
                            ? 'animated animate-fade-in'
                            : 'animated animate-fade-out',
                    ]"
                    src="main/face_1.webp"
                ></ItemMediaImg>
            </div>

            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full -ml-10 object-cover object-left',
                        timers.mainImgRight
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
const timers = { mainImgLeft: true, mainImgRight: false }

setInterval(() => {
    timers.mainImgLeft = !timers.mainImgLeft
    timers.mainImgRight = !timers.mainImgRight
}, 3000)
</script>

<style lang="scss">
.main {
}
</style>
