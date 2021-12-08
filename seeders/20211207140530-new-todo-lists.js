"use strict";

// Seeding a database is a process in which
// an initial set of data is provided to a database. It's a nice
// way to populate our tables with data after we create them. To
// do so we must first generate the skeleton of a seed file using
// our CLI. Run:

// $ npx sequelize-cli seed:generate --name some-todoLists

module.exports = {
  // up specifies what will happen when we run the seed
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Work List",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Personal List",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grocery List",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Christmas List",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Birthday List",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dinner List",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  // Down specifies what will happen if we revert or undo this action.
  //up and down cancel each other out (revert to initial state)

  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
