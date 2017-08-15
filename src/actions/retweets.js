const {isEmpty, randomNumber} = require('../helpers')

const retweet = (twitter, data) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(data.statuses)) return Promise.reject(new Error('Array is empty'))

    twitter.post('statuses/retweet/:id',
      {id: data.statuses[randomNumber(10, 0)].id_str},
      (err, data, response) => {
        if (err) return reject(err)

        resolve(true)
      })
  })
}

module.exports = retweet
