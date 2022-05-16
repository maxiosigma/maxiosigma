const noscript = ['/about', '/blog', '/ctf', '/bot', '/web/clippy', '/web/windi', '/partners', '/mw/marathon', '/mw/presentation', '/link/subs', '/']

export const state = () => ({ links: noscript, active: [] })

export const mutations = {
	activeNoScriptLink(state, link) {
		state.active.push(link)
	},
	noActiveNoScriptLink(state) {
		state.active = []
	},
}
