const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModel = require("./models/initModels");
const userRoute = require("./routes/user.route");
const conversationRoute = require("./routes/conversations.route");
const messageRoute = require("./routes/messages.route");
const userConversation = require("./routes/userConversation.route")
const authRoute = require("./routes/auth.route");
const errorHandlerRoute = require("./routes/errorHandler.route");
initModel();


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const PORT = 8005;

db.authenticate()
.then(()=>{
    console.log("Base de datos conectada");
})
.catch((error)=> console.log(error));

db.sync({alter: true})
.then(()=> console.log("Base de datos sync"))
.catch((error)=> console.log(error))

app.use(authRoute);
app.use(userRoute);
app.use(conversationRoute);
app.use(messageRoute);
app.use(userConversation);

errorHandlerRoute(app);

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})