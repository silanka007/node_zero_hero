const path = require('path')

function getIndex(req, res) {
  res.render('index', {
    title: "Home page",
    heading: "My skiing vacation in Germany",
  })
}

module.exports = {getIndex}
