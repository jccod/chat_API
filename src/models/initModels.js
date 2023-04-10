const Conversations = require("./conversations.models");
const Messages = require("./messages.models");
const UserConversations = require("./userConversation.models");
const Users = require("./users.models");

const initModel = () => {
  
  Users.hasMany(Messages, { foreignKey: "userId" });
  Messages.belongsTo(Users, { foreignKey: "userId" });
  Conversations.hasMany(Messages, { foreignKey: "conversationsId" });
  Messages.belongsTo(Conversations, { foreignKey: "conversationsId" });
  Users.hasMany(UserConversations, { foreignKey: "userId" });
  UserConversations.belongsTo(Users, { foreignKey: "userId" });
  Conversations.hasMany(UserConversations, { foreignKey: "conversationId" });
  UserConversations.belongsTo(Conversations, {
    foreignKey: "conversationId",
  });

};

module.exports = initModel;