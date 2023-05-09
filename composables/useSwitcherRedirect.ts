export default function (code = '') {
    const { isMobile } = useDevice()
    const lang = isMobile ? `${code}-amp` : `${code}`
    const path = useSwitchLocalePath()(lang)
    const redirect = (!path.includes(code) ? `/${code}${path}` : path).replace(/^https?\:\/\/|\/$/gi, '')
    window.location.href = redirect
}
