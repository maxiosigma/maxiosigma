import { writeFileSync } from 'node:fs'
import { parse, stringify } from 'yaml'
//
;(async () => {
    //await links()
    await works()
})()

async function works() {
    //
}

async function links() {
    const linksRows = await import('./referrers.json', {
        assert: {
            type: 'json'
        }
    }).then((res) => res.default[0].rows)

    linksRows.map((row) => {
        const [
            id,
            title,
            created_at,
            updated_at,
            created_by_id,
            updated_by_id,
            short,
            href,
            name,
            description,
            alt,
            partnership,
            top
        ] = row

        writeFileSync(
            `./z-mod/json_to_yaml/.output/common/links/${short}.yaml`,
            stringify({ link: isNull(href), name: isNull(name), alt: isNull(alt) })
        )

        if (isZero(partnership))
            writeFileSync(
                `./z-mod/json_to_yaml/.output/ru/referrers/${short}.yaml`,
                stringify({ title: isNull(title), description: isNull(description) })
            )
    })
}

function isNull(item) {
    return item === 'NULL' ? null : item
}

function isZero(item) {
    return item === '0' ? false : true
}
