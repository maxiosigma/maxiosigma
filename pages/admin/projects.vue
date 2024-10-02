<template>
    <div class="f-c flex-col gap-8 py-8 px-20 bg-self-3">
        <PrimeToolbar>
            <template #start>
                <PrimeButton label="New" icon="pi pi-plus" class="mr-2" @click="openNew" />

                <PrimeButton
                    label="Delete"
                    icon="pi pi-trash"
                    @click="confirmDeleteSelected"
                    :disabled="!selected || !selected.length"
                />
            </template>
        </PrimeToolbar>

        <PrimeDataTable
            stripedRows
            resizableColumns
            columnResizeMode="fit"
            :filters="filters"
            v-model:selection="selected"
            class="min-w-70vw max-w-70vw"
            :value="
                Object.entries(worksEdit)
                    .sort(([akey, aval], [bkey, bval]) => new Date(aval.date) - new Date(bval.date))
                    .map(([key, val]) => ({ ...val, slug: key }))
                    .reverse()
            "
        >
            <template #header>
                <div class="flex flex-wrap items-center justify-between">
                    <span class="text-xl font-bold">Projects</span>

                    <PrimeIconField>
                        <PrimeInputIcon>
                            <i class="pi pi-search" />
                        </PrimeInputIcon>

                        <PrimeInputText v-model="filters['global'].value" placeholder="Search..." />
                    </PrimeIconField>
                </div>
            </template>

            <PrimeColumn
                selectionMode="multiple"
                style="width: 3rem"
                :exportable="false"
            ></PrimeColumn>

            <PrimeColumn
                v-for="col of [
                    { field: 'slug', header: '' },
                    { field: 'title', header: '' }
                ]"
                :key="col.field"
                :field="col.field"
                :header="col.header"
            >
                <template v-if="col.field === 'slug'" #body="{ data: { slug } }">
                    <a :href="'/admin/project_' + slug" target="_blank">{{ slug }}</a>
                </template>
            </PrimeColumn>
        </PrimeDataTable>

        <PrimeDialog
            class="min-w-30vw"
            v-model:visible="dialog"
            header="Product Details"
            :modal="true"
        >
            <div class="flex flex-col gap-6">
                <PrimeInputText
                    class="!text-self-7/75 border-0"
                    type="text"
                    :invalid="newProject.slug === null"
                    v-model="newProject.slug"
                    placeholder="slug"
                />

                <PrimeInputText
                    class="!text-self-7/75 border-0"
                    type="text"
                    :invalid="newProject.title === null"
                    v-model="newProject.title"
                    placeholder="title"
                />

                <PrimeDatePicker
                    class="child:(!text-self-7/75 !border-0 !rounded-none)"
                    :modelValue="new Date(newProject.date)"
                    v-model="newProject.date"
                    dateFormat="dd-mm-yy"
                    showButtonBar
                />
            </div>

            <template #footer>
                <PrimeButton label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <PrimeButton label="Save" icon="pi pi-check" @click="saveProject" />
            </template>
        </PrimeDialog>

        <PrimeDialog v-model:visible="deleteDialog" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span>Are you sure you want to delete the selected products?</span>
            </div>

            <template #footer>
                <PrimeButton label="No" icon="pi pi-times" text @click="deleteDialog = false" />
                <PrimeButton label="Yes" icon="pi pi-check" text @click="deleteSelected" />
            </template>
        </PrimeDialog>
    </div>
</template>

<script setup>
import { FilterMatchMode } from '@primevue/core/api'
//https://primevue.org/datatable/#customers

const toast = useToast()
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const newProject = ref({ slug: '', title: '', date: new Date().toISOString() })

const dialog = ref(false)
const deleteDialog = ref(false)
const selected = ref()

const worksAll = await ugc('portfolio/works/all_test')
const worksEdit = useLocalStorage('works-all', worksAll)

const confirmDeleteSelected = () => {
    deleteDialog.value = true
}

const change = async (message) => {
    const { body } = await $fetch('/api/works_edit', {
        method: 'post',
        body: worksEdit.value ?? {}
    })

    if (body === 'success')
        toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: message,
            life: 1000
        })
}

const saveProject = async () => {
    const { slug, date, title } = newProject.value

    worksEdit.value = {
        [slug]: { date, title },
        ...worksEdit.value
    }

    await change('Project Add')
}

const deleteSelected = async () => {
    selected.value?.map((it) => delete worksEdit.value[it?.slug])
    await change('Projects Deleted')
    deleteDialog.value = false
    selected.value = null
}

const openNew = () => {
    //product.value = {}
    //submitted.value = false
    dialog.value = true
}

const hideDialog = () => {
    dialog.value = false
}

useHead({
    title: 'Projects'
})
</script>
