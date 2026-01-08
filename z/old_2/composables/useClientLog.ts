export default function (input: any) {
    return process.client ? console.log(input) : null
}
