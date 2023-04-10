const { Router } = require("express");
const route = Router();
const conversationsController = require("../controllers/conversation.controller");

route.post(
  "/api/v1/conversations",
  conversationsController.createConversations
);
route.get("/api/v1/conversations", conversationsController.getAllConversations);
route.get("/api/v1/conversations/participants/:id", conversationsController.getOneConversation);
route.delete("/api/v1/eliminar/conversations/:id", conversationsController.deleteConversation);

module.exports = route;