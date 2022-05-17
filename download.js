//const fetch = require('node-fetch/src/index').
const prismic = require('@prismicio/client')
const { apiEndpoint } = require('./sm.json')
const repoName = apiEndpoint?.split('/')?.[2]?.split('.')?.[0]
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

const client = prismic.createClient(repoName, { accessToken })

console.log(client)
