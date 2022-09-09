//import gql from 'graphql-tag'

export const state = () => ({
   uiMenu: (item) => uiMenu(item),
   publics: publics(),
   links: links(),
   works: works(),
});

function publics() {
   return `
		query {
			publicateds(pagination:{limit: 2000}) {
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

function links(limit = 2000) {
   return `
		query {
			links(pagination: { limit: ${limit} }, sort: "top:DESC") {
				data {
					attributes{
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

function uiMenu(slug) {
   return `
	query {
		renderNavigation(
			navigationIdOrSlug: "${slug}"
			type: FLAT
			menuOnly: false
		){
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
	}`;
}

function works() {
   return `
		query {
			works (sort: "top:DESC", pagination: {limit: 2000}){
		    data {
		      attributes {
		        title
		        top
		        type
		        media {
		          data {
		            attributes {
					  provider
					  provider_metadata
					  formats
		              url
		              alternativeText
					  name
					  height
					  width
					  hash
					  ext
					  mime
		            }
		          }
		        }
		        description
		        link
		        date
		        assets {
		          technologies{
		            data {
		              attributes {
		                title
		              }
		            }
		          }
		          fonts{
		            data {
		              attributes {
		                title
		              }
		            }
		          }
		          models {
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
		}`;
}
