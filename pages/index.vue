<template>
    <!-- v-if="PC" -->
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
        <!--  place-items-center -->
        <div class="flex flex-wrap justify-around">
            <div class="index-services-category" v-for="(it, i) in data.slide3" :key="i">
                <div class="flex-center self-start text-self-1">
                    <div class="bg-self-7 w-500px h-100px min-w-500px min-h-100px clip-category"></div>
                    <div class="absolute font-semibold tracking-widest text-5xl uppercase">{{ it.title }}</div>
                </div>

                <div class="mt-5 pl-10">
                    <div class="flex items-center my-2" v-for="(st, j) in it.items" :key="j">
                        <div class="w-[3vw] h-[0.75vw] bg-self-7 mr-[1vw]"></div>
                        <div class="text-self-7 text-3xl uppercase">{{ st.title }}</div>
                        <div class="bg-self-7 h-[2vw] w-2 mx-1"></div>
                        <div class="text-self-4 text-3xl uppercase">{{ st.add }}</div>
                    </div>
                </div>
            </div>
        </div>
    </TemplateIndexSection>
</template>

<script setup>
const title = ref('~ MAIN ~')
const description = ref('')
const data = {
    slide2: { text: ['всегда рад вам помочь', 'дизайнер | разработчик', 'большой спектр услуг', 'на связи постоянно', 'по всему миру и рф'] },
    slide3: [
        {
            title: 'Разработка',
            items: [
                { title: 'website', add: 'Nuxt 3 + CMS' },
                { title: 'Integrations', add: 'Multy' },
                { title: 'serverless', add: 'Node' },
                { title: 'Parsing', add: 'Node' },
                { title: 'API', add: 'Node' },
                //{ title: '', add: '' },
            ],
        },
        { title: 'Дизайн', items: [{ title: '', add: '' }] },
        { title: '3D', items: [{ title: '', add: '' }] },
        { title: 'Копирайт', items: [{ title: '', add: '' }] },
        { title: 'Медиа', items: [{ title: '', add: '' }] },
        { title: 'Поддержка', items: [{ title: '', add: '' }] },
    ],
}

definePageMeta({ layout: 'page' })
useHead({ title, description })
</script>

<style lang="scss">
.index {
    &-services {
        &-category {
            @apply relative flex justify-start flex-col transform scale-50 font-oranienbaum mx-1 overflow-hidden sm:scale-60 xl:scale-70;
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
