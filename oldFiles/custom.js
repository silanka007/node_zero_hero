const axios = require('axios')


axios.get('https://wwwww.google.com')
  .then(resp => {
    console.log(resp.data)
  })
  .catch(err => {
    console.log('address does not exist')
  })
