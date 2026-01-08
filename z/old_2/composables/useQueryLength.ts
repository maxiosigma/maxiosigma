export default function () {
    const { query } = useRoute()
    const length = Object.keys(query).length
    return length
}
