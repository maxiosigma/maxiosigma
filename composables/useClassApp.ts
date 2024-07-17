export default function (document: any, style: string) {
    if (!!document) {
        const baseAppClass = document.querySelector('#app').getAttribute('class')

        if (!document.querySelector('#app').className.includes(style))
            document.querySelector('#app').className = `${baseAppClass} ${style}`
    }
}
