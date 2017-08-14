const searchTweets = (twitter, queryParam) => {
  return new Promise((resolve, reject) => {
    twitter.get('search/tweets', queryParam, (err, data, response) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = searchTweets
