export default function () {
    //{ ferd: null, sh: null }
    const links = ref([])
    //const graphql = useStrapiGraphQL()
    //const qrd = graphql(query())
    //console.log(graphql)

    const getApiDataLinks = async () => {
        try {
            const graphql = useStrapiGraphQL()
            const qrd = await graphql(query())

            const result = qrd.data.links.data.map((it) => {
                return {
                    ferd: useCripty(it?.attributes?.href),
                    sh: it?.attributes?.short,
                }
            })

            useNuxtApp().payload.data = {
                ...useNuxtApp().payload.data,
                links: result,
            }

            links.value = useNuxtApp().payload.data?.links
        } catch (error) {
            //links.value = useNuxtApp().payload.data?.links;
        }
    }

    return { links: useState(() => links), getApiDataLinks }
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
	 `
}

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
