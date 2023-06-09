import PrimeVue from 'primevue/config'
//import ToastService from 'primevue/toastservice'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    //nuxtApp.vueApp.use(ToastService)

    for (const [name, component] of [
        ['PrimeButton', Button],
        ['PrimeInputText', InputText],
        ['PrimeToast', Toast],
    ]) {
        nuxtApp.vueApp.component(name, component)
    }

    //nuxtApp.vueApp.component('Button', Button)
    //nuxtApp.vueApp.component('InputText', InputText)
    //nuxtApp.vueApp.component('Toast', Toast)
})
