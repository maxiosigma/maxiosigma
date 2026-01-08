export default function (code = '') {
    const { isMobile } = useDevice()
    const lang = isMobile ? `${code}-amp` : `${code}`
    const pathLang = useSwitchLocalePath()(lang)
    const redirect = (!pathLang.includes(code) ? `/${code}${pathLang}` : pathLang).replace(/^https?\:\/\/|\/$/gi, '')
    window.location.href = redirect
}
