const express = require("express");
const app = express.Router();
const menuRouter = require("@/sub-routes/menu.routes");
const userRouter = require("@/sub-routes/user.routes");

app.get("/", (_,res) => res.send({ response: "blue pulse api is ready to serve" }).status(200));

app.use("/menu",menuRouter);
app.use("/user",userRouter);

module.exports = app;