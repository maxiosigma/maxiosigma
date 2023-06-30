import import_gql from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    try {
        const { data } = await useFetch('http://localhost:1337/admin')

        if (!!data?.value) {
            const dataGql: any = import_gql
            const graphql = useStrapiGraphQL()
            const getGql = async (data: string, field: string) => (await graphql(data).catch(() => null))?.data?.[field]?.data?.map((it: any) => it?.attributes)

            const locales = useRuntimeConfig().public.i18n_config.locales
            const base_locales = locales.filter((it, i) => !it?.code?.includes('-amp'))
            const add_locales = locales.filter((it, i) => it?.code?.includes('-amp'))

            const data = await Promise.all(
                base_locales.map(async ({ code, name }: any) => [
                    code,
                    {
                        work_types: await contentQuery(code, 'work_types'),
                        work_categories: await contentQuery(code, 'work_categories'),
                    },
                ])
            )

            console.log(data)

            //console.log(await contentQuery('ru', 'work_types'), await contentQuery('en', 'work_types'))
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

//const data = await Promise.all(
//    locales.map(async ({ code, name }: any) => ({
//        [code]: {
//            work_types: await query_work_types(name),
//            //work_categories: await query_work_categories(name),
//        },
//    }))
//)

//, await query_work_types('ru') , title: 'work_types'
