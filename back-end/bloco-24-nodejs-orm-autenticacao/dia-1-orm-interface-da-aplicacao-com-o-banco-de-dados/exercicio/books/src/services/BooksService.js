const { Book } = require('../database/models');

const booksServices = {
  list: async () => {
    const books = await Book.findAll();
    console.log('service', books)
    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id)
    return book;
  }
}

module.exports = booksServices;