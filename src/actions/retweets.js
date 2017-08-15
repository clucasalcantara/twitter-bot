const isEmpty = require('../helpers/array')

let indexData = 0

const retweet = (twitter, data) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(data.statuses)) return Promise.reject(new Error('Array is empty'))

    twitter.post('statuses/retweet/:id',
      {id: data.statuses[indexData].id_str},
      (err, data, response) => {
        if (err) {
          indexData++
          return reject(err)
        }

        if (response) {
          indexData = 0
          resolve(true)
        }
      })
  })
}

module.exports = retweet
