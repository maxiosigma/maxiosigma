<template>
    <LayoutPage :view="!isQuery">
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
                <div class="font-black text-[4.5vmax] tracking-widest uppercase">{{ t('dobro-pozhalovat') }}</div>

                <div class="flex flex-col text-[2.5vmax] all-small-caps tracking-wide pl-1/20 mt-1/30" :class="[lp.name !== 'ru' ? 'text-[2.5vmax]' : '']">
                    <div class="flex items-center py-1/100" :class="'pl-[' + (sections.Welcome.text.length - i - 1) * 5 + '%]'" v-for="(it, i) in sections.Welcome.text" :key="i">
                        <div class="min-w-6 min-h-6 mr-1/30 bg-self-4 rounded-sm"></div>
                        <div class="mb-1 whitespace-nowrap">{{ it }}</div>
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

        <TemplateIndexSection wt wb scc="flex-col" :active="isActive('FAQ')">
            <h2 class="text-[12vmax] leading-[100%] tracking-widest font-black text-self-4 font-nanumpen uppercase mt-10">F.A.Q</h2>
            <div class="text-[3.5vmax] text-self-5 font-bold tracking-wider pr-[2.5%] uppercase whitespace-nowrap">{{ t('chastye-voprosy') }}</div>

            <div class="grid place-items-center items-start gap-8 mt-8">
                <div class="grid gap-3 w-2/3" v-for="(it, i) in sections.FAQ.items" :key="i">
                    <div class="text-h4 leading-[100%] text-self-7 font-bold"><span class=""></span> {{ it.question }}</div>
                    <div class="text-h6 leading-[120%] text-self-4 font-light tracking-wide"><span class=""></span>{{ it.answer }}</div>
                </div>
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
    </LayoutPage>
</template>

<script setup>
const { query } = useRoute()
const { x, y, sourceType } = useMouse({ touch: false })
const { isMobile } = useDevice()

const { t } = useI18n()
const localePath = useLocalePath()
//const locale = usePreferredLanguages()
//const locale = useNavigatorLanguage()
const { localeProperties: lp } = useI18n()

const title = ref('~ MAIN ~')
const description = ref('')

const activeSlide = ref('FAQ')
const isQuery = useQueryLength() !== 0 && !useUtm(query)

const isActive = (i) => activeSlide.value === i
const toActive = (i) => (activeSlide.value = i)
const toLink = (link) => (location.href = `/${link}`)

const sections = {
    Overflow: { icon: 'ep:chrome-filled' },
    Welcome: {
        icon: 'ep:hot-water',
        text: [t('vsegda-rad-vam-pomoch'), t('dizainer-or-razrabotchik'), t('bolshoi-spektr-uslug'), t('na-svyazi-postoyanno'), t('po-vsemu-miru-i-rf')],
    },
    Services: {
        icon: 'ep:operation',
        items: [
            {
                title: t('razrabotka'),
                items: [
                    { title: 'Website', add: 'Nuxt 3 + CMS' },
                    { title: 'Integrations', add: 'Multy' },
                    { title: 'Serverless', add: 'Node' },
                    { title: 'Parsing', add: 'Node' },
                    { title: 'API', add: 'Node' },
                ],
            },
            {
                title: t('dizain'),
                items: [
                    { title: t('firmennyi-stil'), add: 'Figma' },
                    { title: t('prototipirovanie'), add: 'Figma' },
                    { title: t('prezentaciya'), add: 'Multy' },
                    { title: t('redizain'), add: 'Figma' },
                    { title: t('logotip'), add: 'Figma' },
                    { title: t('pravki'), add: 'Multy' },
                    { title: t('banner'), add: 'Figma' },
                    { title: t('sait'), add: 'Figma' },
                ],
            },
            { title: '3D', items: [{ title: t('prostye-modeli'), add: 'Blender' }] },
            {
                title: t('kopirait'),
                items: [
                    { title: t('opisanie-k-tovaram'), add: 'Brain' },
                    { title: t('prodayushii-tekst'), add: 'Soul' },
                    { title: t('otzyvy'), add: 'Creative' },
                ],
            },
            {
                title: t('media'),
                items: [
                    { title: t('obrabotka-video'), add: 'Movavi' },
                    { title: t('obrabotka-foto'), add: 'Multy' },
                    { title: t('narezka-video'), add: 'Multy' },
                ],
            },
            {
                title: t('podderzhka'),
                items: [
                    { title: t('programmirovanie'), add: t('sovet') },
                    { title: t('video-pokaz'), add: t('pomosh') },
                    { title: t('dizain'), add: t('sovet') },
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
                question: t('skolko-stoit-rabota'),
                answer: t('kazhdaya-rabota-rasschityvaets'),
            },
            {
                question: t('vy-umeete-delat-eto'),
                answer: t('da-u-menya-imeetsya-mnozhestvo'),
            },
            {
                question: t('u-menya-goryat-sroki-sdelaete-'),
                answer: t('kak-pravilo-u-menya-neskolko-p'),
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

//https://www.npmjs.com/package/vue-toast-notification

//https://vueuse.org/core/useWebNotification/#usewebnotification
//https://vueuse.org/integrations/useSortable/
//https://vueuse.org/core/useStepper/
//https://vueuse.org/core/useOffsetPagination/

//https://vueschool.io/articles/vuejs-tutorials/7-awesome-vue-js-3-plugins-and-libraries-to-know-in-2023/

// Сделать всё без разделения на блоки

if (isQuery) navigateTo({ path: '/link', query })

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
        //auto-cols-max grid-cols-4 bg-self-2/50 rounded-lg  grid-rows-3 sm:grid-rows-2 lg:grid-rows-1
        @apply fixed grid justify-center items-end px-4 py-2 self-center z-30 max-w-1/2 h-auto bottom-[5.5%] grid-flow-col-dense <sm:(hidden);

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
