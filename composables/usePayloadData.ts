export default function (payloadName: string) {
    return useNuxtData(payloadName)?.data
}
