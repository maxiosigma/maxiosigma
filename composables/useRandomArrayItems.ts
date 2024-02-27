export default function arrayRandomItems(arr: any[] = [], counts = 1) {
    const array = arr
    return (
        useRange(array.length - counts <= 0 ? array.length : counts).map(
            () => array?.[useRandomInt(0, array.length - 1)]
        ) || []
    )
}
