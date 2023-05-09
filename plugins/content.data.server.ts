export default defineNuxtPlugin(async (nuxtApp) => {
    //const { asyncReduceObject } = useFunctions()
    //const contented = async (name = '') => (await queryContent().where({ _file: name }).findOne()).body
    //const locales = nuxtApp.$config.public.i18n_config.locales
    //const locales = useRuntimeConfig().public.i18n_config.locales
    //const { locales } = useI18n()
    //const contentQuery = queryContent()
    //const query_work_types = async (lang) =>
    //    await queryContent()
    //        .where({ _file: `${lang}/work_types.json` })
    //        .findOne()
    //        .then((el) => el?.body)
    //const query_work_categories = async (lang) =>
    //    await contentQuery
    //        .where({ _file: `${lang}/work_categories.json` })
    //        .findOne()
    //        .then((el) => el?.body)
    //const data = await Promise.all(
    //    locales.map(async ({ code, name }) => ({
    //        [code]: {
    //            work_types: await queryContent()
    //                .where({ _file: `${name}/work_types.json` })
    //                .findOne()
    //                .then((el) => el?.body),
    //            work_categories: await queryContent()
    //                .where({ _file: `${name}/work_categories.json` })
    //                .findOne()
    //                .then((el) => el?.body),
    //        },
    //    }))
    //)
    //console.log(data)
    //await asyncReduceObject(
    //    locales.filter((it, i) => i < locales.length / 2),
    //    async ({ code, name }) => ({
    //        [code]: {
    //            work_types: await work_types(`${name}`),
    //        },
    //    })
    //)
    //const data = await asyncReduceObject(locales, async ({ name = '', code = '' }) => {
    //    //const work_types = await contented(`${name}/work_types.json`)
    //    //const work_categories = await contented(`${name}/work_categories.json`)
    //    console.log(name, code)
    //    //work_categories
    //    return {
    //        //[code]: { work_types },
    //    }
    //})
    //console.log(Object.keys(data))
    //nuxtApp.payload.data = data
    //return {}
})
