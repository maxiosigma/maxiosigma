export const state = () => ({
	designerWorks: designerWorks(),
	developerWorks: developerWorks(),
	links: links(),
})

function designerWorks() {
	return `
			query designerWork {
				designerWorks {
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

function developerWorks() {
	return `
		query developerWorks {
			developerWorks {
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
			links (pagination: {limit: 2000}) {
				data {
					attributes {
						title
						short
						href
						name
						description
						alt
						updatedAt
					}
				}
			}
		}
	`
}
