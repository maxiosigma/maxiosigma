import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

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
    const { use, component, directive } = vueApp

    use(toastservice)
    use(PrimeVue, {
        theme: { preset: Aura },
        ripple: true,
        inputStyle: 'outlined',
        inputVariant: 'outlined',
    })

    component('PrimeAccordion', accordion)
    component('PrimeAccordionTab', accordiontab)
    component('PrimeSelectButton', selectbutton)
    component('PrimeToggleButton', togglebutton)
    component('PrimeStepperPanel', stepperpanel)
    component('PrimeScrollPanel', scrollpanel)
    component('PrimeMeterGroup', metergroup)
    component('PrimeFloatLabel', floatlabel)
    component('PrimeInputText', inputtext)
    component('PrimeSkeleton', skeleton)
    component('PrimeStepper', stepper)
    component('PrimeSidebar', sidebar)
    component('PrimeButton', button)
    component('PrimeTag', tag)
    component('Toast', toast)

    directive('p-animate-on-scroll', animateonscroll)
    directive('p-style-class', styleclass)
    directive('p-tooltip', tooltip)

    //provide('toast', nuxtApp.nuxtApp.vueApp.config.globalProperties.$toast)
})
