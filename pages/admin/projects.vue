<template>
    <div class="flex">
        <div class="fixed min-w-15vw bg-self-2 py-8 px-8 overflow-hidden">
            <a class="flex items-center gap-2 text-xl text-self-4" href="/admin/projects">
                <Icon name="octicon:project-roadmap-16" />
                Projects
            </a>
        </div>

        <ClientOnly>
            <PrimeAccordion
                class="f-c flex-col container gap-8 py-8 px-20 m-l-20vw"
                :value="accordion"
                @update:value="(v) => (accordion = v)"
                multiple
            >
                <PrimeAccordionPanel
                    class="flex flex-col justify-center relative border-1 border-self-4/25 rounded w-full !text-self-7/75"
                    value="0"
                >
                    <PrimeAccordionHeader>Новый проект</PrimeAccordionHeader>

                    <PrimeAccordionContent
                        class="child:(flex flex-col justify-center relative p-4 gap-4 border-1 border-self-4/25 rounded w-full !text-self-7/75)"
                    >
                        <PrimeInputGroup>
                            <PrimeInputGroupAddon class="w-full">
                                <PrimeInputText
                                    class="w-full !text-self-7/75"
                                    type="text"
                                    v-model="newProject.slug"
                                    placeholder="slug"
                                />
                            </PrimeInputGroupAddon>

                            <PrimeInputGroupAddon>
                                <PrimeDatePicker
                                    class="child:(!text-self-7/75)"
                                    :value="newProject.date"
                                    v-model="newProject.date"
                                    dateFormat="dd-mm-yy"
                                    showButtonBar
                                />
                            </PrimeInputGroupAddon>

                            <PrimeInputGroupAddon class="!min-w-130px">
                                <PrimeButton
                                    class="!text-self-7/75 text-center cursor-pointer"
                                    severity="secondary"
                                    @click="
                                        ;(worksEdit = {
                                            [newProject.slug]: { date: newProject.date },
                                            ...worksEdit
                                        }) && change()
                                    "
                                >
                                    Добавить
                                </PrimeButton>
                            </PrimeInputGroupAddon>
                        </PrimeInputGroup>
                    </PrimeAccordionContent>
                </PrimeAccordionPanel>

                <PrimeAccordionPanel
                    class="flex flex-col justify-center relative border-1 border-self-4/25 rounded w-full !text-self-7/75"
                    v-for="([slug, it], ti) in Object.entries(worksEdit)
                        .sort(
                            ([akey, aval], [bkey, bval]) =>
                                new Date(aval.date) - new Date(bval.date)
                        )
                        .reverse()"
                    :value="`${ti + 1}`"
                    :key="slug"
                >
                    <PrimeAccordionHeader>{{ it.title }}</PrimeAccordionHeader>

                    <PrimeAccordionContent
                        class="child:(flex flex-col justify-center relative p-4 gap-4 border-1 border-self-4/25 rounded w-full !text-self-7/75)"
                    >
                        {{ it }}

                        <PrimeSelectButton
                            class="w-full !text-self-7/75"
                            :options="worksCategoriesOptions"
                            :modelValue="worksEdit[slug].category"
                            v-model="worksEdit[slug].category"
                            placeholder="category"
                            optionValue="value"
                            optionLabel="name"
                            type="text"
                        />

                        <PrimeMultiSelect
                            v-for="{ options, name } in [
                                { name: 'subcategories', options: worksSubcategoriesOptions },
                                { name: 'technologies', options: worksTechnologiesOptions },
                                { name: 'tags', options: worksTagsOptions }
                            ]"
                            class="w-full !text-self-7/75"
                            :options="options"
                            :modelValue="worksEdit[slug][name]"
                            v-model="worksEdit[slug][name]"
                            :placeholder="name"
                            optionValue="value"
                            optionLabel="name"
                            showToggleAll
                            type="text"
                            multiple
                            fluid
                        />

                        <PrimeInputGroup>
                            <PrimeInputGroupAddon>
                                <PrimeDatePicker
                                    class="child:(!text-self-7/75)"
                                    :modelValue="new Date(worksEdit[slug].date)"
                                    v-model="worksEdit[slug].date"
                                    dateFormat="dd-mm-yy"
                                    showButtonBar
                                />
                            </PrimeInputGroupAddon>

                            <PrimeInputGroupAddon class="w-full">
                                <PrimeInputText
                                    class="w-full !text-self-7/75"
                                    type="text"
                                    :value="it.link"
                                    v-model="worksEdit[slug].link"
                                    placeholder="link"
                                />
                            </PrimeInputGroupAddon>

                            <PrimeInputGroupAddon>
                                <PrimeCheckbox
                                    class="!text-self-7/75"
                                    type="text"
                                    :value="!!it.top"
                                    v-model="worksEdit[slug].top"
                                    placeholder="top"
                                    :binary="true"
                                />
                            </PrimeInputGroupAddon>
                        </PrimeInputGroup>

                        <div class="flex gap-4">
                            <PrimeInputText
                                class="w-full !text-self-7/75"
                                placeholder="title"
                                type="text"
                                :value="it.title"
                                v-model="worksEdit[slug].title"
                            />

                            <PrimeInputText
                                class="w-3/7 !text-self-7/75"
                                placeholder="slug"
                                :value="slug"
                                type="text"
                                @update:modelValue="(v) => (newSlug[slug] = v)"
                            />
                        </div>

                        <PrimeInputText
                            class="w-full !text-self-7/75"
                            type="text"
                            :value="it.description"
                            v-model="worksEdit[slug].description"
                            placeholder="description"
                        />

                        <PrimeInputText
                            class="w-full !text-self-7/75"
                            type="text"
                            :value="it.preview_image"
                            v-model="worksEdit[slug].preview_image"
                            placeholder="preview_image"
                        />

                        <PrimeInputText
                            class="w-full !text-self-7/75"
                            type="text"
                            :value="it.preview_video"
                            v-model="worksEdit[slug].preview_video"
                            placeholder="preview_video"
                        />

                        <div
                            class="flex flex-col gap-2 py-2 px-2 border-1 border-self-7/15 rounded"
                        >
                            <PrimeInputGroup v-for="(image, ikey) in worksEdit[slug].images">
                                <PrimeInputGroupAddon> Preview </PrimeInputGroupAddon>

                                <PrimeInputText
                                    class="w-full !text-self-7/75"
                                    type="text"
                                    :value="image"
                                    v-model="worksEdit[slug].images[ikey]"
                                    placeholder="image"
                                />

                                <PrimeInputGroupAddon
                                    class="group cursor-pointer"
                                    @click="
                                        worksEdit[slug].images = worksEdit[slug].images.filter(
                                            (img, ik) => ik !== ikey
                                        )
                                    "
                                >
                                    <Icon
                                        class="text-self-7 transition-300 group-hover:text-self-3"
                                        name="material-symbols:delete-outline"
                                    />
                                </PrimeInputGroupAddon>
                            </PrimeInputGroup>

                            <PrimeButton
                                class="w-full !text-self-7/75 !justify-start cursor-pointer"
                                severity="secondary"
                                @click="worksEdit[slug].images.push('')"
                            >
                                Add image
                            </PrimeButton>
                        </div>

                        <div
                            class="flex flex-col gap-2 py-2 px-2 border-1 border-self-7/15 rounded"
                        >
                            <PrimeInputGroup v-for="(video, vkey) in worksEdit[slug].videos">
                                <PrimeInputText
                                    class="w-full !text-self-7/75"
                                    type="text"
                                    :value="video"
                                    v-model="worksEdit[slug].videos[vkey]"
                                    placeholder="video"
                                />

                                <PrimeInputGroupAddon
                                    class="group cursor-pointer"
                                    @click="
                                        worksEdit[slug].videos = worksEdit[slug].videos.filter(
                                            (vi, ik) => ik !== vkey
                                        )
                                    "
                                >
                                    <Icon
                                        class="text-self-7 transition-300 group-hover:text-self-3"
                                        name="material-symbols:delete-outline"
                                    />
                                </PrimeInputGroupAddon>
                            </PrimeInputGroup>

                            <PrimeButton
                                class="w-full !text-self-7/75 !justify-start cursor-pointer"
                                severity="secondary"
                                @click="worksEdit[slug].videos.push('')"
                            >
                                Add video
                            </PrimeButton>
                        </div>

                        <div
                            class="absolute -right-60px -top-50px f-c bg-self-2 rounded-full size-10 cursor-pointer group transition-300 hover:bg-self-3"
                            @click="change"
                        >
                            <Icon
                                class="text-self-5 text-3xl transition-300 group-hover:text-self-2"
                                name="ic:sharp-save-alt"
                            />
                        </div>

                        <div
                            class="absolute -right-60px bottom-0px f-c bg-self-2 rounded-full size-10 cursor-pointer group transition-300 hover:bg-self-3"
                            @click="delete worksEdit[slug] && change()"
                        >
                            <Icon
                                class="text-self-5 text-3xl transition-300 group-hover:text-self-2"
                                name="material-symbols:delete-outline"
                            />
                        </div>
                    </PrimeAccordionContent>
                </PrimeAccordionPanel>
            </PrimeAccordion>
        </ClientOnly>
    </div>
</template>

<script setup>
const toast = useToast()
const accordion = useCookie('admin-accordion')
const newProject = ref({ slug: '', date: new Date().toISOString() })
const newSlug = ref({})

const worksCategories = await ugc('portfolio/works/categories')
const worksSubcategories = await ugc('portfolio/works/subcategories')
const worksTechnologies = await ugc('portfolio/works/technologies')
const worksTags = await ugc('portfolio/works/tags')

const worksAll = await ugc('portfolio/works/all_test')
const worksEdit = useLocalStorage('works-all', worksAll)

const [
    worksCategoriesOptions,
    worksSubcategoriesOptions,
    worksTechnologiesOptions,
    worksTagsOptions
] = [
    Object.entries(worksCategories).map(([key, val]) => ({ name: val.title, value: key })),
    Object.entries(worksSubcategories).map(([key, val]) => ({ name: val.title, value: key })),
    Object.entries(worksTechnologies).map(([key, val]) => ({ name: val, value: key })),
    Object.entries(worksTags).map(([key, val]) => ({ name: val, value: key }))
]

const change = async () => {
    Object.entries(newSlug.value)?.map(([key, val]) => {
        worksEdit.value = { [val]: worksEdit.value[key], ...worksEdit.value }
        delete worksEdit.value[key]
    })

    const { body } = await $fetch('/api/works_edit', {
        method: 'post',
        body: worksEdit.value ?? {}
    })

    if (body === 'success') {
        toast.add({ severity: 'success', summary: 'Save', life: 1000 })
    }
}

//console.log(worksAll)
//console.log([worksCategories, worksSubcategories, worksTechnologies, worksTags])

useHead({
    title: 'Projects'
})
</script>
