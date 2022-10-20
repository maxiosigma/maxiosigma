<template>
	<div class="w-screen h-screen bg-black"></div>
</template>

<script setup>
	onMounted(async () => {});

	const graphql = useStrapiGraphQL();

	const restaurant = await graphql(`
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
									caption
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
					}
				}
			}
		}
	`);

	console.log(restaurant);
</script>

<style lang="scss"></style>
