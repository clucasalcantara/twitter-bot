const Twit = require('twit')
const {twitterKey, twitterQueryParams, twitterTime} = require('./config')
const {searchTweets, retweets} = require('./actions')

const twit = new Twit(twitterKey)

const runRetweet = () => {
  searchTweets(twit, twitterQueryParams)
   .then(data => retweets(twit, data))
   .catch(err => console.log(err))
}

runRetweet()

setInterval(runRetweet, twitterTime.RETWEETS_WAIT_TIME_MILLESECONDS)
