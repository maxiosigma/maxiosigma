import ngrok from 'ngrok'

export default function () {
	nuxt.hook('listen', async function (server, { port }) {
		if (token) {
			await ngrok.authtoken(token)
		}
		url = await ngrok.connect(port)
		nuxt.options.publicRuntimeConfig.ngrok = { url }
	})
}
