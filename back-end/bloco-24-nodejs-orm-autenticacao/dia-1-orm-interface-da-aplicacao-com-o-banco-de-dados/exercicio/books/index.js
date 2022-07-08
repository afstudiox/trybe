const express = require('express');
const booksController = require('./src/controllers/BooksController'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get(`/`, booksController.list);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));