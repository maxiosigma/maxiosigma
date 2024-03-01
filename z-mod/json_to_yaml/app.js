import { writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import { stringify } from 'yaml'
import slugify from 'slugify'
//
const dir = './z-mod/json_to_yaml/.output'
//
;(async () => {
    //await links()
    //await works()
    await work_tags()
    await work_categories()
})()

async function work_tags() {
    const tags = (await importRows('work_tags')).map(([, title, slug], id) => ({ id: id + 1, title, slug }))
    write(`ru/work_tags.yaml`, tags)
}

async function work_categories() {
    const categories = (await importRows('work_categories')).map(([, title, slug], id) => ({ id: id + 1, title, slug }))
    write(`ru/work_categories.yaml`, categories)
}

async function works() {
    //
    const dir = `ru/works`
    deleteDir(dir)
    //
    ;(await importRows('works')).map((row, ri) => {
        const [, , , , , , title, description, link, date, ,] = row
        const name = slugify(title?.replaceAll('-', '_'), { lower: true, trim: true, replacement: '_' })

        write(`${dir}/${name}.yaml`, {
            link: isNull(link),
            title: isNull(title),
            description: isNull(description),
            date: isNull(date)
        })
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

        write(`common/links/${short}.yaml`, {
            link: isNull(href),
            title: isNull(name),
            alt: isNull(alt)
        })

        if (isZero(partnership))
            write(`ru/referrers/${short}.yaml`, {
                title: isNull(title),
                description: isNull(description)
            })
    })
}

async function importRows(name, field = 'rows') {
    return await import(`./${name}.json`, {
        assert: {
            type: 'json'
        }
    }).then((res) => res.default[0][field])
}

function deleteDir(path) {
    const fullpath = `${dir}/${path}`
    rmSync(fullpath, { recursive: true })
}

function write(path, data) {
    const fullpath = `${dir}/${path}`
    const fulldir = fullpath.split('/').slice(0, -1).join('/')
    if (!existsSync(fulldir)) mkdirSync(fulldir, { recursive: true })
    writeFileSync(fullpath, stringify(data))
}

function isNull(item) {
    return item === 'NULL' ? null : item
}

function isZero(item) {
    return item === '0' ? false : true
}
