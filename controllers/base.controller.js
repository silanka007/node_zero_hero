const path = require('path')

function getIndex(req, res) {
  // return res.sendFile(path.resolve(__dirname, "../index.html"))
  // return res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
  res.render('index.html')
}

module.exports = {getIndex}
