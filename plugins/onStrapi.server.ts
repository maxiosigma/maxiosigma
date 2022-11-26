//import graphql from "~/assets/index.graphql";

export default defineNuxtPlugin(async (nuxtApp) => {
	//nuxtApp.payload.data = {
	//	...useNuxtApp().payload.data,
	//	links: await strapLinks(),
	//	publics: await strapPublics(),
	//	menu_footer: await strapMenuFooter(),
	//	menu_social: await strapMenuNavSocial(),
	//	menu_nav: await strapMenuNav(),
	//	works: await strapWorks(),
	//};
});

//async function strapPublics() {
//	const query = await useStrapiGraphQL()(graphql.publics());
//	return query.data.publicateds.data.map((it) => it.attributes);
//}

//async function strapLinks() {
//	const query = await useStrapiGraphQL()(graphql.links());
//	return query.data.links.data.map((it) => {
//		return {
//			ferd: useCripty(it?.attributes?.href),
//			sh: it?.attributes?.short,
//		};
//	});
//}

//async function strapWorks() {
//	const query = await useStrapiGraphQL()(graphql.works());
//	return query.data.works.data.map((it) => {
//		const attr = it.attributes;

//		return {
//			...attr,
//			assets: {
//				fonts: attr.assets.fonts.data.map((as) => as.attributes.title),
//				models: attr.assets.models.data.map((as) => as.attributes.title),
//				technologies: attr.assets.technologies.data.map((as) => as.attributes.title),
//			},
//			media: attr.media.data.map((md) => {
//				const alt = md.attributes.alternativeText;
//				delete md.attributes.alternativeText;

//				return { ...md.attributes, alt };
//			}),
//		};
//	});
//}

//async function strapMenuNav() {
//	const query = await useStrapiGraphQL()(graphql.menu("nav"));
//	return query.renderNavigation;
//}

//async function strapMenuFooter() {
//	const query = await useStrapiGraphQL()(graphql.menu("footer"));
//	return query.renderNavigation;
//}

//async function strapMenuNavSocial() {
//	const query = await useStrapiGraphQL()(graphql.menu("social"));
//	return query.renderNavigation;
//}
