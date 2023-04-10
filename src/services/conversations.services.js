const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");
const Participants = require("../models/userConversation.models");
const Mensages = require("../models/messages.models")

class ConversationServices {
  static async create(data) {
    try {
      const result = await Conversations.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Conversations.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const result = await Conversations.findByPk(id, {
        include: [
          {
            model: Participants,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
              model: Users,
              attributes: ["firstName", "email"],
            },
          },
          {
            model: Mensages,
            attributes: ["id", "content", "usersId"],
          },
        ],
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteConversation(id){
    try {
      const result = await Conversations.destroy({
        where:{id}
      })
      return result;
    } catch (error) {
            throw error;
    }

  }
}

module.exports = ConversationServices;