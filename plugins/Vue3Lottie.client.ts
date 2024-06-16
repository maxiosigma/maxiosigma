import { Vue3Lottie as VueLottie } from 'vue3-lottie'
//import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueLottie', VueLottie)
    //nuxtApp.vueApp.component('DotLottieVue', DotLottieVue)
})
