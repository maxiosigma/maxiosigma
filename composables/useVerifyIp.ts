export default async function () {
    const client = useSupabaseClient()

    const ipi = (await useFetch('http://icanhazip.com'))?.data?.value?.replace('\n', '')
    const ipr = (await client.from('guests').select('ip').eq('ip', `${ipi}`).single())?.data?.ip

    if (!ipi) {
        console.log('IP не верифицирован')
        return false
    } else if (!ipr && !!ipi) {
        console.log('IP не найден в базе')
        const { data, error } = await client.from('guests').insert({ ip: ipi })
        console.log(data, error)
        return true
    } else return true
}
