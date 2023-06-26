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

            //, await query_work_types('ru') , title: 'work_types'

            console.log(contentQuery('ru', 'work_types'), contentQuery('en', 'work_types'))
        } else {
            //console.log('Ошибка GQL Connect')
        }
    } catch (error) {
        //console.log('Ошибка GQL')
    }
})

async function contentQuery(lang = '', path = '') {
    const qc = queryContent()
    return (await qc.where({ _locale: lang, _path: `/${path}` }).findOne())?.content
}
