//import gql from 'graphql-tag'

export const state = () => ({
   developerWorks: developerWorks(),
   designerWorks: designerWorks(),
   publics: publics(),
   links: links(),
   uiMenu: (item) => uiMenu(item),
   works: works(),
});

function designerWorks(limit = 200) {
   return `
		query designerWork {
			designerWorks(pagination: { limit: ${limit} }, sort: "top:DESC") {
				data {
					attributes {
						title
						description
						link
						media {
							data {
								attributes {
									name
									alternativeText
									width
									height
									ext
									size
									url
									provider
								}
							}
						}
						assets {
							technologies {
								data {
									attributes {
										title
									}
								}
							}
							fonts {
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
						date
					}
				}
			}
		}
	`;
}

function developerWorks(limit = 200) {
   return `
		query developerWorks {
			developerWorks(pagination: { limit: ${limit} }, sort: "top:DESC") {
				data {
					attributes {
						title
						description
						link
						media {
							data {
								attributes {
									name
									alternativeText
									width
									height
									ext
									size
									url
									provider
								}
							}
						}
						assets {
							technologies {
								data {
									attributes {
										title
									}
								}
							}
							fonts {
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
						date
					}
				}
			}
		}
	`;
}

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
