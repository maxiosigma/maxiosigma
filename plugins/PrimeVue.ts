import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import button from 'primevue/button'
import inputtext from 'primevue/inputtext'
import floatlabel from 'primevue/floatlabel'
import metergroup from 'primevue/metergroup'
import toast from 'primevue/toast'

//'Button', 'FloatLabel', 'InputText', 'MeterGroup'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp } = nuxtApp

    vueApp.use(PrimeVue, { ripple: true })
    vueApp.use(ToastService)

    vueApp.component('PrimeButton', button)
    vueApp.component('PrimeInputText', inputtext)
    vueApp.component('PrimeFloatLabel', floatlabel)
    vueApp.component('PrimeMeterGroup', metergroup)
    vueApp.component('Toast', toast)
})
