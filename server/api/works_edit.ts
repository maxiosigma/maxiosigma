import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

export default defineEventHandler(async (event) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const filepath = resolve(__dirname, '../../content/ru/portfolio/works/all_test.json')

    const body = await readBody(event)
    writeFileSync(filepath, JSON.stringify(body ?? {}, null, 4))

    return { body: 'success' }
})
