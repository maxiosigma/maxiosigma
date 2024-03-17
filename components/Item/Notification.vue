<template>
    <!-- position="bottom-center" -->
    <Toast position="top-center">
        <template #message="slotProps">
            <div class="flex flex-column align-items-center">
                <div class="text-center">
                    <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                    <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                </div>
                <div class="flex gap-2">
                    <PrimeButton severity="success" label="Yes" @click="onConfirm()"></PrimeButton>
                    <PrimeButton severity="secondary" label="No" @click="onReject()"></PrimeButton>
                </div>
            </div>
        </template>
    </Toast>
</template>

<script setup>
const toast = useToast()

const prop = defineProps({
    show: {
        required: false,
        default: false,
        type: Boolean
    }
})

const showTemplate = () => {
    toast.add({
        severity: 'warn',
        summary: 'Are you sure?',
        detail: 'Proceed to confirm',
        life: 3000
    })
}

onMounted(() => {
    toast.add({
        severity: 'warn',
        summary: 'Are you sure?',
        detail: 'Proceed to confirm'
        //life: 3000
    })
})
</script>

<style lang="scss"></style>
