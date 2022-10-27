export default function () {
	//if (process.server && !process.browser) {}
	let links = ref([]);

	const getApiDataLinks = async () => {
		try {
			const graphql = useStrapiGraphQL();
			const gql = (await graphql(query())).data.links.data.reduce((sum, it) => {
				const link = it.attributes;

				//if (!!link?.partnership && !!link?.title && !!link?.description && !!link?.short)
				sum.push({
					title: link?.title,
					description: link?.description,
					images: link?.imgs?.data.map((img) => img?.attributes),
					short: link?.short,
					tags: link?.tags?.data?.map((tag) => tag?.attributes?.title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
					top: link?.top,
				});

				return sum;
			}, []);

			links.value = gql;
		} catch (error) {}
	};

	//return useState("treatment", () => gql);

	return { links: useState(() => links), getApiDataLinks };
}

function query() {
	return `
	query {
		links(pagination: { limit: 1000 }, sort: "top:DESC") {
		  data {
			attributes {
			  top
			  href
			  title
			  short
			  description
			  partnership
			  updatedAt
			  alt
			  imgs {
				data {
				  attributes {
					name
					alternativeText
					width
					height
					size
					ext
					url
				  }
				}
			  }
			  tags {
				data {
				  attributes {
					title
				  }
				}
			  }
			}
		  }
		}
	  }
	 `;
}
