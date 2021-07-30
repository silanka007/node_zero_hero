const {get} = require('https')
const {name} = require('./test')


// get: specific for get requests, otherwise use request
get('https://jsonplaceholder.typicode.com/users/1', (resp) => {
  let data = ""
  resp.on('data', chunk => {
    data += chunk
  })
  resp.on('end', () => {
    data = JSON.parse(data)
    console.log({data})
  })
})

console.log('required: ', require.cache)