export default function () {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    const asyncReduceArray = async (arr, predicate, timeout = 150) =>
        arr.reduce(async (sum, it, i) => {
            await sleep(timeout * i)
            const result = (await predicate(it, i)) ?? []
            return await sum.then(async (res) => {
                return [...res, ...(result ?? [])]
            })
        }, Promise.resolve([]))

    const asyncReduceObject = async (arr, predicate, timeout = 150) =>
        arr.reduce(async (sum, it, i) => {
            await sleep(timeout * i)
            const result = (await predicate(it, i)) ?? {}
            return await sum.then(async (res) => {
                return { ...res, ...(result ?? {}) }
            })
        }, Promise.resolve({}))

    const asyncFilter = async (arr, predicate, timeout = 150) =>
        arr.reduce(async (memo, e, i) => {
            await sleep(timeout * i)
            return [...(await memo), ...((await predicate(e, i)) ? [e] : [])]
        }, [])

    const itemIsArray = (it, arr) => arr?.filter((a) => a === it).length !== 0
    const objectIsArray = (it, arr) => arr?.filter((a) => JSON.stringify(a) === JSON.stringify(it)).length !== 0

    //const importAssetsData = async (file: string) => {
    //    //.replace(/^\/@fs/, '')
    //    const module = await import(/* @vite-ignore */ `~/assets/data/${file}.json`)
    //    //const module = await import(/* @vite-ignore */ `assets_data/${file}.json`)
    //    return module.default
    //}

    //const getImageUrl = (name: string) => new URL(`../assets/images/${name}`, import.meta.url).href
    //const getDataUrl = (name: string) => new URL(`../assets/data/${name}`, import.meta.url)

    return {
        asyncReduceObject,
        asyncReduceArray,
        objectIsArray,
        asyncFilter,
        itemIsArray,
        //importAssetsData, getImageUrl, getDataUrl
    }
}
