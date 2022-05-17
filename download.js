const fetch = require('node-fetch')
const downloader = require('nodejs-file-downloader')
const prismic = require('@prismicio/client')
const { apiEndpoint } = require('./sm.json')

const repoName = apiEndpoint?.split('/')?.[2]?.split('.')?.[0]
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

const client = prismic.createClient(repoName, { fetch, accessToken })(async () => {
	const api_query_links = (await client?.getAllByType('link'))
		?.filter((it) => it.data.img.url)
		?.map((it) => it.data.img.url)

	api_query_links.map((it) => {
		//console.log(it)
		//aaaaaaaaaa

		const downloader = new Downloader({
			url: it, //If the file name already exists, a new file with the name 200MB1.zip is created.
			directory: './images/cdn', //This folder will be created, if it doesn't exist.
		})
	})

	console.log(downloader)
})
