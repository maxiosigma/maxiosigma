export default defineNuxtPlugin(async (nuxtApp) => {
    const i18n: any = nuxtApp?.$i18n
    const locales: [{ code: any; name: any }] = i18n.locales.value
    //const baseLocales = locales
    //    .filter(({ code }) => code !== 'index' && !code.includes('-amp'))
    //    .map(({ code }) => code)
    const baseLocales = ['ru']

    const pw = [
        {
            path: 'portfolio/qualities',
            name: 'portfolio_qualities',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'portfolio/competencies',
            name: 'portfolio_competencies',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'portfolio/skills',
            name: 'portfolio_skills',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'portfolio/works/all',
            name: 'portfolio_works_top',
            callback: (res: any) =>
                res?.[0]?.body?.filter((it: { top: boolean }) => it?.top === true)
        },
        {
            path: 'portfolio/works/all',
            name: 'portfolio_works_all',
            callback: (res: any) =>
                res?.[0]?.body
                    .sort((a: any, b: any) => new Date(b.date) - new Date(a.date))
                    .map((it: { date: any }) => {
                        delete it?.date
                        return it
                    })
        },
        {
            path: 'portfolio/works/categories',
            name: 'portfolio_works_categories',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'portfolio/works/subcategories',
            name: 'portfolio_works_subcategories',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'portfolio/works/tags',
            name: 'portfolio_works_tags',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'socials',
            name: 'socials',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'referrers',
            name: 'referrers',
            callback: (res: any) => res,
            many: true
        },
        {
            path: 'nav',
            name: 'nav',
            callback: (res: any) => res?.[0]?.body
        },
        {
            path: 'socials',
            name: 'socials',
            callback: (res: any) => res?.[0]?.body
        }
    ]

    await Promise.all(
        baseLocales.map(async (locale) => {
            await Promise.all(
                pw.map(async ({ name, path, many, callback = (res) => res }) => {
                    const data = await queryContent(`/${locale}/${path}`)
                        .where(
                            !many
                                ? {
                                      _path: `/${locale}/${path}`
                                  }
                                : {}
                        )
                        .find()
                        .then(callback)
                        .catch(console.log)

                    nuxtApp.payload.data[name] = data ?? []
                    return true
                })
            )
        })
    )
})
