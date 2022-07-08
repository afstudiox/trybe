'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    const BooksTable = queryInterface.createTable("Books", {
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
    })
    return BooksTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Books");
  }
};
