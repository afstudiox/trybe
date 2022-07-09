const booksService = require('../services/BooksService');

const booksController = {
  list: async (req, res) => {
    const { author } = req.body;
    const books = [];
    if (author !== undefined) {
      books.push(await booksService.getByAuthor(author));
    } else {
      books.push(await booksService.list());
    }
    res.status(200).json(books);
  },
  getById: async (req,res) => {
    const { id } = req.params;
    const book = await booksService.getById(id);
    if (!book) return res.status(404).json({ message: "Book not found"});
    res.status(200).json(book);
  },
  getByAuthor: async (req,res) => {
    const { author } = req.body;
    const books = booksService.list(author); 
    res.status(200).json(books);
  },
  create: async (req,res) => {
    const {title,  author, pageQuantity} = req.body;
    const book = await booksService.create({title,  author, pageQuantity});
    res.status(200).json({ message: "Book Created!"});
  },
  update: async(req,res) => {
    const { id } = req.params;
    const {title,  author, pageQuantity} = req.body;
    const book = await booksService.getById(id);
    if (!book) return res.status(404).json({ message: "Book not found"});
    await booksService.update({title,  author, pageQuantity},{id});
    res.status(200).json({ message: "Book Updated!"}) 
  },
  delete: async (req,res) => {
    const { id } = req.params;
    await booksService.delete(id)
    res.status(200).json({ message: "Book Deleted!"}) 
  }
}

module.exports = booksController;