export default async function (name = '') {
    // ref, useState
    // await useAsyncData(name, async () => ) data.value? { data }

    const content = await queryContent().where({ _file: name }).findOne()
    const result = useState(() => content.body)

    return result
}
