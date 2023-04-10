const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Conversations = db.define("conversations",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    title :{
        type: DataTypes.STRING(50),
        allowNull: false,

    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "type_id",

    },
    usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "users_id"

    },

},
{
    timestamps: false,
    updatedAt: false,
    
});
module.exports = Conversations;