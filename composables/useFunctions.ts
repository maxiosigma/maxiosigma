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

    return { asyncReduceArray, asyncReduceObject, asyncFilter, itemIsArray, objectIsArray }
}
