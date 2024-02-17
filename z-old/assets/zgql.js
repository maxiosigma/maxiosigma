export default {
    links: () => `
query Links {
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
}`,
}
