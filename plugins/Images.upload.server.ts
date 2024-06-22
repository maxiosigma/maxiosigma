export default defineNuxtPlugin((nuxtApp) => {
    const images = Object.entries(
        import.meta.glob(`/assets/images/**/*.{png,jpg,gif,webp}`, {
            eager: true
        })
    ).reduce((acc, [key, val]: any) => {
        acc = Object.assign(acc, {
            [key.replace('/assets/images/', '')]: val?.default
        })
        return acc
    }, {})

    const media = Object.entries(
        import.meta.glob(`/assets/media/**/*.*`, {
            eager: true
        })
    ).reduce((acc, [key, val]: any) => {
        acc = Object.assign(acc, {
            [key]: val?.default
        })
        return acc
    }, {})

    nuxtApp.payload.data['uploadImages'] = { ...images, ...media }
})
