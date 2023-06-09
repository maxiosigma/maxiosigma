<template>
    <LayoutPage>
        <!--<FormKit class="" type="text" name="name" id="name" placeholder="Максим С.В." />
            <FormKit
                type="text"
                label="Email address"
                help="Enter a full email address"
                validation="required|email"
                validation-visibility="live"
            />-->

        <PrimeButton class="" label="aaaaaaa" @click="showBottomRight"></PrimeButton>
    </LayoutPage>
</template>

<script setup>
const showBottomRight = () => {
    useToast().add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 })
}

//const client = useSupabaseClient()
//const { data: products, error } = await client.from('products').select('*')

//const { data: products } = await useAsyncData('products', async () => {
//    const { data, error } = await client.from('products').select('*')
//    console.log(error)
//    return data
//})

//console.log(products)

//console.log(await client.from('guests').insert('8.9.9.1'))

//const ip = (await useIP()).data.value
//console.log(ip)
</script>

<style></style>
