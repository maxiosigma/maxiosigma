const fetch = require('node-fetch')
const prismic = require('@prismicio/client')
const { apiEndpoint } = require('./sm.json')
const repoName = apiEndpoint?.split('/')?.[2]?.split('.')?.[0]
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

const client = prismic.createClient(repoName, { fetch, accessToken })

async function download() {
	const test = await (await client?.getAllByType('link'))
		?.filter((it) => it.data.img.url)
		?.map((it) => it.data.img.url)

	//.api.query(prismic.predicates.at('document.type', 'link'))).results
	console.log(test)
}

download()
