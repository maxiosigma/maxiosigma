<template>
    <div class="portfolio-content :uno: flex flex-col gap-16 relative">
        <div :class="[!category ? 'flex flex-col gap-14' : 'hidden']">
            <div
                class="bg-self-1/95 text-self-7/55 f-text-10-16 px-4 py-4 rounded-md shadow-sm-circle"
            >
                <span class="inline text-self-6/55">Подсказка:</span> вы можете зажать SHIFT и
                покрутить колесом мыши для скроллинга по горизонтали
            </div>

            <div class="flex w-full gap-10 <lg:(flex-col gap-5)">
                <div
                    class="flex flex-col justify-around gap-2 bg-self-1/95 p-4 rounded-md shadow-sm-circle"
                    v-for="{ title, children } in [
                        {
                            title: 'Как разработчик',
                            children: [
                                `Предпочитаю: Nuxt 3&4 ~ Vue | Node ~ заменяет python полностью | Strapi как CMS`,
                                'Начинал с webpack, laravel-mix и освоения разных фреймворков'
                            ]
                        },
                        {
                            title: 'Как дизайнер',
                            children: [
                                'Креативен, знаю стандарты',
                                'В основе: тренды текущего года, яркие тона, геометрия, нег. пространство',
                                'Использую приложение Figma'
                            ]
                        }
                    ]"
                >
                    <div class="f-text-14-18">{{ title }}:</div>

                    <div class="inline-block v-middle f-text-10-14" v-for="it in children">
                        <Icon
                            :name="
                                useRandomString([
                                    'geo:turf-simplify',
                                    'geo:turf-intersect',
                                    'geo:turf-explode',
                                    'geo:turf-envelope',
                                    'geo:ui-earth-west'
                                ])
                            "
                        />

                        {{ it }}
                    </div>
                </div>
            </div>

            <PrimeScrollPanel
                class="min-h-30vh h-full"
                v-for="chart in [chartWorks, chartCharacteristics]"
            >
                <PrimeOrganizationChart :value="chart">
                    <template #default="slotProps">
                        <span class="p-organizationchart-label">{{ slotProps.node.label }}</span>
                    </template>
                </PrimeOrganizationChart>
            </PrimeScrollPanel>
        </div>

        <div
            :class="[category && worksFilter.length === 0 ? 'flex-center w-full h-90vh' : 'hidden']"
        >
            <div
                class="uppercase font-bold max-w-4/5 transition-all duration-1000 text-center f-text-12-32 text-wrap"
            >
                {{
                    useRandomString([
                        'На данный момент работ по текущей',
                        'Увы, но сейчас работ по'
                    ])
                }}

                категории <span class="inline text-self-2 fw-black">«{{ workCategory }}»</span> нет
                <span class="inline text-self-2 fw-black">или</span> не предоставлены
            </div>
        </div>

        <div
            :class="[category && worksFilter.length > 0 ? '' : 'hidden']"
            v-for="work in worksFilter"
        >
            <div class="flex flex-col bg-self-2 rounded-lg py-4 self-center flex-grow gap-4">
                <div class="f-text-16-28 text-self-4 px-4">
                    {{ work.title }}
                </div>

                <div class="flex f-text-12-24 b-t-8 b-b-8 b-x-20 b-self-3 rounded-2xl">
                    <div
                        v-if="work?.images?.[0]"
                        class="flex-shrink relative z-0 overflow-hidden rounded-r-full shadow-lg-circle h-auto w-2/5 min-w-2/5"
                    >
                        <ItemMediaImg
                            class="relative w-full h-full max-h-30vh object-cover"
                            :src="'/' + work?.images?.[0]"
                        />
                    </div>

                    <div
                        class="flex-grow self-center px-4 py-2 text-shadow-sm-circle"
                        :class="[work?.images?.[0] ? 'hypnes-auto' : '']"
                    >
                        {{ work.description }}
                    </div>
                </div>

                <PrimeButton
                    v-if="work.link"
                    @click="clicked(work.link)"
                    class="self-end transition-all duration-300 !text-self-5 !b-self-5 !py-1 mx-4 hover:(!bg-self-3 !b-self-3 !text-self-1 shadow-xs-circle-light)"
                    outlined
                >
                    Посмотреть →
                </PrimeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(['works', 'category'])
const works = usePayloadData('portfolio_works_all')
const worksCategories = usePayloadData('portfolio_works_categories')

//console.log(prop.category, worksCategories.value)

const workCategory = computed(() => {
    return worksCategories.value
        .filter((w) => !!w.slug && w.slug === prop.category)
        .filter((w) => !!w)?.[0]?.title
})

//console.log(works.value)

const worksFilter = computed(() =>
    works.value.filter((w) => !!w.category && w.category === prop.category).filter((w) => !!w)
)

const chartWorks = ref({
    key: 0,
    label: 'Основные работы',
    children: [
        {
            label: 'Парсинг сайтов и приложений',
            children: [{ label: 'Node' }, { label: 'Electron' }]
        },
        { label: 'Windows приложения', children: [{ label: 'Electron' }] },
        { label: 'Дизайн баннеров', children: [{ label: 'Figma' }] },
        { label: 'Чат-боты', children: [{ label: 'VK' }, { label: 'TG' }, { label: 'WA' }] },
        {
            label: 'API-интеграции',
            children: [{ label: 'VK' }, { label: 'Node' }, { label: 'Site' }]
        }
    ]
})

const chartCharacteristics = ref({
    key: 0,
    label: 'Ключевые характеристики',
    children: [
        { label: 'Харизматичность', children: [{ label: 'Проявляю инициативу' }] },
        { label: 'Коммуникативность', children: [{ label: 'В любой сети, без матов и негатива' }] },
        { label: 'Исполнительность', children: [{ label: 'Взяв проект, делаю до конца' }] },
        { label: 'Дотошность', children: [{ label: 'Внимание к мелочам' }] }
    ]
})

//      ОСНОВНЫЕ РАБОТЫ: парсинг сайтов (node), дизайн баннеров (figma), api-интеграции (vk, tg, wa, node-bot, other), windows-приложения.

const clicked = (href) => {
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    link.href = href
    link.target = '_blank'

    const event = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    })

    link.dispatchEvent(event)
}
</script>

<style lang="scss" module>
.multi-border {
    box-shadow: inset 0 0 15px 0 rgb(73 157 243), 0 0 10px 12px rgb(73 157 243);

    &-hover:hover {
        box-shadow: inset 0 0 15px 0 rgb(73 157 243), 0 0 10px 12px rgb(73 157 243);
        --at-apply: z-50;
    }
}

//
</style>

<style lang="scss">
.portfolio-content .p-organizationchart-node {
    --at-apply: shadow-sm-circle;
}

.portfolio-content .p-organizationchart-label {
    --at-apply: f-text-8-14 leading-snug;
}

.portfolio-content .p-scrollpanel-bar.p-scrollpanel-bar-y,
.portfolio-content .p-scrollpanel-bar.p-scrollpanel-bar-x {
    --at-apply: bg-self-1 mix-blend-unset;
}
</style>
