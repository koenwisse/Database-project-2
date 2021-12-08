"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 21. Syntax for relation one to many User <-> todoList
    // 21a. We need to declare new columns here in our database tables
    // to tie lists to user by passing extra info to addColumns
    // sequelize know now that this is not any type of column but one that creates
    // a relationship
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      // 21b. reference here foreign key for users (=extra column
      references: {
        // model making references to users
        model: "users",
        // user with "id" 1 or 2 or 3
        key: "id",
      },
      // 21c. when updating table they also need to updated in other table
      // (cascade)
      onUpdate: "CASCADE",
      // 21d. what should i do on delete:
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
