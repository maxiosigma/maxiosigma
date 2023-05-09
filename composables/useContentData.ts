export default async function (name = '') {
    // ref, useState, useAsyncState
    // await useAsyncData(name, async () => ) data.value? { data }

    const content = await queryContent().where({ _file: name }).findOne()
    const result = useState(name, () => content.body)

    //console.log(content)

    return result
}
