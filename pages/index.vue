<template>
    <LayoutPage class="main">
        <!--  -->

        <div class="flex flex-grow">
            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full ml-10 object-cover object-right',
                        //timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                    ]"
                    src="main/face_1.webp"
                ></ItemMediaImg>
            </div>

            <div :class="['relative flex-grow h-full w-full overflow-hidden']">
                <ItemMediaImg
                    :class="[
                        'absolute h-full w-full -ml-10 object-cover object-left',
                        //!timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                        //timers.mainImgCount === 0
                        //    ? 'opacity-0 animate-none'
                        //    : '',
                    ]"
                    src="main/face_2.webp"
                ></ItemMediaImg>
            </div>
        </div>

        <!--  -->
    </LayoutPage>
</template>

<script setup>
//const timers = ref({ mainImg: false, mainImgCount: 0 })
//setInterval(async function () {
//    timers.value.mainImg = !timers.value.mainImg
//    timers.value.mainImgCount === 0 ? timers.value.mainImgCount++ : null
//}, 5000)
</script>

<style lang="scss">
.main {
}
</style>
