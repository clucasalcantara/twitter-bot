const twit = require('twit')
const twitterConfig = require('./config/twitter.js')

const Twitter = new twit(twitterConfig)
