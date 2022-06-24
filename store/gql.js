//import gql from 'graphql-tag'

export const state = () => ({
	developerWorks: developerWorks(),
	designerWorks: designerWorks(),
	portfolio: portfolio(),
	links: links(),
	menu: menu(),
})

function designerWorks(page = 1, limit = 200) {
	return `
		query designerWork {
			designerWorks(pagination: { page: ${page}, limit: ${limit} }) {
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
	`
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
	`
}

function links() {
	return `
		query {
			links(pagination: { limit: 2000 }) {
				data {
					attributes {
						title
						short
						href
						name
						description
						partnership
						alt
						updatedAt
						top
					}
				}
			}
		}
	`
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
	`
}

function menu() {
	return `
		query {
			menusMenus{
				data {
					attributes {
						title
						slug
						items(pagination: { limit: 200}) {
							data {
								attributes {
									title
									target
									url
									order
									parent {
										data {
											attributes {
												title
												target
												url
												order
												parent {
													data {
														attributes {
																title
																target
																url
																order
																parent {
																	data {
																		attributes {
																			parent {
																				data {
																					attributes {
																						title
																						target
																						url
																						order
																					}
																				}
																			}
																		}
																	}
																}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`
}
