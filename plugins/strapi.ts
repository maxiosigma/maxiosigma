import import_gql from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    //const client = useStrapiClient()

    try {
        const {
            data: { value },
        } = await useFetch(useStrapiUrl() ?? 'http://localhost:1337/graphql')

        if (value) {
            const graphql = useStrapiGraphQL()
            const dataGql: any = import_gql
            const getGql = async (data: string, field: string) => (await graphql(data).catch(() => null))?.data?.[field]?.data?.map((it: any) => it?.attributes)
        } else {
            //console.log('Ошибка GQL Connect')
        }
    } catch (error) {
        //console.log('Ошибка GQL')
    }
})
