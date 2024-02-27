<template>
    <!-- pagecl="main" -->
    <LayoutPage>
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

            <div :class="['relative flex justify-start flex-grow h-full w-full overflow-hidden']">
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

        <!--<div class="nav-bottom"></div>-->
    </LayoutPage>
</template>

<script setup>
const test = ref('aaa')
//const router = useRouter()
//console.log(router.getRoutes())

definePageMeta({
    sitemap: {
        changefreq: 'daily',
        priority: 0.3
    }
})

useHead({
    title: 'Главная'
})
</script>

<style lang="scss">
.main {
    /*@apply flex-grow;*/

    /*&-clip {
        clip-path: polygon(1% 1%, 95% 5%, 85% 15%, 95% 95%, 5% 95%);
    }*/
}
</style>
