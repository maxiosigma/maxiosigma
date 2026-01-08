export default function (href: any) {
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    link.href = href
    link.target = '_blank'

    const event = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    })

    link.dispatchEvent(event)
}
