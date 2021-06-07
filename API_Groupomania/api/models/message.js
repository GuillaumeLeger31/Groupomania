"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    
    static associate(models) {
      
      models.Message.belongsTo(models.User, {
        foreignKey: {
        name: "idUsers",
        allowNull: false,
        },
      });
    }
  }
  Message.init(
    {
      idUsers: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
