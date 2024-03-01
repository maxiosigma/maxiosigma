export default function (items: any[]) {
    const length = items.length

    console.log(useRange(length - 1, 2).map((it) => useRange(it)))
    //console.log(items[0])

    //console.log(permutator([1, 2, 3, 4, 5]))

    //return items
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
