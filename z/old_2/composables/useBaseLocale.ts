export default function () {
    const { locale } = useI18n()
    return locale.value?.replace('-amp', '') ?? 'ru'
}
