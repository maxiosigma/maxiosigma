export default {
    title: 'Sigma',
    sitemapName: 'site_maxi_o_sigma_map.xml',
    siteUrl: process.env?.SITE_URL ?? 'https://maxiosigma.web.app'
}

export const defaultLocale = 'ru'

export const getLocales = (mkdirSync: any, writeFileSync: any, existsSync: any) => {
    const locales_pc = [
        { code: 'ru', iso: 'ru-RU', name: 'Русский' },
        { code: 'en', iso: 'en-ES', name: 'English' },
        { code: 'zh', iso: 'zh-CN', name: '中國人' }
    ].map((it) => ({ ...it, origin: it.code, file: it.code + '.json' }))

    const locales_mobile = locales_pc.map((locale) => {
        return { ...locale, code: locale.code + '-amp' }
    })

    if (!existsSync('./locales')) mkdirSync('./locales')
    if (!existsSync('./content')) mkdirSync('./content')

    locales_pc.map(({ code }) => {
        !existsSync(`./content/${code}`) ? mkdirSync(`./content/${code}`) : null
    })
    //
    locales_pc.map(({ file }) => {
        !existsSync(`./locales/${file}`) ? writeFileSync(`./locales/${file}`, '{}') : null
    })

    return [...locales_pc, ...locales_mobile]
}
