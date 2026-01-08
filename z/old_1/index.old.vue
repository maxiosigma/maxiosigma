<template>
    <LayoutPage :title="title">
        <div class="flex my-auto p-20">
            <div :class="['relative flex justify-end flex-grow h-full w-full']">
                <!--<ItemMediaImg
                    :class="[
                        'absolute h-full w-auto mt-0 -mr-[4vh] object-cover object-right'
                        //timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                    ]"
                    src="main/face_1.webp"
                ></ItemMediaImg>-->

                <div>
                    <!--<div>Maxim Semenuk Valerievich</div>-->
                    <!--<div>Maxim Sigma Brand</div>-->
                </div>
            </div>

            <div
                :class="[
                    'relative flex justify-start flex-grow h-full w-full overflow-hidden'
                ]"
            >
                <!--<ItemMediaImg
                    :class="[
                        'absolute h-full w-auto mt-0 -ml-[4vh] object-cover object-left'
                        //!timers.mainImg
                        //    ? 'animated animate-fade-in'
                        //    : 'animated animate-fade-out',
                        //timers.mainImgCount === 0
                        //    ? 'opacity-0 animate-none'
                        //    : '',
                    ]"
                    src="main/face_2.webp"
                ></ItemMediaImg>-->
            </div>
        </div>

        <!--<ItemNotification name="K4" body="About 4" :visible="true" />-->
        <!--<ItemNotification name="K5" body="About 5" :visible="true" />-->
        <!--<ItemNotification name="K6" body="About 6" :visible="true" />-->

        <!--<div class="nav-bottom"></div>-->
    </LayoutPage>
</template>

<script setup>
const title = ref('Главная')
</script>

<style lang="scss"></style>
