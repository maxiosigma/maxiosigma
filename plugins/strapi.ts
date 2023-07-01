import { writeFileSync, mkdirSync } from 'node:fs'
import import_gql from '~/assets/index.graphql'

export default defineNuxtPlugin(async (nuxtApp) => {
    try {
        const { data } = await useFetch('http://localhost:1337/admin')

        if (!!data?.value) {
            const dataGql = import_gql

            const locales = useRuntimeConfig().public.i18n_config.locales
            const base_locales = locales.filter((it, i) => !it?.code?.includes('-amp'))
            const add_locales = locales.filter((it, i) => it?.code?.includes('-amp'))

            const links_content = await contentQuery('links')
            //const data_content = await Promise.all(
            //    base_locales.map(async ({ code, name }: any) => [
            //        code,
            //        {
            //            works: await contentQuery('works', code),
            //            work_types: await contentQuery('work_types', code),
            //            work_categories: await contentQuery('work_categories', code),
            //            work_technologies: await contentQuery('work_technologies', code),
            //            work_tags: await contentQuery('work_tags', code),

            //            menu_nav: await contentQuery('menu_nav', code),
            //            menu_social: await contentQuery('menu_social', code),
            //            menu_footer: await contentQuery('menu_footer', code),

            //            publics: await contentQuery('publics', code),
            //            reffers: await contentQuery('reffers', code),
            //        },
            //    ])
            //)

            const links_strapi = (await getGql(dataGql.links(), 'links')).map((link) => ({ ferd: useCripty(link?.href), sh: link?.short }))
            //const data_strapi = []

            //comparsionArray(links_content, links_strapi)

            console.log(comparsionArray(links_content, links_strapi))
        }
    } catch (error) {}
})

function comparsionArray(arr = [], arr_ = []) {
    return arr.map((it) => JSON.stringify(it)).join('') === arr_.map((it) => JSON.stringify(it)).join('')
}

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

async function getGql(data: string, field: string) {
    const graphql = useStrapiGraphQL()
    const result = (await graphql(data))?.data?.[field]?.data?.map((it) => it?.attributes)
    return result
}

function write(data = [], name = '') {
    return writeFileSync(name, JSON.stringify(data))
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
