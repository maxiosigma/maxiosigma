export default function (size = 1, startAt = 0) {
    return size ? Array.from(Array(size).keys()).map((i) => i + startAt) : []
}
