<template>
    <div class="flex flex-col gap-5 relative max-w-65vw">
        <div :class="[!category ? '' : 'hidden']">
            <PrimeOrganizationChart :value="organizationChart">
                <template #default="slotProps">
                    <span class="p-organizationchart-label">{{ slotProps.node.label }}</span>
                </template>
            </PrimeOrganizationChart>
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

                <span class="inline text-self-6">категории «{{ workCategory?.title }}»</span> нет
                <span class="inline text-self-2">или</span> не предоставлены
            </div>
        </div>

        <div
            :class="[category && worksFilter.length > 0 ? '' : 'hidden']"
            v-for="work in worksFilter"
        >
            <!--<div
                            class="relative z-0 overflow-hidden <md:(max-h-45vmin) md:(min-w-3/8 max-w-3/8)"
                        >
                            <ItemMediaImg
                                class="relative w-full h-full md:(rounded-l-2xl flex-shrink-1 h-full)"
                                :src="'/' + work?.images?.[0]"
                            />
                        </div>-->

            <div class="flex flex-col bg-self-2 rounded-lg py-4 self-center flex-grow gap-4">
                <div class="f-text-16-28 text-self-4 px-4">
                    {{ work.title }}
                </div>

                <div class="f-text-12-24 b-t-2 b-b-2 b-self-3 py-1 px-4">
                    {{ work.description }}
                </div>

                <PrimeButton
                    v-if="work.link"
                    @click="clicked(work.link)"
                    class="self-start !py-1 mx-4"
                >
                    Посмотреть →
                </PrimeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(['works', 'category'])
const works = usePayloadData('portfolio_works_top')
const worksCategories = usePayloadData('portfolio_works_categories')

//console.log(worksCategories.value)
const workCategory = computed(
    () =>
        worksCategories.value
            .filter((w) => !!w.slug && w.slug === prop.category)
            .filter((w) => !!w)?.[0]
)

const worksFilter = computed(() =>
    works.value.filter((w) => !!w.category && w.category === prop.category).filter((w) => !!w)
)

const organizationChart = ref({
    label: 'Основные работы',
    children: [
        { label: 'Парсинг сайтов и приложений', children: [{ label: 'Node' }] },
        { label: 'Windows приложения', children: [{ label: 'Electron' }] },
        { label: 'Дизайн баннеров', children: [{ label: 'Figma' }] },
        {
            label: 'API-интеграции',
            children: [{ label: 'VK' }, { label: 'TG' }, { label: 'WA' }, { label: 'Node' }]
        }
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
.wrapper .p-organizationchart-node {
    --at-apply: inline-flex px-2 py-1 bg-self-1 b-self-2;
}

.p-organizationchart-label {
    --at-apply: f-text-8-14 leading-snug;
}

//.p-tablist-content {
//    --at-apply: flex items-center relative mx-a;
//}

//.p-tablist-prev-button,
//.p-tablist-next-button {
//    --at-apply: bg-self-2 border-self-4 border-2 border-inset rounded-md h-[90%] my-a top-0 bottom-0
//        opacity-75;
//}

//.p-tablist-tab-list {
//    --at-apply: mx-a bg-transparent;
//}

//.p-tabpanels {
//    --at-apply: bg-transparent;
//}

//.p-tabs-scrollable > .p-tablist {
//    --at-apply: min-h-10vmin h-full overflow-x-hidden overflow-y-auto;
//}

//.p-tab {
//    --at-apply: w-auto;
//}
</style>
