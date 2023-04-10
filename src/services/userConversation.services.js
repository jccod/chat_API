const UserConversation =require("../models/userConversation.models");

class UserConversationServices {
  static async createPairConversation(data) {
    try {
      const result = await UserConversation.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await UserConversation.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports= UserConversationServices