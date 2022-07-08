const booksService = require('../services/BooksService');

const booksController = {
  list: async (req, res) => {
    const books = await booksService.list();
    console.log('controller', books);
    res.status(200).json(books);
  },
  getById: async (req,res) => {
    const { id } = req.params;
    console.log(id);
    const book = await booksService.getById(id);
    if (!book) return res.status(404).json({ message: "Book not found"});
    res.status(200).json(book);
  }
}

module.exports = booksController;