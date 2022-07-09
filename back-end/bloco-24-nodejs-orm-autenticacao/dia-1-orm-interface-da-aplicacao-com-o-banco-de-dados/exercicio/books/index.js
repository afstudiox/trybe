const express = require('express');
const booksController = require('./src/controllers/BooksController'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get(`/books`, booksController.list);
app.get(`/books/:id`, booksController.getById);
app.post(`/books`, booksController.create);
app.put(`/books/:id`, booksController.update);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));