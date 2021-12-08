"use strict";
const { Model } = require("sequelize");
const todoList = require("./todoList");
module.exports = (sequelize, DataTypes) => {
  //1. Class user created and user.init() to initialize it.
  //2. has 2 arguments:
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 19. Add hasMany() relation
      user.hasMany(models.todoList);
    }
  }
  user.init(
    //2.1 Model attributes object. Here we specify which attributes
    // the model has and their dataType. These will be later mapped into
    // columns in our table.
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.INTEGER,
    },
    //2.2 Another object with the sequelize object and the model name.
    // Sequelize will automatically pluralize this name to name the table,
    // so our table in the database will be called users.
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
