<template>
    <section class="flex flex-col">
        <!--{{ works }}-->

        <div class="text-gray-400 bg-gray-900 body-font" v-for="(work, wi) in works" :key="wi">
            <!--{{ work }}-->

            <div class="container px-5 py-24 mx-auto">
                <div
                    class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
                >
                    <div
                        class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="sm:w-16 sm:h-16 w-10 h-10"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>

                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 v-if="work.title" class="text-white text-lg title-font font-medium mb-2">
                            {{ work.title }}
                        </h2>

                        <p v-if="work.description" class="leading-relaxed text-base">
                            {{ work.description }}
                        </p>

                        <a
                            v-if="work.link"
                            :href="work.link"
                            target="_blank"
                            class="inline-flex items-center mt-3 group *:transition-colors *:duration-300"
                        >
                            <div class="text-self-5 group-hover:text-self-3">Посмотреть сайт</div>

                            <Icon
                                class="ml-2 mb-1.5 text-self-3 group-hover:text-self-5"
                                size="20px"
                                name="streamline:travel-wayfinder-fire-exit-sign-arrow-point-direction-signal"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const prop = defineProps(['works'])
console.log(prop.works)
</script>

<style></style>
