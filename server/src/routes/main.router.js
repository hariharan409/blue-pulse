const express = require("express");
const app = express.Router();
const menuRouter = require("@/sub-routes/menu.routes");

app.get("/", (_,res) => res.send({ response: "blue pulse api is ready to serve" }).status(200));

app.use("/menu",menuRouter);

module.exports = app;