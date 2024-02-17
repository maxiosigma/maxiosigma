//import { useQRCode } from '@vueuse/integrations/useQRCode'

export default function (content: any) {
    const encoder =
        content
            ?.split('')
            ?.map((it) => it?.charCodeAt(0)) // ^ 1
            ?.map((it, i) => (i < 10 ? (it -= 7) : i < 20 ? (it += 9) : (it -= 11)))
            ?.join(':') + `:${useRandomInt(15, 999)}`

    return encoder
}

//.map((it) => new Buffer(it).toString("base64"))
