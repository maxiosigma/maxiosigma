export default async function () {
	const graphql = useStrapiGraphQL();
	const gql = (await graphql(query()))?.data;
	const result = gql.publicateds.data.map((it) => it.attributes);

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
