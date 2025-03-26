const express = require("express");
const app = express.Router();
const menuController = require("@/controllers/menu.controller");

app.get("/get-sidebar-menu",menuController.getSideBarMenu);

module.exports = app;