const downloader = require('nodejs-file-downloader')
const prismic = require('@prismicio/client/umd/@prismicio/client')
const { apiEndpoint } = require('./sm.json')
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

;(async () => {
	;(
		await prismic
			.client(apiEndpoint, {
				accessToken,
			})
			.query(prismic.predicates.at('document.type', 'link'))
	).results
		?.filter((it) => it.data.img.url)
		?.map((it) => it.data.img)
		?.map(async (it) => {
			const isCheck = { response: false },
				fileName = cdnName(it.url),
				data = new downloader({
					url: it.url,
					fileName,
					directory: '../../images/cdn',
					cloneFiles: false,
					skipExistingFileName: true,
					onResponse() {
						isCheck.response = true
					},
				})

			try {
				await data.download()
				if (isCheck.response) console.log(`Файл ${fileName} загружен`)
			} catch (error) {
				console.log(`Ошибка скачивания: ${fileName} `, error)
			}
		})
})()

function cdnName(url) {
	return url?.split('/')[url.split('/').length - 1].split('?')[0]
}
