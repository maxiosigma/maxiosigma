export default function (content: any[] = [], precontent = '') {
    return precontent + content?.[useRandomInt(0, content?.length - 1)]
}
