import { Vue3Lottie } from 'vue3-lottie'
//import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueLottie', Vue3Lottie)
    //nuxtApp.vueApp.component('DotLottieVue', DotLottieVue)
})
