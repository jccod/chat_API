const Users = require("../models/users.models");
const Participants = require("../models/userConversation.models");
const Conversations = require("../models/conversations.models")

class UserServices {
  static async create(data) {
    try {
      const result = await Users.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const user = await Users.findAll({
        attributes: ["id", "email", "password"],
        
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(email) {
    try {
      const result = await Users.findOne({
        where: { email },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getOneUser(id){
    try {
      
      const result = await Users.findByPk(id,{
     
        attributes: ["id", "userName", "email"],
        include: [
         {
           model: Participants,
           attributes: { exclude: ["createdAt", "updatedAt"] },
            include:{
              model: Conversations
            }
         },
         
        ],
      });
      return result
    } catch (error) {
      throw error
    }
  }

}

module.exports = UserServices;