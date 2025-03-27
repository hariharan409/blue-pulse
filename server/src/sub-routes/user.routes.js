const express = require("express");
const app = express.Router();
const userController = require("@/controllers/user.controller");
const {authenticateToken} = require("@/middleware/auth");

app.get("/login",authenticateToken,userController.userLogin);

module.exports = app;