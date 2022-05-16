export const state = () => ({
	scroll: 0,
	mainMenu: 0,
	timeout: 1000,
	uploadCdn: false,
	animateKinesis: true,
	modal: {
		discount: false,
	},
	slides: [],
})

export const mutations = {
	setUploadCdn(state) {
		state.uploadCdn = true
	},
	addSlide(state, prop) {
		state.slides.push(prop)
	},
	checkScroll(state, prop) {
		state.scroll = prop
	},
	checkMenu(state, prop) {
		if (prop) state.mainMenu = prop
		else {
			state.mainMenu = state.mainMenu == 0 ? 1 : -state.mainMenu
			state.mainMenu == 1
				? (document.body.style.overflow = 'hidden')
				: state.mainMenu == -1
				? setTimeout(() => (document.body.style.overflow = 'auto'), 2000)
				: null
		}
	},
	modalOpen(state, name) {
		state.modal = Object.assign(state.modal, { [name]: true })
		document.querySelector('.wrapper').classList.add('overflow-hidden')
	},
	modalClose(state, name) {
		state.modal = Object.assign(state.modal, { [name]: false })
		document.querySelector('.wrapper').classList.remove('overflow-hidden')
	},
	deactiveAnimateKinesis(state) {
		state.animateKinesis = false
	},
}

export const actions = {
	async nuxtServerInit({ dispatch }, { $prismic }) {
		await dispatch('links/getLinks', { prismic: $prismic })
		await dispatch('links/downloadLinksImage')
	},
}

export const getters = {}
