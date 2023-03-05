export default function (url = null) {
    const images = Object.entries(import.meta.globEager("/assets/images/*.*")).reduce((acc, [key, val]) => {
        const k = key.split("/")
        acc = Object.assign(acc, { [k[k.length - 1]]: val.default })
        return acc
    }, {})

    return images?.[url]
}
