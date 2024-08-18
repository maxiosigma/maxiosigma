export default function (items: any[], start = 2, round = 1) {
    return useCustomRange(items.length - 1, start).map((it) =>
        permutator(useCustomRange(it, round))
    )
}

function permutator(inputArr: any) {
    let result: never[][] = []

    const permute = (arr: string | any[], m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice()
                let next = curr.splice(i, 1)
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result
}
