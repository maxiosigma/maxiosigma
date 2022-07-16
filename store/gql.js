//import gql from 'graphql-tag'

export const state = () => ({
   developerWorks: developerWorks(),
   designerWorks: designerWorks(),
   portfolio: portfolio(),
   links: links(),
   navbar: menu(1),
   footbar: menu(2),
   social: menu(3),
});

function designerWorks(page = 1, limit = 200) {
   return `
		query designerWork {
			designerWorks(pagination: { limit: ${limit} }) {
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

function developerWorks(page = 1, limit = 200) {
   return `
		query developerWorks {
			developerWorks(pagination: { page: ${page}, limit: ${limit} }) {
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

// page: ${page},
function links(page = 1, limit = 2000) {
   return `
		query {
			links(pagination: { limit: 200 }, sort: "top:DESC") {
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

function portfolio() {
   return `
		query {
			page (id: 1) {
				data{
					attributes {
						Title
						Imgs {
							data {
								attributes {
									name
									width
									height
									ext
									size
									url
								}
							}
						}
					}
				}
			}
		}
	`;
}

function menu(id = 1, limit = 50) {
   return `
		query {
			menusMenu(id: ${id}) {
				data {
					attributes {
						title
						slug
						items(pagination: { limit: ${limit}}) {
							${parentMenu()}
						}
					}
				}
			}
		}
	`;
}

function parentMenu(count = 1, depth = 3) {
   const child = depth !== count ? parentMenu((count += 1)) : null;

   return `
			data {
				attributes {
					url
					title
					order
					target
					hidden
					class
					icon
					${!!child ? `parent { ${child} }` : ""}
			  }
			}
		`;
}

//data {
//	attributes {
//		title
//		target
//		url
//		order
//		hidden
//		footer
//		class
//		parent {
//			data {
//				attributes {
//					title
//					target
//					url
//					order
//					parent {
//						data {
//							attributes {
//									title
//									target
//									url
//									order
//									parent {
//										data {
//											attributes {
//												parent {
//													data {
//														attributes {
//															title
//															target
//															url
//															order
//														}
//													}
//												}
//											}
//										}
//									}
//							}
//						}
//					}
//				}
//			}
//		}
//	}
//}
