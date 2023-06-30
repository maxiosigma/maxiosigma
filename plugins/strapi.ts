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

            //const links = await contentQuery('links')

            const data = await Promise.all(
                base_locales.map(async ({ code, name }: any) => [
                    code,
                    {
                        works: await contentQuery('works', code),
                        work_types: await contentQuery('work_types', code),
                        work_categories: await contentQuery('work_categories', code),
                        work_technologies: await contentQuery('work_technologies', code),
                        work_tags: await contentQuery('work_tags', code),
                        publics: await contentQuery('publics', code),
                        reffers: await contentQuery('reffers', code),
                    },
                ])
            )

            //works
            //publicateds
            //workTags
            //workTechnologies
            //work_types

            //work_technologies
            //work_tags

            //reffers

            console.log(data)
        }
    } catch (error) {}
})

async function contentQuery(path = '', lang = '') {
    const qc = queryContent()
    return (
        (
            await qc
                .where({ ...(lang && { _locale: lang }), _path: `/${path}` })
                .findOne()
                .catch(() => {})
        )?.content ?? []
    )
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
