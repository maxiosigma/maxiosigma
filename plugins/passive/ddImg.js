const https = require('https') // or 'https' for https:// URLs
const fs = require('fs')

const url = 'https://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg'
const name = url.split('/')[url.split('/').length - 1]
const path = 'images/cdn/' + name

fs.access?.(path, function (error) {
	if (error) {
		const file = fs.createWriteStream(path)

		https.get(url, function (response) {
			response.pipe(file)
			file.on('finish', () => {
				file.close()
				console.log('Файл: ', name, ' загружен по ссылке: ', url)
			})
		})
	} else {
		//console.log('Файл найден')
	}
})

export default function () {}
