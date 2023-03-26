<template :navIndex="true">
    <!-- v-if="PC" -->
    <TemplateIndexSection wb wl wr wdl wdr :active="isActive('Overflow')">
        <div class="flex flex-grow h-full">
            <!--<div class="flex-grow h-full">
                <ItemMediaImg class="bg-cover h-full w-1/2 -mr-30px face_2_shadow_1" src="face_1.webp"></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal left-8/10 -mr-1/5 bg-contain h-full w-50vw face_2_shadow_2" src="face_1.webp" bg></ItemMediaImg>
            </div>

            <div class="flex-grow h-full">
                <ItemMediaImg class="bg-cover h-full w-1/2 -ml-30px face_1_shadow_1" src="face_2.webp"></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal right-8/10 -ml-1/5 bg-contain h-full w-50vw face_1_shadow_2" src="face_2.webp" bg></ItemMediaImg>
            </div>-->
        </div>
    </TemplateIndexSection>

    <TemplateIndexSection wt sc="!overflow-hidden !h-screen" scc="!pb-0 !overflow-hidden" :active="isActive('Welcome')">
        <LazyItemMediaImg class="object-contain w-auto h-9/10 <lg:(absolute z-10 right-[50%] h-[200%] opacity-45)" src="my_photo_2.webp"></LazyItemMediaImg>

        <div class="ml-10 text-self-7 pt-10 relative z-20">
            <div class="font-black text-[4.5vmax] tracking-widest uppercase">Добро пожаловать</div>

            <div class="flex flex-col text-[2.5vmax] all-small-caps tracking-wide pl-1/20 mt-1/30">
                <div class="flex items-center py-1/100" :class="'pl-[' + (sections.Welcome.text.length - i - 1) * 5 + '%]'" v-for="(it, i) in sections.Welcome.text" :key="i">
                    <div class="w-6 h-6 mr-1/30 bg-self-4 rounded-sm"></div>
                    <div class="mb-1">{{ it }}</div>
                </div>
            </div>
        </div>

        <LazyItemMediaImg class="absolute object-contain mt-1/20 w-full h-auto" src="worldmaphexagon.webp"></LazyItemMediaImg>
    </TemplateIndexSection>

    <TemplateIndexSection wb :active="isActive('Services')">
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-around pt-8 pb-12">
            <div class="index-services-category" v-for="(it, i) in sections.Services.items" :key="i">
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

    <TemplateIndexSection :active="isActive('Lastworks')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Steps')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Steps')"></TemplateIndexSection>

    <TemplateIndexSection scc="flex-col" :active="isActive('FAQ')">
        <h2 class="text-h2_1 leading-[80%] text-self-4 font-nanumpen">F.A.Q</h2>
        <div class="text-h2 text-self-5">Частые вопросы</div>

        <div class="grid grid-cols-2">
            <div v-for="(it, i) in sections.FAQ.items" :key="i"></div>
        </div>
    </TemplateIndexSection>

    <TemplateIndexSection :active="isActive('Brands')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Presents')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Reviews')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Future')"></TemplateIndexSection>
    <TemplateIndexSection :active="isActive('Contacts')"></TemplateIndexSection>

    <div class="index-nav">
        <div
            class="index-nav-item group relative flex-col ransition-all duration-500"
            v-for="(it, i) in Object.values(sections)"
            :key="i"
            @click="!it.href ? toActive(Object.keys(sections)[i]) : toLink(it.href)"
        >
            <div
                class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 rounded-t-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
            ></div>

            <Icon
                class="index-nav-icon absolute z-10 transition-all delay-1050 duration-300 opacity-100 pointer-events-none"
                :class="[isActive(Object.keys(sections)[i]) ? 'active' : '', !it.href ? 'group-hover:(!opacity-0 delay-150)' : '']"
                :name="it.icon"
            />

            <div
                v-if="!it.href"
                class="flex-center flex-col bg-self-7 bg-opacity-10 w-full break-all text-self-1 uppercase text-xs transition-all delay-150 duration-1550 max-h-0 overflow-y-hidden pointer-events-none group-hover:(max-h-screen !bg-opacity-100)"
            >
                <!-- group-hover:(h-full max-h-full) transform scale-0 opacity-0 group-hover:(scale-100 opacity-100) -->
                <div v-for="(s, j) in Object.keys(sections)[i]" :key="j">
                    {{ s }}
                </div>
            </div>

            <div
                class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 bottom-0 rounded-b-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
            ></div>
        </div>
    </div>
</template>

<script setup>
const title = ref('~ MAIN ~')
const description = ref('')

//const route = useRoute()
const activeSlide = ref('FAQ') // isPC = 1, 2

const sections = {
    Overflow: { icon: 'ep:chrome-filled' },
    Welcome: {
        icon: 'ep:hot-water',
        text: ['всегда рад вам помочь', 'дизайнер | разработчик', 'большой спектр услуг', 'на связи постоянно', 'по всему миру и рф'],
    },
    Services: {
        icon: 'ep:operation',
        items: [
            {
                title: 'Разработка',
                items: [
                    { title: 'website', add: 'Nuxt 3 + CMS' },
                    { title: 'Integrations', add: 'Multy' },
                    { title: 'serverless', add: 'Node' },
                    { title: 'Parsing', add: 'Node' },
                    { title: 'API', add: 'Node' },
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
    },
    Lastworks: { icon: 'ep:goblet-square-full' },
    Start: { icon: 'ep:loading' },
    Complete: { icon: 'ep:loading' },
    FAQ: {
        icon: 'ep:help',
        items: [
            {
                question: 'Сколько стоит работа ?',
                answer: 'Каждая работа рассчитывается индивидуально, расценок за просто баннер не бывает, необходимо конкретизировать и давать полное понимание о проекте сразу',
            },
            { question: 'Вы умеете делать это ?', answer: 'Да, у меня имеется множество навыков не указанных на сайте в рамках предпочтительных работ' },
            {
                question: 'У меня горят сроки, сделаете быстрее ?',
                answer: 'Как правило у меня несколько проектов в работе и даже за доп. плату я соблюдаю сроки оговорённые изначально, но если есть возможность ускоряю работу или нахожу иное решение проблемы',
            },
        ],
    },
    Brands: { icon: 'ep:grape' },
    Presents: { icon: 'carbon:gift' },
    Reviews: { icon: 'uil:comment-message' },
    Future: { icon: 'ci:settings-future' },
    Contacts: { icon: 'quill:signature' },
    Next: { icon: 'material-symbols:arrow-right-alt-rounded', href: 'site' },
}

const isActive = (i) => activeSlide.value === i
const toActive = (i) => (activeSlide.value = i)

const toLink = (link) => {
    //console.log(`/${link}`)
    location.href = `/${link}`
    //navigateTo(`/${link}`, { replace: true })
    //await navigateTo(`/${link}`)
}

const { x, y, sourceType } = useMouse({ touch: false })
const { isMobile } = useDevice()

//if (sourceType === 'mouse')

//console.log(useBreakpoints())

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

    &-nav {
        //auto-cols-max grid-cols-4 bg-self-2/50 rounded-lg
        @apply fixed grid justify-center items-end px-4 py-2 self-center z-30 max-w-1/2 h-auto bottom-[5.5%] grid-flow-col-dense grid-rows-3 sm:grid-rows-2 lg:grid-rows-1;

        &-item {
            // bg-self-7 border-self-5 border-3 border-transparent
            @apply flex-center rounded-full m-1 transition-all duration-300 cursor-pointer bg-opacity-10 elevation-1 hover:(bg-opacity-100 );
        }

        &-icon {
            @apply w-5 h-5 transition duration-500 text-self-1 opacity-75 group-hover:(opacity-100);

            &.active {
                @apply text-self-5 opacity-100 group-hover:(opacity-100);
            }
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
</style>
