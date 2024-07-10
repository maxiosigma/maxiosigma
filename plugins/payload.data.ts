export default defineNuxtPlugin((nuxtApp) => {
    const i18n: any = nuxtApp?.$i18n
    const locales: [{ code: any; name: any }] = i18n.locales.value
    //const baseLocales = locales
    //    .filter(({ code }) => code !== 'index' && !code.includes('-amp'))
    //    .map(({ code }) => code)
    const baseLocales = ['ru']

    const pw = [
        //
        { path: 'works/categories', name: 'portfolio-works-categories' }
    ]

    baseLocales.map((locale) => {
        pw.map(({ name, path }) => {
            const payloadName = `content-pl-${locale}-${name}`

            //nuxtApp.payload.data[name] =
        })
    })
})
