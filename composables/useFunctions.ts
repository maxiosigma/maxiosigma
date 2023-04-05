export default async function () {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    const asyncReduceArray = async (arr, predicate, timeout = 150) =>
        arr.reduce(async (sum, it, i) => {
            await sleep(timeout * i)
            const result = (await predicate(it, i)) ?? []
            return await sum.then(async (res) => {
                return [...res, ...(result || [])]
            })
        }, Promise.resolve([]))

    return { asyncReduceArray }
}
