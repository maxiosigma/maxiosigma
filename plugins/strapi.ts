import import_gql from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    try {
        const { data } = await useFetch('http://localhost:1337/admin')

        if (!!data?.value) {
            const dataGql: any = import_gql
            const graphql = useStrapiGraphQL()
            const getGql = async (data: string, field: string) => (await graphql(data).catch(() => null))?.data?.[field]?.data?.map((it: any) => it?.attributes)

            const locales = useRuntimeConfig().public.i18n_config.locales

            //const data = await Promise.all(
            //    locales.map(async ({ code, name }: any) => ({
            //        [code]: {
            //            work_types: await query_work_types(name),
            //            //work_categories: await query_work_categories(name),
            //        },
            //    }))
            //)

            //, await query_work_types('ru')

            console.log(queryContent().where({ _locale: 'ru', title: 'work_types' }).findOne())
        } else {
            //console.log('Ошибка GQL Connect')
        }
    } catch (error) {
        //console.log('Ошибка GQL')
    }
})

async function contentQuery(lang = '', file = '') {
    const qc = queryContent()

    return await qc.where({ _file: `${lang}/${file}` }).findOne()
    //.then((el) => el?.body)
}

async function query_work_types(lang = '') {
    return await contentQuery(lang, 'work_types.json')
}

async function query_work_categories(lang = '') {
    return await contentQuery(lang, 'work_categories.json')
}

async function contented(name = '') {
    return (await queryContent().where({ _file: name }).findOne()).body
}
