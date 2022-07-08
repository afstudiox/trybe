const booksService = require('../services/BooksService');

const booksController = {
  list: async (req, res) => {
    const books = await booksService.list();
    res.status(200).json(books);
  }
}

module.exports = booksController;