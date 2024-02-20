import { writeFileSync } from 'node:fs'
import { stringify } from 'yaml'
import slugify from 'slugify'
//
const dir = './z-mod/json_to_yaml/.output'
//
;(async () => {
    await links()
    await works()
})()

async function works() {
    //
    ;(await importRows('works')).map((row, ri) => {
        const [, , , , , , title, description, link, date, ,] = row
        const name = slugify(title?.replaceAll('-', '_'), { lower: true, trim: true, replacement: '_' })

        writeFileSync(
            `${dir}/ru/works/${ri + 1}_${name}.yaml`,
            stringify({
                link: isNull(link),
                title: isNull(title),
                description: isNull(description),
                date: isNull(date)
            })
        )
    })
}

async function links() {
    ;(await importRows('referrers')).map((row) => {
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
            `${dir}/common/links/${short}.yaml`,
            stringify({ link: isNull(href), title: isNull(name), alt: isNull(alt) })
        )

        if (isZero(partnership))
            writeFileSync(
                `${dir}/ru/referrers/${short}.yaml`,
                stringify({ title: isNull(title), description: isNull(description) })
            )
    })
}

async function importRows(name, field = 'rows') {
    return await import(`./${name}.json`, {
        assert: {
            type: 'json'
        }
    }).then((res) => res.default[0][field])
}

function isNull(item) {
    return item === 'NULL' ? null : item
}

function isZero(item) {
    return item === '0' ? false : true
}
