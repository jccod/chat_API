const {Router} = require("express");
const route = Router();
const userconversationsController = require("../controllers/userConversation.controller")

route.post("/api/v1/participants", userconversationsController.crearParticipants);
route.get("/api/v1/participants", userconversationsController.getParticipants);

module.exports= route;