const { Router } = require("express");
const route = Router();
const messagesController = require("../controllers/message.controller");

route.post("/api/v1/messages", messagesController.createMessages);
route.get("/api/v1/messages", messagesController.getAllMessages);

module.exports = route;