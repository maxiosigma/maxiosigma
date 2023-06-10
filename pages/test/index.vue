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
    </LayoutPage>
</template>

<script setup>
const client = useSupabaseClient()
//const { data: products, error } = await client.from('products').select('*')

//81.9.1.1

const ipi = (await useFetch('http://icanhazip.com'))?.data?.value?.replace('\n', '')
const ipr = (await client.from('guests').select('ip').eq('ip', `${ipi}`).single())?.data?.ip

console.log(ipr, ipi, !ipr, !!ipi, !ipr && !!ipi)

try {
    if (!ipi) {
        console.log('IP не верифицирован')
    } else if (!ipr && !!ipi) {
        console.log('IP не найден в базе')
        const { data, error } = await client.from('guests').insert({ ip: `${ipi}` })
        console.log(data, error)
    }
} catch (error) {
    console.log('Ошибка доступа')
}
</script>

<style></style>
