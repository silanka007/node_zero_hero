const express = require("express");
const { logger } = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(logger);

app.use(express.json())

app.get("/", (req, res) => {
  res.send("request successful. here is your response...");
});

app
  .route("/info")
  .get((req, res) => {
    const info = {
      name: "Paul Silanka",
      stack: "FullStack",
      tech: ["JavaScript", "Python"],
    };
    res.status(200).json(info);
  })
  .post((req, res) => {
    const body = req.body;
    return res.status(201).json(body)
  });

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}!`);
});
