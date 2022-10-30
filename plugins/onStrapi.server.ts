export default defineNuxtPlugin(async (nuxtApp) => {
	//try {
	//} catch (error) {
	//	console.log("Error: ", error);
	//}
	const graphql = useStrapiGraphQL() ?? null;
	const qrd = await graphql(query());
	const result = qrd.data.links.data.map((it) => {
		return {
			ferd: useCripty(it?.attributes?.href),
			sh: it?.attributes?.short,
		};
	});

	useNuxtApp().payload.data = {
		...useNuxtApp().payload.data,
		links: result,
	};

	//useRuntimeConfig()

	return {};
});

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
