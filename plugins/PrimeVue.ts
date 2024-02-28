import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import button from 'primevue/button'
import inputtext from 'primevue/inputtext'
import floatlabel from 'primevue/floatlabel'
import metergroup from 'primevue/metergroup'
import skeleton from 'primevue/skeleton'
import stepper from 'primevue/stepper'
import stepperpanel from 'primevue/stepperpanel'
import toast from 'primevue/toast'
import tag from 'primevue/tag'

import animateonscroll from 'primevue/animateonscroll'
import styleclass from 'primevue/styleclass'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp } = nuxtApp

    vueApp.use(PrimeVue, { ripple: true })
    vueApp.use(ToastService)

    vueApp.component('PrimeButton', button)
    vueApp.component('PrimeInputText', inputtext)
    vueApp.component('PrimeFloatLabel', floatlabel)
    vueApp.component('PrimeMeterGroup', metergroup)
    vueApp.component('PrimeSkeleton', skeleton)
    vueApp.component('PrimeStepperPanel', stepperpanel)
    vueApp.component('PrimeStepper', stepper)
    vueApp.component('PrimeTag', tag)
    vueApp.component('Toast', toast)

    vueApp.directive('p-animate-on-scroll', animateonscroll)
    vueApp.directive('p-style-class', styleclass)
})
