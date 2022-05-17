const fetch = require('node-fetch')
const downloader = require('nodejs-file-downloader')
const prismic = require('@prismicio/client')
const { apiEndpoint } = require('./sm.json')

const repoName = apiEndpoint?.split('/')?.[2]?.split('.')?.[0]
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

const client = prismic.createClient(repoName, { fetch, accessToken })

;(async () => {
	const api_query_links = (await client?.getAllByType('link'))
		?.filter((it) => it.data.img.url)
		?.map((it) => it.data.img.url)

 	api_query_links.map((it) => {
		//console.log(it)
		//aaaaaaaaaa

		const downloader = new downloader({ url: it, directory: './images/cdn' })

		try {
			await downloader.download(); //Downloader.download() returns a promise.
			console.log("All done");
		} catch (error) {
			//IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
			//Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
			console.log("Download failed", error);
		}
	})
})
