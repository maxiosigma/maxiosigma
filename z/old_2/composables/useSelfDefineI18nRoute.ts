export default function () {
    const { locales } = useI18n()
    const aviableLocations = locales.value
        .filter(({ code }) => code !== 'defi')
        .map(({ code }) => code)

    useClientLog(aviableLocations)

    defineI18nRoute({
        locales: aviableLocations
    })
}
