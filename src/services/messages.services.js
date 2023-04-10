
const Messages = require("../models/messages.models");

class MessagesServices {
  static async create(data) {
    try {
      const result = await Messages.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Messages.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MessagesServices;