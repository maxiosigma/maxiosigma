<template>
    <div
        class="bg-self-1 flex flex-col justify-between flex-grow-1 min-w-220px w-35vw overflow-hidden h-screen pr-4"
    >
        <div class="flex-center py-8 px-4 grow-0">
            <!--<Icon name="material-symbols:logo-dev" class="text-5xl"></Icon>-->
            <ItemMediaImg :class="['w-full h-full']" src="main/signature.webp" />
        </div>

        <PrimeScrollPanel
            class="h-full grow-1 -mr-4 py-4 b-t-8 b-b-8 b-self-2 overflow-hidden"
            :dt="{
                bar: {
                    background: '{primary.color}'
                }
            }"
        >
            <div class="grid grid-cols-2 justify-center gap-4.5 px-4">
                <NuxtLink
                    class="relative flex-center flex-col b-2 p-1 b-self-2 rounded-lg overflow-clip cursor-pointer group"
                    v-for="({ title, icon, link, lottie, style, slug, bg }, ni) in nav"
                    :class="[bg ? 'b-self-3' : '']"
                    :to="link"
                    @click="!link ? $parent.$emit('clickNav', slug) : null"
                >
                    <Icon
                        :name="icon || 'ph:github-logo-fill'"
                        class="text-xl text-self-3 filter group-hover:text-self-4 z-10"
                        :class="[
                            useRandomString([
                                `hue-rotate-${10 * (ni + 1)}`,
                                `-hue-rotate-${10 * (ni + 1)}`
                            ])
                        ]"
                    />

                    <div class="text-self-7 f-text-10-16 px-2 font-thin overflow-hidden">
                        {{ title }}
                    </div>
                </NuxtLink>
            </div>
        </PrimeScrollPanel>

        <div class="relative -mr-4 grow-0">
            <div
                class="flex-center w-full py-1 bg-self-3 cursor-pointer"
                @click="setStoreSideSocials(!storeSideSocials)"
            >
                <Icon
                    name="ic:sharp-keyboard-double-arrow-down"
                    :class="[
                        'text-sm transform',
                        //transition-all duration-300
                        !storeSideSocials ? 'rotate-180' : ''
                    ]"
                />
            </div>

            <div
                :class="[
                    'flex-center flex-wrap items-start gap-2 overflow-hidden',
                    // transition-all duration-1000 delay-1000
                    !storeSideSocials ? '!mt-0 !p-0 !gap-0 !h-0' : 'p-4'
                ]"
            >
                <NuxtLink
                    v-for="{ name, link, icon } in socials"
                    class="flex-center text-self-6 hover:text-self-3"
                    target="_blank"
                    :to="link"
                >
                    <Icon
                        :name="icon || 'ph:github-logo-fill'"
                        :class="[
                            //'transition-all duration-1500 delay-2000',
                            !storeSideSocials ? '!text-0 !overflow-hidden' : 'text-2xl'
                        ]"
                    ></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps({
    items: {
        default: ref([])
    }
})

const nav = usePayloadData('nav')
const socials = usePayloadData('socials')

const storeSideSocials = useLocalStorage('nav-sidebar-socials-visible', null, {
    deep: false,
    writeDefaults: false,
    initOnMounted: true
})

const setStoreSideSocials = (value) => {
    storeSideSocials.value = value
}

await callOnce(async () => {
    prop.items.value = prop.items.map((it) => ({ ...it, bg: true }))

    nav.value = useRange(Math.max(nav.value.length, prop.items.value.length))
        .map((i) => [nav.value?.[i], prop.items.value?.[i]])
        .flat()
        .filter((it) => !!it)
})

onMounted(() => {
    storeSideSocials.value = useLocalStorageBoolean(storeSideSocials.value)
})
</script>
