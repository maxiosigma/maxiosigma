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

    <!--  :active="isActive" -->
    <!--<TemplateIndexSection wt sc="!overflow-y-hidden">
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
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-around pt-8 pb-12">
            <div class="index-services-category" v-for="(it, i) in data.slide3" :key="i">
                <div class="flex-center text-self-1">
                    <div class="absolute z-10 font-semibold tracking-widest text-h5 sm:text-h5 xl:text-h4 uppercase">{{ it.title }}</div>
                    <div class="relative z-0 bg-self-7 w-500px h-100px min-w-500px min-h-100px clip-category transform scale-50 sm:scale-60 xl:scale-70"></div>
                </div>

                <div class="whitespace-nowrap tracking-wider">
                    <div class="flex items-center my-2" v-for="(st, j) in it.items" :key="j">
                        <div class="bg-self-4 border-1 border-self-7/25 min-w-30px min-h-8px mr-10px"></div>
                        <div class="text-self-7/95 sm:text-h7 xl:text-h6 uppercase">{{ st.title }}</div>
                        <div class="bg-self-7 border-1 border-self-4/25 min-h-14px min-w-3px mb-0.5 mx-1.5"></div>
                        <div class="text-self-4/95 sm:text-h7 xl:text-h6 uppercase">{{ st.add }}</div>
                    </div>
                </div>
            </div>
        </div>
    </TemplateIndexSection>

    <!--<TemplateIndexSection></TemplateIndexSection>-->
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
        {
            title: 'Дизайн',
            items: [
                { title: 'фирменный стиль', add: 'figma' },
                { title: 'прототипирование', add: 'figma' },
                { title: 'Презентация', add: 'Multy' },
                { title: 'редизайн', add: 'figma' },
                { title: 'логотип', add: 'figma' },
                { title: 'правки', add: 'Multy' },
                { title: 'Баннер', add: 'figma' },
                { title: 'сайт', add: 'figma' },
            ],
        },
        { title: '3D', items: [{ title: 'Простые модели', add: 'Blender' }] },
        {
            title: 'Копирайт',
            items: [
                { title: 'описание к товарам', add: 'brain' },
                { title: 'Продающий текст', add: 'Soul' },
                { title: 'отзывы', add: 'Creative' },
            ],
        },
        {
            title: 'Медиа',
            items: [
                { title: 'обработка видео', add: 'Movavi' },
                { title: 'обработка фото', add: 'Multy' },
                { title: 'Нарезка видео', add: 'Multy' },
            ],
        },
        {
            title: 'Поддержка',
            items: [
                { title: 'программирование', add: 'совет' },
                { title: 'видео-показ', add: 'помощь' },
                { title: 'дизайн', add: 'совет' },
            ],
        },
    ],
}

const activeSlide = 1
const isActive = (i) => activeSlide === i

definePageMeta({ layout: 'page' })
useHead({ title, description })
</script>

<style lang="scss">
.index {
    &-services {
        &-category {
            @apply relative flex justify-start items-center flex-col font-oranienbaum mx-1;
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
