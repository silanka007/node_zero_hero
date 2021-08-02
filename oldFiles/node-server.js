const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader("Access-Control-Allow-Origin", "http://silanka.com");
  res.setHeader("Content-Type", "text/html");

  const method = req.method;
  const url = req.url;

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      fs.createReadStream("./index.html").pipe(res);
    }
  }
  if (url === "/info") {
    if (method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const info = {
        name: "Paul Silanka",
        stack : "FullStack",
        tech: ["JavaScript", "Python"]
      }
      res.end(JSON.stringify(info))
    }
    if(method === 'POST') {
      /* req.on('data', data => {
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json")
      }) */
      res.statusCode = 201;
        res.setHeader("Content-Type", "application/json")
      req.pipe(res)
    }
  }
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
