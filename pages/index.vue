<template>
    <!--<TemplateIndexBlock wb wl wr wdl wdr>
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
    </TemplateIndexBlock>-->

    <!--<TemplateIndexSection wt>
        <LazyItemMediaImg class="object-contain w-auto h-9/10 <lg:(absolute z-10 right-[50%] h-[200%] opacity-45)" src="my_photo_2.webp"></LazyItemMediaImg>

        <div class="ml-10 text-self-7 pt-10 relative z-20">
            <div class="font-black text-[4.5vmax] tracking-widest uppercase">Добро пожаловать</div>

            <div class="flex flex-col text-[2.5vmax] all-small-caps tracking-wide pl-1/20 mt-1/30">
                <div class="flex items-center py-1/100" :class="'pl-[' + (data.slide2.text.length - i - 1) * 5 + '%]'" v-for="(it, i) in data.slide2.text" :key="i">
                    <div class="w-6 h-6 mr-1/30 bg-self-4 rounded-sm"></div>
                    <div class="mb-1">{{ it }}</div>
                </div>
            </div>
        </div>

        <LazyItemMediaImg class="absolute object-contain mt-1/20 w-full h-auto" src="worldmaphexagon.webp"></LazyItemMediaImg>
    </TemplateIndexSection>-->

    <TemplateIndexSection wb>
        <div class="index-services-category">
            <div class="absolute">Разработка</div>
        </div>
    </TemplateIndexSection>
</template>

<script setup>
const title = ref("~ MAIN ~")
const description = ref("")
const data = {
    slide2: { text: ["всегда рад вам помочь", "дизайнер | разработчик", "большой спектр услуг", "на связи постоянно", "по всему миру и рф"] },
}

definePageMeta({ layout: "page" })
useHead({ title, description })
</script>

<style lang="scss">
.index {
    &-services {
        &-category {
            @apply flex-center font-oranienbaum tracking-widest text-5xl uppercase bg-self-7 py-5 w-500px h-100px min-w-500px min-h-100px transform scale-50 sm:scale-60 xl:scale-70 clip-category relative;
        }
    }
}

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
