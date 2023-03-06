export default function (url = null) {
    const images = Object.entries(import.meta.glob("/assets/images/*.*", { eager: true })).reduce((acc, [key, val]) => {
        const k = key.split("/")
        acc = Object.assign(acc, { [k[k.length - 1]]: val.default }) //.default
        return acc
    }, {})

    //console.log(images)

    return images?.[url]
}
