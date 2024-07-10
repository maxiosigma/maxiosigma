export default defineNuxtPlugin((nuxtApp) => {
    const pw = [
        //
        { path: 'works/categories', name: 'portfolio-works-categories' }
    ]

    console.log(nuxtApp?.$config?.content?.locales)

    //pw.map(({ name, path }) => {
    //	const payloadName = `content-pl-${locale.value}-${name}`

    //    nuxtApp.payload.data[name] = val
    //})
})
