export default async function ({ store, $prismic }) {
	//process.server &&
	//if (!store.state.uploadCdn) {
	//	const https = require('https') // or 'https' for https:// URLs
	//	const fs = require('fs')
	//	await store.dispatch('links/getLinks', { prismic: $prismic })
	//	await store.commit('setUploadCdn')
	//	await store.state.links.data
	//		?.filter((it) => it?.img)
	//		.map((it) => {
	//			const path = it.img.cdn,
	//				url = it.img.url
	//			fs.access?.(path, (error) => {
	//				if (error) {
	//					const file = fs.createWriteStream(path)
	//					https.get(url, function (response) {
	//						response.pipe(file)
	//						file.on('finish', () => {
	//							file.close()
	//						})
	//					})
	//				}
	//			})
	//		})
	//}
}
