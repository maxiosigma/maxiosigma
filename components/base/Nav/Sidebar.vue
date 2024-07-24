<template>
    <div class="bg-self-1 flex flex-col justify-between w-25vw overflow-hidden h-screen pr-4">
        <div class="flex-center py-4">
            <Icon name="material-symbols:logo-dev" class="text-5xl"></Icon>
        </div>

        <!-- page-scroll -->
        <PrimeScrollPanel
            class="h-full grow-1 p-0.5 -mr-4 py-4 b-t-8 b-b-8 b-self-2 overflow-hidden"
            :dt="{
                bar: {
                    background: '{primary.color}'
                }
            }"
        >
            <div class="flex flex-center flex-wrap gap-4.5">
                <div
                    class="flex-center flex-col min-w-[40%] b-2 p-1 b-self-2 rounded-lg"
                    v-for="it in [
                        { name: '1', link: '', icon: '' },
                        { name: '2', link: '', icon: '' },
                        { name: '3', link: '', icon: '' },
                        { name: '4', link: '', icon: '' },
                        { name: '5', link: '', icon: '' },
                        { name: '6', link: '', icon: '' },
                        { name: '7', link: '', icon: '' },
                        { name: '8', link: '', icon: '' },
                        { name: '9', link: '', icon: '' },
                        { name: '10', link: '', icon: '' },
                        { name: '11', link: '', icon: '' },
                        { name: '12', link: '', icon: '' },
                        { name: '13', link: '', icon: '' },
                        { name: '14', link: '', icon: '' },
                        { name: '15', link: '', icon: '' },
                        { name: '16', link: '', icon: '' }
                    ]"
                >
                    <Icon
                        :name="it?.icon || 'ph:github-logo-fill'"
                        class="text-6xl opacity-25"
                    ></Icon>
                    <div class="text-self-7">{{ it.name }}</div>
                </div>
            </div>
        </PrimeScrollPanel>

        {{ !sidebarSocialsVisible }}

        <div class="relative -mr-4">
            <div
                class="flex-center w-full bg-self-3 cursor-pointer"
                @click="sidebarSocialsVisible = !sidebarSocialsVisible"
            >
                <Icon
                    name="ic:sharp-keyboard-double-arrow-down"
                    class="text-sm transform transition-all duration-300"
                    :class="[!sidebarSocialsVisible ? 'rotate-180' : '']"
                ></Icon>
            </div>

            <div
                class="flex-center flex-wrap gap-2 mt-4 p-4 overflow-hidden transition-all duration-1000 delay-1000"
                :class="[!sidebarSocialsVisible ? '!mt-0 !p-0 !gap-0 !h-0' : '']"
            >
                <a
                    v-for="{ name, link, icon } in socials"
                    :href="link"
                    class="flex-center text-self-6 hover:text-self-3"
                >
                    <Icon
                        :name="icon || 'ph:github-logo-fill'"
                        :class="[
                            'text-2xl transition-all duration-1500',
                            !sidebarSocialsVisible ? '!text-0 !overflow-hidden' : 'delay-2000'
                        ]"
                    ></Icon>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const nav = usePayloadData('nav')
const socials = usePayloadData('socials')

const storageSidebarSocialsVisible = useLocalStorage('nav-sidebar-socials-visible')
const sidebarSocialsVisible = ref(useLocalStorageBoolean(storageSidebarSocialsVisible.value))

watch(
    () => sidebarSocialsVisible.value,
    () => {
        storageSidebarSocialsVisible.value = sidebarSocialsVisible.value
    }
)

console.log(socials.value)
</script>
