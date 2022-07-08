const { Book } = require('../database/models');

const booksServices = {
  list: async () => {
    const books = await Book.findAll();
    return books;
  }
}

module.exports = booksServices;