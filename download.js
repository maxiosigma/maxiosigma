//const fetch = require('node-fetch')
const prismic = require('@prismicio/client')
const { apiEndpoint } = require('./sm.json')
const repoName = ''
const accessToken = require('dotenv').config().parsed.PRC_CDA_ACCESS_TOKEN

console.log(apiEndpoint)
