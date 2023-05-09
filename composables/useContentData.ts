// ref, useState, useAsyncState
// await useAsyncData(name, async () => ) data.value? { data }
//useState(name, () => (async () => ()()).body
export default function (name = '') {
    return queryContent().where({ _file: name }).findOne()
}
