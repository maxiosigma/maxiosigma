export default async function (name = '') {
    const { data } = await useAsyncData(name, async () => (await queryContent().where({ _file: name }).findOne())?.body)
    return data.value
}
