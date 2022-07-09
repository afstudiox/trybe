'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Books',
    [
      {
        title: 'Livro 1',
        author: 'Autor 1',
        page_quantity: 200,
        publisher: 'EditoraX',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 2',
        author: 'Autor 2',
        page_quantity: 200,
        publisher: 'EditoraX',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 3',
        author: 'Autor 3',
        page_quantity: 200,
        publisher: 'EditoraX',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),
  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Books', null, {}),
};
