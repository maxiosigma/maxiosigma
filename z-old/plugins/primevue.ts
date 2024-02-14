import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp, provide } = nuxtApp

    vueApp.use(PrimeVue, { ripple: true })
    vueApp.use(ToastService)

    vueApp.component('PrimeButton', Button)
    vueApp.component('PrimeInputText', InputText)
    vueApp.component('Toast', Toast)

    //provide('toast', vueApp.config.globalProperties.$toast)
    //provide('$toast', vueApp.config.globalProperties.$toast)
})
