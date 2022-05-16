import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import * as prismic from '@prismicio/client'

const env = require('dotenv').config().parsed

// Fill in your repository name
export const repositoryName = 'maxiosigma'

const prismicClient = prismic.createClient(prismic.getEndpoint(repositoryName), {
	// If your repo is private, add an access token
	accessToken: env.PRC_CDA_ACCESS_TOKEN,

	// This defines how you will structure URL paths in your project.
	// Update the types to match the Custom Types in your project, and edit
	// the paths to match the routing in your project.
	//
	// If you are not using a router in your project, you can change this
	// to an empty array or remove the option entirely.
	routes: [
		{
			type: 'page',
			path: '/:uid',
		},
	],
})

export const client = new ApolloClient({
	link: new HttpLink({
		uri: prismic.getGraphQLEndpoint(repositoryName),
		fetch: prismicClient.graphqlFetch,
		useGETForQueries: true,
	}),
	cache: new InMemoryCache(),
})
