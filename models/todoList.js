"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //
    static associate(models) {
      // 20. add belongs to user model relation
      todoList.belongsTo(models.user);
    }
  }
  todoList.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todoList",
    }
  );
  return todoList;
};
