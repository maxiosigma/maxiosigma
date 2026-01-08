import Ripple from 'primevue/ripple'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp } = nuxtApp
    const { use, component, directive } = vueApp
    directive('ripple', Ripple)
})
