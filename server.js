const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const start = Date.now()
  console.log('res: ', res.statusCode)
  next()
  const duration = Date.now() - start;
  console.log(`${req.method} - ${req.url} - ${res.statusCode} : ${duration}ms`)
})

app.get('/', (req, res) => {
  res.send("request successful. here is your response...")
})

app.get('/info', (req, res) => {
  const info = {
    name: "Paul Silanka",
    stack : "FullStack",
    tech: ["JavaScript", "Python"]
  }
  res.status(206).json(info)
})


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}!`)
})