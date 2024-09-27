<template>
    <ClientOnly>
        <PrimeAccordion class="f-c flex-col container py-8 px-20" :value="['0']" multiple>
            <PrimeAccordionPanel
                class="flex flex-col justify-center relative my-8 p-4 gap-4 border-1 border-self-4/25 rounded w-full !text-self-7/75"
                v-for="([slug, it], ti) in Object.entries(worksEdit)
                    .sort(([akey, aval], [bkey, bval]) => new Date(aval.date) - new Date(bval.date))
                    .reverse()"
                :value="`${ti}`"
                :key="slug"
            >
                <PrimeAccordionHeader>{{ it.title }}</PrimeAccordionHeader>

                <!--   class="flex flex-col justify-center relative my-8 p-4 gap-4 border-1 border-self-4/25 rounded w-full !text-self-7/75" -->

                <PrimeAccordionContent class="child:(flex flex-col gap-4)">
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
                        class="w-full !text-self-7/75"
                        :options="worksSubcategoriesOptions"
                        :modelValue="worksEdit[slug].subcategories"
                        v-model="worksEdit[slug].subcategories"
                        placeholder="subcategories"
                        optionValue="value"
                        optionLabel="name"
                        type="text"
                        multiple
                        showToggleAll
                        fluid
                    />

                    <PrimeInputGroup>
                        <PrimeInputText
                            class="w-full !text-self-7/75"
                            type="text"
                            :value="it.link"
                            v-model="worksEdit[slug].link"
                            placeholder="link"
                        />

                        <PrimeInputGroupAddon class="!bg-self-3/75">
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
                            placeholder="slug"
                            type="text"
                            :value="it.title"
                            v-model="worksEdit[slug].title"
                        />

                        <PrimeInputText
                            class="w-3/7 !text-self-7/75"
                            placeholder="slug"
                            type="text"
                            :value="slug"
                            disabled
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

                    <div class="flex flex-col gap-2 py-2 px-2 border-1 border-self-7/15 rounded">
                        <PrimeInputGroup v-for="(image, ikey) in worksEdit[slug].images">
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

                    <div class="flex flex-col gap-2 py-2 px-2 border-1 border-self-7/15 rounded">
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

                    {{ it }}
                    <!--{{ worksEdit[slug].category }}-->

                    <div
                        class="absolute -right-60px top-5px f-c bg-self-2 rounded-full size-10 cursor-pointer group transition-300 hover:bg-self-3"
                        @click="change"
                    >
                        <Icon
                            class="text-self-5 text-3xl transition-300 group-hover:text-self-2"
                            name="ic:sharp-save-alt"
                        />
                    </div>
                </PrimeAccordionContent>
            </PrimeAccordionPanel>
        </PrimeAccordion>
    </ClientOnly>
</template>

<script setup>
const toast = useToast()

const worksCategories = await ugc('portfolio/works/categories')
const worksSubcategories = await ugc('portfolio/works/subcategories')
const worksTechnologies = await ugc('portfolio/works/technologies')
const worksTags = await ugc('portfolio/works/tags')

const worksAll = await ugc('portfolio/works/all_test')
const worksEdit = ref(worksAll)

const worksCategoriesOptions = Object.entries(worksCategories).map(([key, val]) => ({
    name: val.title,
    value: key
}))
const worksSubcategoriesOptions = Object.entries(worksSubcategories).map(([key, val]) => ({
    name: val.title,
    value: key
}))

console.log(worksSubcategoriesOptions)

const change = async () => {
    const { body } = await $fetch('/api/works_edit', {
        method: 'post',
        body: worksEdit.value ?? {}
    })

    if (body === 'success') {
        toast.add({ severity: 'success', summary: 'Save', life: 3000 })
    }
}

//console.log(worksAll)
//console.log([worksCategories, worksSubcategories, worksTechnologies, worksTags])

useHead({
    title: 'Projects'
})
</script>
