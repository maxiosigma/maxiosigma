export const ugc = async (name: string) => {
    const { locale } = useI18n()

    return (
        await import.meta.glob('~/content/**/*.json')?.[`/content/${locale.value}/${name}.json`]?.()
    ).default
}

export default ugc
