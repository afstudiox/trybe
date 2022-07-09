const { Book } = require('../database/models');

const booksService = {
  list: async () => {
    const books = await Book.findAll({
      order:[ 
      ['title', 'ASC']]});
    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id)
    return book;
  },
  getByAuthor: async (author) => {
    const books = await Book.findAll({
      where: {
        author: author},
      order:[
        ['title', 'ASC']
      ]
    });
    return books;
  },
  create: async ({title,  author, pageQuantity}) => {
    const book = await Book.create({title,  author, pageQuantity});
    return book;
  },
  update: async ({title, author, pageQuantity},id) => {
    const book = await Book.update({title, author, pageQuantity},{ where: id });
    return book;
  },
  delete: async (id) => {
    const book = await Book.findByPk(id);
    book.destroy();
  }
}

module.exports = booksService;