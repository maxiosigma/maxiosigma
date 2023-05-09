// ref, useState, useAsyncState
// await useAsyncData(name, async () => ) data.value? { data }
//useState(name, () => (async () => ()()).body
export default function (name = '') {
    //const { state } = useAsyncState(queryContent().where({ _file: name }).findOne(), { body: null })
    //.then((it) => it.body),

    //const { data, pending } = useAsyncData(name, async () => await queryContent().where({ _file: name }).findOne())

    //console.log(data.value, pending.value)

    return queryContent()
        .where({ _file: name })
        .findOne()
        .then((it) => it?.body)

    //return queryContent().where({ _file: name }).findOne()
}
