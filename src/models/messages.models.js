const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Messages = db.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  usersId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "users_id",
  },
  conversationsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversations_id",
  },
});
module.exports = Messages;
