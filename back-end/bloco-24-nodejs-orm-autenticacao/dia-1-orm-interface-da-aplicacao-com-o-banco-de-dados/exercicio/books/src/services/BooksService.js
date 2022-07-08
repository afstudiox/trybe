const { Book } = require('../database/models');

const booksServices = {
  list: async () => {
    const books = await Book.findAll();
    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id)
  }
}

module.exports = booksServices;