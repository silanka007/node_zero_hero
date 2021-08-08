const express = require("express");

const { logger } = require("./middlewares/logger");
const baseRouter = require("./routes/base.router");
const infoRouter = require("./routes/info.router");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(logger);
app.use(express.json())


app.get("/", baseRouter);
app.use('/info', infoRouter)
  

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}!`);
});