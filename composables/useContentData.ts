export default function (lang = 'en', path = 'links', extension = 'json') {
    return queryContent()
        .where({ _locale: `${lang}`, _path: `/${path}`, _extension: `${extension}` })
        .findOne()
}

// ref, useState, useAsyncState
// await useAsyncData(name, async () => ) data.value? { data }
//useState(name, () => (async () => ()()).body
//return queryContent().where({ _file: name }).findOne()

//const { state } = useAsyncState(queryContent().where({ _file: name }).findOne(), { body: null })
//.then((it) => it.body),

//const { data, pending } = useAsyncData(name, async () => await queryContent().where({ _file: name }).findOne())

//console.log(data.value, pending.value)
