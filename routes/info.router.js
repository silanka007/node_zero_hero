const express = require("express");

const infoController = require('../controllers/info.controller')

const infoRouter = express.Router();

infoRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`)
  next()
})

infoRouter.get("/", infoController.getInfo);
infoRouter.post("/", infoController.postInfo);

module.exports = infoRouter;
