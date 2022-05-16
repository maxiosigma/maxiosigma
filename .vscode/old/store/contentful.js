//import { createClient as client } from '~/plugins/active/Contentful.js'
//import client from '~/plugins/active/Contentful.js'

//const dotenv = require('dotenv').config().parsed
//console.log(dotenv)

const models = ['articles', 'updates', 'links', 'shortlink', 'programs', 'categories']

export const state = () => ({
	...models.reduce(
		(sum, it) =>
			(sum = {
				...sum,
				[it]: null,
			}),
		{}
	),
})

export const mutations = {
	...models.reduce(
		(sum, it) =>
			(sum = {
				...sum,
				['update' + ucFirst(it)]: (state, payload) => {
					state[it] = payload
				},
			}),
		{}
	),
}

export const actions = {
	...models.reduce(
		(sum, it) =>
			(sum = {
				...sum,
				async ['get' + ucFirst(it)]({ commit }, payload) {
					//console.log(payload)
					//if (process.server)
					try {
						if (!payload) return

						const content_type = this.$config['CTF_MODEL_' + it.toUpperCase()]
						const response = await payload.getEntries({ content_type })
						commit('update' + ucFirst(it), response?.items)

						//console.log(response)
					} catch (err) {
						console.error(err)
					}
				},
			}),
		{}
	),
	async allActions({ dispatch }, payload) {
		//if (process.server) {
		await dispatch('getArticles', payload)
		await dispatch('getUpdates', payload)
		await dispatch('getLinks', payload)
		await dispatch('getShortlink', payload)
		await dispatch('getPrograms', payload)
		await dispatch('getCategories', payload)
		//}
	},
}

function ucFirst(str) {
	return !str ? str : str[0].toUpperCase() + str.slice(1)
}

//async function getClient() {
//	return await client({ $config: this.$config })
//}
//client().then((space) => {
//	space.getEnvironment('master').then((environment) => {
//		const entries = environment.getEntries({ content_type })
//		commit('update' + ucFirst(it), entries?.items)
//	})
//})
//.then((entries) => entries)
