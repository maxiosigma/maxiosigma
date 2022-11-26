export default async function () {
	const graphql = useStrapiGraphQL();
	const gql = (await graphql(query()))?.data;
	const result = gql.works.data.map((it) => {
		const attr = it.attributes;

		return {
			...attr,
			assets: {
				fonts: attr.assets.fonts.data.map((as) => as.attributes.title),
				models: attr.assets.models.data.map((as) => as.attributes.title),
				technologies: attr.assets.technologies.data.map((as) => as.attributes.title),
			},
			media: attr.media.data.map((md) => {
				const alt = md.attributes.alternativeText;
				delete md.attributes.alternativeText;

				return { ...md.attributes, alt };
			}),
		};
	});

	return result;
}

function query() {
	return `
	query {
		publicateds(pagination: { limit: 2000 }) {
		  data {
			attributes {
			  title
			  description
			  keywords
			  slug
			}
		  }
		}
	  }
	 `;
}
