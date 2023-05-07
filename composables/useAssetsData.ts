export default function (key = '', dir = 'data' || 'images') {
    //const directory = dir === 'data' ? '/assets/data/*.*' : dir === 'images' ? '/assets/images/*.*' : dir

    const files = Object.entries(import.meta.glob('/assets/data/*.*', { eager: true })).reduce((acc, [key, val]) => {
        const k = key.split('/')
        acc = Object.assign(acc, { [k[k.length - 1]]: val?.default }) //.default
        return acc
    }, {})

    console.log(files)

    return files?.[key]
}
