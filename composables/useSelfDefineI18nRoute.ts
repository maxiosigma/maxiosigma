export default function () {
    const { locales } = useI18n()

    defineI18nRoute({
        locales: locales.value.filter(({ code }) => code !== 'index').map(({ code }) => code)
    })
}
