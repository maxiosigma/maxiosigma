const contentful = require('contentful')

//export const createClient = ({ config: { sps, atk } }) => {
//	console.log(sps, atk)
//	return contentful.createClient({ space: sps, accessToken: atk })
//}

export default async ({ $config: { sps, atk }, store }) => {
	//console.log(sps, atk, env)

	//if (process.server) {
	const client = contentful.createClient({ space: sps ?? process.env.CTF_SPACE_ID, accessToken: atk ?? process.env.CTF_CDA_ACCESS_TOKEN })
	await store.dispatch('contentful/allActions', client)

	//console.log(client)
	//}
}

//export default ({ store }) => ({
//	...Object.keys(store.state.contentful).map((it) => disp(store, ucFirst(it))),
//})

// Object.keys(store.state).map(key =>)
//	await disp(store, 'Articles')
//await disp(store, 'Updates')
//await disp(store, 'Links')
//await disp(store, 'Shortlink')
//await disp(store, 'Programs')
//await disp(store, 'Categories')
//
//const categories = disp(store, 'Categories')
//console.log(categories)

//async function disp(store, get) {
//	return await store.dispatch('contentful/get' + get)
//}

//function ucFirst(str) {
//	return !str ? str : str[0].toUpperCase() + str.slice(1)
//}
