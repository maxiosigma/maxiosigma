export default function (query = {}) {
    ;['utm', 'gtm'].reduce(
        (sum, label) =>
            Object.keys(query).map((it) => {
                it.includes(label) ? (sum += 1) : sum
            }) && sum,

        0
    ) > 0
}

//http://192.168.56.1:3000/link?utm_source=ssss
//["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "", "", ""]

//console.log(['utm', 'gtm'].filter((u) => Object.keys(query).filter((q) => q.includes(u)).length > 0).length > 0)

//.length > 0

//return 0
