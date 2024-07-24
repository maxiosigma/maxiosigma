export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            b: (str: string) => Boolean(str)
        }
    }
})
