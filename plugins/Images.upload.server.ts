export default defineNuxtPlugin((nuxtApp) => {
    const images = Object.entries(
        import.meta.glob(`/assets/images/**/*.{png,jpg,gif,webp}`, {
            eager: true
        })
    ).reduce((acc, [key, val]) => {
        acc = Object.assign(acc, {
            [key.replace('/assets/images/', '')]: val?.default
        })
        return acc
    }, {})

    nuxtApp.payload.data['uploadImages'] = images

    return {}
})
