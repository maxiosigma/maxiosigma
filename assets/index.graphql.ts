export default {
    links: () => `
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
						tags(pagination: { limit: 1000 }, sort: "top:DESC") {
							data {
							  attributes{
								title
								slug
							  }
							}
						}
					}
				}
			}
		}
	`,
    publics: () => `
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
	`,
    menu: (slug = '') => `
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
		}
	`,
    works: () => `
	query {
		works(sort: "top:DESC", pagination: { limit: 2000 }) {
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
				work_type {
				  data {
					attributes {
					  title
					  slug
					}
				  }
				}
				work_categories {
				  data {
					attributes {
					  title
					  slug
					}
				  }
				}
				work_technologies {
				  data {
					attributes {
					  title
					  slug
					}
				  }
				}
				work_fonts {
				  data {
					attributes {
					  title
					  slug
					}
				  }
				}
				work_tags {
				  data {
					attributes {
					  title
					  slug
					}
				  }
				}
			  }
			}
		  }
		}
	  }	  
	`,
}
