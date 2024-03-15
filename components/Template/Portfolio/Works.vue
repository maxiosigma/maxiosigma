<template>
    <section class="flex flex-col">
        {{ works }}

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

    <!--<div>
        <section class="text-gray-400 bg-gray-900 body-font">
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
                        <h2 class="text-white text-lg title-font font-medium mb-2">Shooting Stars</h2>
                        <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
                            juice poutine.
                        </p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center"
                            >Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
                >
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-white text-lg title-font font-medium mb-2">The Catalyzer</h2>
                        <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
                            juice poutine.
                        </p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center"
                            >Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div
                        class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0"
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
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
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
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-white text-lg title-font font-medium mb-2">The 400 Blows</h2>
                        <p class="leading-relaxed text-base">
                            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
                            juice poutine.
                        </p>
                        <a class="mt-3 text-indigo-400 inline-flex items-center"
                            >Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <button
                    class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Button
                </button>
            </div>
        </section>
    </div>-->

    <!--<div class="relative min-h-80 pointer-events-none">
        <div v-for="(work, wi) in works" :key="wi">
            <div
                class="finger"
                :class="[
                    wi === 0
                        ? '!pl-[110px] !pr-[5%] min-w-[500px] max-w-[500px] absolute top-0 left-0 transform origin-top-left -rotate-[50deg]'
                        : 'relative z-10'
                ]"
            >
                <div class="finger-title">
                    {{ work.title }}
                </div>

                <div class="finger-description">{{ work.description }}</div>

                <a
                    v-if="work.link"
                    :href="work.link"
                    class="text-xs text-self-4 border-b-[0.5px] pr-1 cursor-pointer border-self-5 mr-auto hover:border-self-5 hover:text-self-5 pointer-events-auto"
                    target="_blank"
                    >Посмотреть проект</a
                >
            </div>

            <div v-if="wi !== 0" class="min-h-10 bg-self-1"></div>
        </div>
    </div>-->

    <!--<div class="flex flex-col gap-5" v-for="(work, wi) in works" :key="wi">
                {{ work }}
            </div>-->
</template>

<script setup>
const prop = defineProps(['works'])
</script>

<style></style>
