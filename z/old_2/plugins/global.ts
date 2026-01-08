export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            b: (str: string) => Boolean(str),
            dev: import.meta.dev,
            server: import.meta.server,
            prerender: import.meta.prerender
        }
    }
})
