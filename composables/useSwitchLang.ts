export default function () {
    onBeforeMount(() => {
        const { isMobile } = useDevice()
        const switchLocalePath = useSwitchLocalePath()

        const cookie = useCookieLang()
        const pathname = window.location.pathname
        const lang_nav = window.navigator?.language || window.navigator?.userLanguage

        if (!cookie.value) cookie.value = lang_nav

        const lang = isMobile ? `${cookie.value}-amp` : `${cookie.value}`
        const pathLang = switchLocalePath(lang)

        //if (pathname !== pathLang) window.location.href = switchLocalePath(lang)

        if (pathname !== pathLang) useSwitcherRedirect(`${cookie.value}`)
    })
}
