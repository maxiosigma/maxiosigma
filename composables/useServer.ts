export default function (callback: any) {
    //&& !process.browser
    if (import.meta.server) callback()
}
