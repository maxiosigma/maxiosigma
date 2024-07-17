<template>
    <slot :onload="setPageClass($style.page)" />
</template>

<script setup>
defineOptions({ inheritAttrs: false })
const prop = useAttrs()

const setPageClass = (style) => {
    useNuxtApp().payload.data['stylePage'] = style
    useClassApp(document, style)
}

useHead({
    ...(prop?.title ? { title: prop?.title } : {})
})

//  <!--<TemplatePreload />-->

//document.querySelector('#app').className = baseAppClass + 'aaa'

//useSwitchLang()

//defineProps({
//    bs: { type: String, required: false, default: 'body-bg' },
//    title: { type: String, required: false, default: undefined },
//    description: { type: String, required: false, default: undefined },
//    preloader: { type: Boolean, required: false, default: true },
//    view: { type: Boolean, required: false, default: true },
//    pagecl: { type: String, required: false, default: '' }
//})

//toast.show()

//;(function () {
//    //if (!useLocalStorage('lang_check_first').value) openModal()
//})()

//onMounted(() => {})

//onMounted(() => {})

//https://content.nuxtjs.org/v1/getting-started/advanced#handling-hot-reload
//https://vuejs.org/api/built-in-components.html#teleport

//const modal = useLocalStorage('lang_check', false)
//const first_entry = useLocalStorage('first_entry', false)
//if (!first_entry.value) modal.value = true
//const openModal = () => (modal.value = true)
//const closeModal = (code) => {
//    modal.value = false
//    modalClose.value = true
//    useCookieLang().value = code
//    useSwitcherRedirect(code)
//}
</script>

<style module>
.page {
    @apply flex flex-grow flex-col max-w-[100vw] h-full relative justify-between;
}
</style>
