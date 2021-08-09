const express = require("express");
const path = require("path");
const helmet = require("helmet");

const { logger } = require("./middlewares/logger");
const baseRouter = require("./routes/base.router");
const infoRouter = require("./routes/info.router");

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(process.cwd(), 'views'))

const PORT = process.env.PORT || 3000;

// middlewares
app.use(logger);
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", baseRouter);
app.use("/info", infoRouter);

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}!`);
});
