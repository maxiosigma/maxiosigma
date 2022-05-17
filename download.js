const fetch = require('node-fetch')
const downloader = require('nodejs-file-downloader')
const prismic = require('@prismicio/client/umd/@prismicio/client')
const { apiEndpoint } = require('./sm.json')

const repoName = apiEndpoint?.split('/')?.[2]?.split('.')?.[0]
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

//const client = prismic.createClient(repoName, { fetch, accessToken })

//.api.query('')

;(async () => {
	const query = (
		await prismic
			.client(apiEndpoint, {
				accessToken,
			})
			.query(prismic.predicates.at('document.type', 'link'))
	).results
		?.filter((it) => it.data.img.url)
		?.map((it) => cdnName(it.data.img.url))

	console.log(query)

	//const api_query_links = (await client?.getAllByType('link'))
	//	?.filter((it) => it.data.img.url)
	//	?.map((it) => it.data.img.url)

	//api_query_links.map(async (it) => {
	//	const fileName = cdnName(it),
	//		data = new downloader({
	//			url: it,
	//			fileName,
	//			directory: './images/cdn',
	//			cloneFiles: false,
	//		})
	//	try {
	//		await data.download()
	//		console.log(`Файл ${fileName} скачен`)
	//	} catch (error) {
	//		console.log(`Ошибка скачивания: ${fileName} `, error)
	//	}
	//})
})()

function cdnName(url) {
	return url?.split('/')[url.split('/').length - 1].split('?')[0]
}
