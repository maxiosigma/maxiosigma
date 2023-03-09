<template>
    <TemplateIndexBlock wt>
        <LazyItemMediaImg class="object-contain w-auto h-7/8" src="my_photo_2.webp"></LazyItemMediaImg>

        <div class="ml-10 w-1/3 text-self-7">
            <div class="uppercase font-black text-3xl">Добро пожаловать</div>

            <div>
                <div v-for="(it, i) in data.slide2.text" :key="i">{{ it }}</div>
            </div>
        </div>

        <LazyItemMediaImg class="absolute object-contain mt-1/20 w-full h-auto" src="worldmaphexagon.webp"></LazyItemMediaImg>
    </TemplateIndexBlock>

    <!--<TemplateIndexBlock wb></TemplateIndexBlock>-->
</template>

<script setup>
const title = ref("Автор")
const description = ref("")
const data = {
    slide2: { text: ["всегда рад вам помочь", "дизайнер | разработчик", "большой спектр услуг", "на связи постоянно", "по всему миру и рф"] },
}

definePageMeta({ layout: "page" })

{
    /*<TemplateIndexBlock wb wl wr wdl wdr>
        <div class="flex flex-grow h-full">
            <div class="flex-grow h-full">
                <ItemMediaImg class="bg-cover h-full w-1/2 -mr-30px face_2_shadow_1" src="face_1.webp"></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal left-8/10 -mr-1/5 bg-contain h-full w-50vw face_2_shadow_2" src="face_1.webp" bg></ItemMediaImg>
            </div>

            <div class="flex-grow h-full">
                <ItemMediaImg class="bg-cover h-full w-1/2 -ml-30px face_1_shadow_1" src="face_2.webp"></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal right-8/10 -ml-1/5 bg-contain h-full w-50vw face_1_shadow_2" src="face_2.webp" bg></ItemMediaImg>
            </div>
        </div>
    </TemplateIndexBlock>*/
}
</script>

<style lang="scss">
.face {
    &_1_shadow {
        &_1 {
            filter: blur(1px) drop-shadow(10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }

    &_2_shadow {
        &_1 {
            //filter: drop-shadow(10px -10px 10px #003366);
            filter: blur(1px) drop-shadow(-10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }
}

.mirror {
    &-horizonal {
        transform: scale(-1, 1);
    }

    &-vertical {
        transform: scale(1, -1);
    }
}
</style>
