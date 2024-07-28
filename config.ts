//import { mkdirSync, writeFileSync, existsSync, unlinkSync } from 'fs'

export default {
    title: 'Sigma',
    sitemapName: 'site_maxi_o_sigma_map.xml',
    siteUrl: process.env?.SITE_URL ?? 'https://maxiosigma.web.app'
}

export const defaultLocale = 'defi'

export const getLocales = (() => {
    const locales_pc = [
        { code: 'defi', iso: 'ru-RU', name: 'Index' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский' }
        //{ code: 'en', iso: 'en-ES', name: 'English' },
        //{ code: 'zh', iso: 'zh-CN', name: '中國人' }
    ].map((it) => ({ ...it, origin: it.code, file: it.code + '.json' }))

    const locales_mobile = locales_pc
        .filter(({ code }) => code !== 'defi')
        .map((locale) => {
            return { ...locale, code: locale.code + '-amp' }
        })

    //if (!existsSync('./locales')) mkdirSync('./locales')
    //if (!existsSync('./content')) mkdirSync('./content')

    //locales_pc.map(({ code }) => {
    //    !existsSync(`./content/${code}`) ? mkdirSync(`./content/${code}`) : null
    //})
    ////
    //locales_pc.map(({ file }) => {
    //    !existsSync(`./locales/${file}`) ? writeFileSync(`./locales/${file}`, '{}') : null
    //})

    return [...locales_pc, ...locales_mobile]
})()

export function onlyPageLocations(names: any[] = []) {
    return getLocales
        .filter((locale) => names.filter((name) => locale.code !== name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}

export function onlyNotDefaultPageLocations(names: any[] = []) {
    return getLocales
        .filter((locale) => names.filter((name) => locale.code === name).length > 0)
        .reduce((s, locale) => (s = { ...s, [locale.code]: false }) && s, {})
}
