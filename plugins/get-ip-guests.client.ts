//public-ip
//request-ip

export default defineNuxtPlugin({
    enforce: 'pre',
    name: 'ip_guests',
    async setup(nuxtApp) {
        const ip = (await useFetch('http://icanhazip.com').catch(() => null))?.data?.value
        console.log(ip)
        //const client = useSupabaseClient()
        //const { data: products, error } = await client.from('products').select('*')
        //console.log(products, error)
    },
})
