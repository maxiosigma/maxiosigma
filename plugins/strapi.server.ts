export default defineNuxtPlugin(async (nuxtApp) => {
    try {
        const graphql = useStrapiGraphQL()

        if (await graphql('/').catch(() => null)) {
            //
        } else {
            //console.log('Ошибка GQL Connect')
        }
    } catch (error) {
        console.log('Ошибка GQL')
    }
})
