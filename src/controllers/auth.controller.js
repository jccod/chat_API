const UserServices = require("../services/user.services");
const bcrypt = require("bcrypt");

const userLogin  = async (req, res, next) =>{

    try{
        const {email, password} = req.body;

        const user = await UserServices.getUser(email);

        if(!user){
            return next({
                status:401,
                message: "invalid email",
                error: "User not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            return next({
              status: 401,
              message: "Credenciales inválidas",
              error: "Invalid password",
            });
        }

          const { id, lastName, userName } = user;
           res.json({
             status: "succes",
             id,
             lastName,
             userName,
             email,
           });

    }catch(error){
        next (error)
    }

}

module.exports = {
    userLogin
}