"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Category, { foreignKey: "category_id" });
    }
  }
  Question.init(
    {
      description: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
