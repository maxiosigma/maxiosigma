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

const toast = useToast()
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const dialog = ref(false)
const deleteDialog = ref(false)
const newProject = ref({ slug: '', date: new Date().toISOString() })
const selected = ref()

const worksAll = await ugc('portfolio/works/all_test')
const worksEdit = useLocalStorage('works-all', worksAll)

const change = async () => {
    const { body } = await $fetch('/api/works_edit', {
        method: 'post',
        body: worksEdit.value ?? {}
    })

    if (body === 'success' && newProject.value.slug !== null) {
        toast.add({ severity: 'success', summary: 'Save', life: 1000 })
    }
}

const confirmDeleteProduct = (value) => {
    //product.value = value
    console.log(value)
    deleteDialog.value = true
}

const confirmDeleteSelected = () => {
    deleteDialog.value = true
}

const deleteSelected = () => {
    //products.value = products.value.filter(val => !selectedProducts.value.includes(val));

    console.log(selected)

    deleteDialog.value = false
    selected.value = null
    toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Products Deleted',
        life: 1000
    })
}

const openNew = () => {
    //product.value = {}
    //submitted.value = false
    //productDialog.value = true
}

useHead({
    title: 'Projects'
})
</script>
