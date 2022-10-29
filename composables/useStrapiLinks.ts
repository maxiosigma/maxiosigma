export default function () {
	//const links = [{ ferd: null, sh: null }];
	////links.value = [];
	////const graphql = useStrapiGraphQL();
	////graphql(query()).then((qry) => {
	////	const result = qry?.data?.links?.data?.map((it) => {
	////		return {
	////			ferd: useCripty(it?.attributes?.href),
	////			sh: it?.attributes?.short,
	////		};
	////	});
	////	links.push(result);
	////});
	////|| []
	////console.log(links);
	////const useX = () => useState('x')
	//const result = useState("links", () => links);
	//return result;
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

//const foo = ref(null);
//someAsyncFn().then(value => foo.value = value);

//const getApiDataLinks = async () => {
//	try {
//		const graphql = useStrapiGraphQL();

//		graphql(query()).then((qry) => {
//			console.log();

//			links.value = qry?.data.links.data.map((it) => {
//					return {
//					ferd: useCripty(it.attributes?.href),
//					sh: it.attributes?.short,
//				};
//			});

//		});

//		//const gql = (await graphql(query())).data.links.data;

//		////console.log(gql);

//		//links.value = gql.map((it) => {
//		//	const link = it.attributes;

//		//	return {
//		//		ferd: useCripty(link?.href),
//		//		sh: link?.short,
//		//	};
//		//});

//		//.reduce((sum, it) => {
//		//	const link = it.attributes;

//		//	//if (!!link?.partnership && !!link?.title && !!link?.description && !!link?.short)
//		//	sum.push({
//		//		//title: link.title,
//		//		//description: link.description,
//		//		//images: link?.imgs.data.map((img) => img?.attributes),
//		//		//tags: link?.tags?.data?.map((tag) => tag?.attributes?.title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
//		//		//top: link?.top,

//		//		link: useCripty(link?.href),
//		//		short: link?.short,
//		//	});

//		//	return sum;
//		//}, []);
//	} catch (error) {}
//};

//if (process.server && !process.browser) {}
//.reduce((sum, it) => {
//	const link = it.attributes;

//	//if (!!link?.partnership && !!link?.title && !!link?.description && !!link?.short)
//	sum.push({
//		title: link?.title,
//		description: link?.description,
//		images: link?.imgs?.data.map((img) => img?.attributes),
//		short: link?.short,
//		tags: link?.tags?.data?.map((tag) => tag?.attributes?.title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
//		top: link?.top,
//	});

//	return sum;
//}, []);
//return useState("treatment", () => gql);
