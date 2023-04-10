const {Router} = require("express");
const route = Router();
const userController = require("../controllers/user.controller");
const {createUserValidator} = require("../validator/user.validator")

route.post("/api/v1/user", createUserValidator, userController.createUser);
route.get("/api/v1/user", userController.getAllUsers);
route.get("/api/v1/user/convertations/:id", userController.getConversations);

module.exports =  route;