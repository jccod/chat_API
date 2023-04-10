const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const UserConversations = db.define("userconversations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
});
module.exports = UserConversations;