import { Vue3Lottie } from 'vue3-lottie'
//import lottie from 'lottie-web'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueLottie', Vue3Lottie)
    //return nuxtApp.provide('lottie', lottie)
})
