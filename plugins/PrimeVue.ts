import PrimeVue from 'primevue/config'

import button from 'primevue/button'
import inputtext from 'primevue/inputtext'
import floatlabel from 'primevue/floatlabel'
import metergroup from 'primevue/metergroup'
import skeleton from 'primevue/skeleton'
import stepper from 'primevue/stepper'
import tooltip from 'primevue/tooltip'
import stepperpanel from 'primevue/stepperpanel'
import togglebutton from 'primevue/togglebutton'
import selectbutton from 'primevue/selectbutton'
import accordion from 'primevue/accordion'
import accordiontab from 'primevue/accordiontab'
import scrollpanel from 'primevue/scrollpanel'
import sidebar from 'primevue/sidebar'
import toastservice from 'primevue/toastservice'
import toast from 'primevue/toast'
import tag from 'primevue/tag'

import animateonscroll from 'primevue/animateonscroll'
import styleclass from 'primevue/styleclass'

export default defineNuxtPlugin((nuxtApp) => {
    const { vueApp } = nuxtApp

    vueApp.use(PrimeVue, { ripple: true })
    vueApp.use(toastservice)

    vueApp.component('PrimeAccordion', accordion)
    vueApp.component('PrimeAccordionTab', accordiontab)
    vueApp.component('PrimeSelectButton', selectbutton)
    vueApp.component('PrimeToggleButton', togglebutton)
    vueApp.component('PrimeStepperPanel', stepperpanel)
    vueApp.component('PrimeScrollPanel', scrollpanel)
    vueApp.component('PrimeMeterGroup', metergroup)
    vueApp.component('PrimeFloatLabel', floatlabel)
    vueApp.component('PrimeInputText', inputtext)
    vueApp.component('PrimeSkeleton', skeleton)
    vueApp.component('PrimeStepper', stepper)
    vueApp.component('PrimeSidebar', sidebar)
    vueApp.component('PrimeButton', button)
    vueApp.component('PrimeTag', tag)
    vueApp.component('Toast', toast)

    vueApp.directive('p-animate-on-scroll', animateonscroll)
    vueApp.directive('p-style-class', styleclass)
    vueApp.directive('p-tooltip', tooltip)

    //nuxtApp.provide('toast', nuxtApp.vueApp.config.globalProperties.$toast)
})
