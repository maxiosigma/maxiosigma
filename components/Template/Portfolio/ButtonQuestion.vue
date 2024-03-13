<template>
    <PrimeButton
        type="button"
        :label="label || 'Следующий вопрос'"
        :iconPos="position || 'right'"
        :severity="position !== 'left' ? 'success' : 'secondary'"
        @click="callback"
    >
        <template #icon="{ class: cl }">
            <Icon
                :class="[cl, position === 'left' ? 'transform rotate-180' : '']"
                :size="size || '20px'"
                :name="icon || 'material-symbols-light:brightness-3-rounded'"
            />
        </template>
    </PrimeButton>
</template>

<script setup>
const prop = defineProps(['callback', 'label', 'position', 'icon', 'size'])
</script>
