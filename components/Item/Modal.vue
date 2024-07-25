<template>
    <!--<teleport to="body">-->
    <!--<ClientOnly>-->
    <div :class="[show ? $style.modal : $style.modalHidden]">
        <div :class="$style.modalContainer">
            <slot></slot>
        </div>
    </div>
    <!--</ClientOnly>-->
    <!--</teleport>-->
</template>

<script setup>
//const emit = defineEmits(['close'])

const prop = defineProps({
    show: {
        required: true,
        default: false,
        type: Boolean
    }
})

//firstEntry: {
//    required: false,
//    default: false,
//    type: Boolean,
//},

//const firstEntryName = props.modalName + '_first'
//const show = useLocalStorage(props.modalName, false)
//const first_entry = useLocalStorage(firstEntryName, false)

//if (props.openModal) {
//    show.value = true
//}

//if (props.closeModal) {
//    first_entry.value = true
//    show.value = false
//}
</script>

<style lang="scss" module>
.modal {
    --at-apply: fixed flex-center bg-self-1 bg-opacity-95 inset-0 w-full h-full z-99999;

    &-hidden {
        --at-apply: !hidden h-0 w-0 overflow-hidden;
    }

    &-container {
        --at-apply: flex-center flex-col flex-shrink rounded-md elevation-10 m-auto inset-0
            bg-self-2 w-4/5 px-4 py-10 max-w-sm h-auto min-h-40 max-h-none z-99999 text-white
            pointer-events-none;
    }
}
</style>
