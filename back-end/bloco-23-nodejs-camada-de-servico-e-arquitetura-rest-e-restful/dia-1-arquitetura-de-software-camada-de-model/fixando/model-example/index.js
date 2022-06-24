// index.js

const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(400).json({ message: 'Not found' });
  res.status(200).json(author);
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();
  res.status(200).json(books);
})

app.get('/books/:id', async (req,res) => {
  const { id } = req.params;
  const books = await Book.findById(id);
  if(!books) return res.status(400).json({ message: 'Not found'});
  res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});