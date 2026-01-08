export default function () {
    const { locales } = useI18n()
    return locales.value
        .filter(({ code }) => code !== 'index')
        .map(({ code }) => code)
}
