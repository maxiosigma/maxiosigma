export default async function ({ store, $prismic }) {
	await store.dispatch('links/getLinks', { prismic: $prismic })
	//console.log(
	//	store.state.links.data?.filter((it) => it?.img).map((it) => [it?.img, it?.ttl, it?.lnk])
	//)
}
