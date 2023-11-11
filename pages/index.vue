<template>
    <LayoutPage pagecl="main">
        <!--  -->

        <div
            class="main-clip self-center my-auto bg-dark-100 h-30vh w-30vw overflow-hidden"
            :style="`clip-path: polygon(${clip})`"
        ></div>

        <!--<div class="flex flex-grow">
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
        </div>-->

        <!--<div class="nav-bottom"></div>-->
        <!--  -->
    </LayoutPage>
</template>

<script setup>
const clip = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100],
]
    .map(([x, y]) => `${x} ${y}`)
    .join(', ')

//const timers = ref({ mainImg: false, mainImgCount: 0 })
//setInterval(async function () {
//    timers.value.mainImg = !timers.value.mainImg
//    timers.value.mainImgCount === 0 ? timers.value.mainImgCount++ : null
//}, 5000)
</script>

<style lang="scss">
.main {
    /*@apply flex-grow;*/

    /*&-clip {
        clip-path: polygon(1% 1%, 95% 5%, 85% 15%, 95% 95%, 5% 95%);
    }*/
}
</style>
