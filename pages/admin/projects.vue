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

                <!--<div
                    class="flex justify-center relative mt-5 max-w-90% mx-a rounded w-full !text-self-7/75 border-1 border-self-4/50 rounded divide-x-10 divide-self-7 child:(!rounded-none !border-transparent w-full)"
                >
                    <PrimeInputText
                        class="!text-self-7/75 border-0"
                        type="text"
                        :invalid="newProject.slug === null"
                        v-model="newProject.slug"
                        placeholder="slug"
                    />

                    <PrimeDatePicker
                        class="child:(!text-self-7/75 !border-0 !rounded-none)"
                        :modelValue="new Date(newProject.date)"
                        v-model="newProject.date"
                        dateFormat="dd-mm-yy"
                        showButtonBar
                    />

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
                </div>-->
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
            </PrimeColumn>
        </PrimeDataTable>

        <PrimeDialog
            v-model:visible="dialog"
            :style="{ width: '450px' }"
            header="Product Details"
            :modal="true"
        >
            <!--<div class="flex flex-col gap-6">
                <div>
                    <label for="name" class="block font-bold mb-3">Name</label>

                    <InputText
                        id="name"
                        v-model.trim="product.name"
                        required="true"
                        autofocus
                        :invalid="submitted && !product.name"
                        fluid
                    />

                    <small v-if="submitted && !product.name" class="text-red-500"
                        >Name is required.</small
                    >
                </div>
            </div>-->

            <template #footer>
                <PrimeButton label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <PrimeButton label="Save" icon="pi pi-check" @click="saveProduct" />
            </template>
        </PrimeDialog>

        <PrimeDialog
            v-model:visible="deleteDialog"
            :style="{ width: '450px' }"
            header="Confirm"
            :modal="true"
        >
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

const dialog = ref(false)
const deleteDialog = ref(false)
const selected = ref()

const worksAll = await ugc('portfolio/works/all_test')
const worksEdit = useLocalStorage('works-all', worksAll)

const confirmDeleteSelected = () => {
    deleteDialog.value = true
}

const deleteSelected = async () => {
    selected.value?.map((it) => delete worksEdit.value[it?.slug])

    const { body } = await $fetch('/api/works_edit', {
        method: 'post',
        body: worksEdit.value ?? {}
    })

    if (body === 'success')
        toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Projects Deleted',
            life: 1000
        })

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
