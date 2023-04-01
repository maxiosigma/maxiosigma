export default async function (slug = 'nav') {
    const graphql = useStrapiGraphQL()
    const gql = (await graphql(query(slug)))?.data
    const result = gql.renderNavigation
    return result

    //return ["nav", "footer", "social"].reduce(async (sum, it) => {
    //	const gql = (await graphql(query(it))).data.renderNavigation;
    //	sum = { ...(await sum), [it]: gql };
    //	return sum;
    //}, {});
}

function query(slug = 'nav') {
    return `
	query {
		renderNavigation(navigationIdOrSlug: "${slug}", type: FLAT, menuOnly: false) {
		  title
		  class
		  order
		  path
		  type
		  icon
		  top
		  externalPath
		  uiRouterKey
		  menuAttached
		  parent {
			uiRouterKey
			parent {
			  uiRouterKey
			  parent {
				uiRouterKey
				parent {
				  uiRouterKey
				}
			  }
			}
		  }
		}
	  }	  
	 `
}
