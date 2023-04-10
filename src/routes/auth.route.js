const {Router} = require("express");
const  {userLogin} = require("../controllers/auth.controller")
const route = Router();

route.post("/api/v1/auth/login", userLogin);

module.exports= route