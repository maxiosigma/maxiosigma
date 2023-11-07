<template>
    <LayoutPage :view="!isQuery">
        <!--  -->
        <div></div>
        <!--  -->
    </LayoutPage>
</template>

<script setup>
const { query } = useRoute()
const { x, y, sourceType } = useMouse({ touch: false })
const { itemIsArray } = useFunctions()
const { isMobile } = useDevice()

const { t } = useI18n()
//const localePath = useLocalePath()
//const locale = usePreferredLanguages()
//const locale = useNavigatorLanguage()
const { localeProperties: lp } = useI18n()
//const lang = lp.value.name
const lang = ref(lp.value.code)
//console.log(lang)

const title = ref('~ MAIN ~')
const description = ref('')

const activeSlide = ref('FAQ')
const isQuery = useQueryLength() !== 0 && !useUtm(query)

const isActive = (i) => activeSlide.value === i
//const toActive = (i) => (activeSlide.value = i)
//const toLink = (link) => (location.href = `/${link}`)

//console.log(await queryContent().where({ _path: 'work_types' }).findOne())

//.where({ _locale: 'ru', _path: "/links", _extension: 'json' })
//console.log((await useContentData(lang, 'work_types')).content)

//const test = useNuxtApp().payload.data
//console.log(test)

//const { globals } = useContent()

//console.log(globals)

const { data } = useNuxtData()

//data.value.work_types = await useContentData(lang, 'work_types')
//data.value.work_categories = await useContentData(lang, 'work_categories')

data.value = {
    work_types: await useContentData(lang.value, 'work_types'),
    work_categories: await useContentData(lang.value, 'work_categories'),
}

//const work_types = (await useContentData(lang, 'work_types')).content
//const work_categories = (await useContentData(lang, 'work_categories')).content

//console.log(work_types)

//const work_types = ref(await useContentData(`${lang}/work_types.json`))
//const work_categories = ref(await useContentData(`${lang}/work_categories.json`))

//console.log(work_types.value)

const sections = {
    Overflow: { icon: 'ep:chrome-filled' },
    Welcome: {
        icon: 'ep:hot-water',
        text: [t('vsegda-rad-vam-pomoch'), t('dizainer-or-razrabotchik'), t('bolshoi-spektr-uslug'), t('na-svyazi-postoyanno'), t('po-vsemu-miru-i-rf')],
    },
    Services: {
        icon: 'ep:operation',
        items: data.value?.work_types?.content?.map((wt) => {
            return {
                title: wt?.title,
                items: data.value?.work_categories?.content
                    ?.filter((wc) => wt?.slug === wc?.type?.slug)
                    ?.map(({ title, technologies }) => ({
                        title,
                        technologies: technologies?.join(' + '),
                    })),
            }
        }),
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
        @apply fixed grid justify-center items-end px-4 py-2 self-center z-30 max-w-1/2 h-auto bottom-[5.5%] grid-flow-col-dense <sm: (hidden);

        &-item {
            // bg-self-7 border-self-5 border-3 border-transparent
            @apply flex-center rounded-full m-1 transition-all duration-300 cursor-pointer bg-opacity-10 elevation-1 hover: (bg-opacity-100);
        }

        &-icon {
            @apply w-5 h-5 transition duration-500 text-self-1 opacity-75 group-hover: (opacity-100);

            &.active {
                @apply text-self-5 opacity-100 group-hover: (opacity-100);
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
