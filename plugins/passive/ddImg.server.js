const https = require('https') // or 'https' for https:// URLs
const fs = require('fs')

export default async function ({ store, $prismic }) {
	await store.dispatch('links/getLinks', { prismic: $prismic })

	store.state.links.data
		?.filter((it) => it.img)
		.map((it) => {
			if (it?.img?.url) {
				const url = it.img.url
				const name = url.split('/')[url.split('/').length - 1].split('?')[0]
				const cdn = 'images/cdn/' + name

				console.log(name)
			}
		})

	//fs.access?.(path, function (error) {
	//	if (error) {
	//		const file = fs.createWriteStream(path)

	//		https.get(url, function (response) {
	//			response.pipe(file)
	//			file.on('finish', () => {
	//				file.close()
	//				console.log('Файл: ', name, ' загружен по ссылке: ', url)
	//			})
	//		})
	//	} else {
	//		//console.log('Файл найден')
	//	}
	//})

	//console.log($prismic)
}

function RemoveParameterFromUrl(url, parameter) {
	return url
		.replace(new RegExp('[?&]' + parameter + '=[^&#]*(#.*)?$'), '$1')
		.replace(new RegExp('([?&])' + parameter + '=[^&]*&'), '$1')
}
