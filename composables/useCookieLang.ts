export default function () {
    const cookieKey = useNuxtApp().$config.public.i18n_config.cookieKey
    return useCookie(cookieKey)
}
