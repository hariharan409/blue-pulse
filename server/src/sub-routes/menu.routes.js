const express = require("express");
const app = express.Router();
const menuController = require("@/controllers/menu.controller");
const {authenticateToken} = require("@/middleware/auth");

app.get("/get-sidebar-menu",authenticateToken,menuController.getSideBarMenu);

module.exports = app;