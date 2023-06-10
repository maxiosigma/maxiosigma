<template>
    <LayoutPage>
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
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

        <PrimeButton class="" label="Confirm" @click="showTemplate"></PrimeButton>
    </LayoutPage>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const showTemplate = () => {
    toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' })
}
</script>

<style></style>
