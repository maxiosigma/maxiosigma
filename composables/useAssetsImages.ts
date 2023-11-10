export default function (url: string) {
    const images = Object.entries(
        import.meta.glob(`/assets/images/**/*.*`, { eager: true })
    ).reduce((acc, [key, val]) => {
        //const k = key.split('/')
        acc = Object.assign(acc, {
            [key.replace('/assets/images/', '')]: val?.default,
        }) //.default
        return acc
    }, {})

    //[k.length - 1]
    //console.log(images)
    return images?.[url]
    //return ''
}
