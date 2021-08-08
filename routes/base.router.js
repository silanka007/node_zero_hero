const express = require("express");
const baseController = require("../controllers/base.controller");

const baseRouter = express.Router();

baseRouter.get("/", baseController.getIndex);

module.exports = baseRouter;
