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
	navbar: [],
})

export const mutations = {
	uploadNavbar(state, payload) {
		state.navbar = payload

		console.log(state.navbar)
	},
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
	async nuxtServerInit(ctx) {
		const data = (
			await this.$strapi.graphql({
				query: ctx.state.gql.menu,
			})
		)?.menusMenus?.data[0]?.attributes?.items?.data
			.map((it) => it?.attributes)
			.map((it) => {
				return {
					url: it.url?.split('?')?.[0],
					title: it.title,
					order: it.order,
					target: it.target,
					parent: it.parent.data?.attributes,
					...it.url
						?.split('?')?.[1]
						?.split('&')
						?.reduce((s, it) => {
							s = {
								...s,
								[it.split('=')[0]]: it.split('=')[1],
							}
							return s
						}, {}),
				}
			})

		//const data = ctx.state.gql.menu

		ctx.commit('uploadNavbar', data)

		//console.log(ctx.$strapi)
		//console.log(ctx)
		//await dispatch('links/getLinks', { prismic: $prismic })
	},
}

export const getters = {}

//npx apollo schema:download --endpoint=http://localhost:1337/graphql schema.json
