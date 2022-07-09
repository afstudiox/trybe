'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: "Magazine",
        description: "Loja que tem eletros."
      },
      {
        name: 'Polishop',
        description: "Novas idéias, facilitam sua vida."
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Stores", null, {});
  }
};
