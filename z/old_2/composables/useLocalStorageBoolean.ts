export default function (value = undefined) {
    return value === 'undefined' || value === undefined ? true : value === 'true'
}
