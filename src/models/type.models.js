const { DataTypes} = require("sequelize");
const db = require("../utils/database");

const Type = db.define("type",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },

    name : {
        type: DataTypes.STRING(30),
        allowNull: false,
       
    }
})

module.exports = Type;