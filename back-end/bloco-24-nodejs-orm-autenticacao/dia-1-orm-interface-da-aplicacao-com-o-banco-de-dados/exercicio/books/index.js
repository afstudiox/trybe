const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get(`/`, (req,res) => {
  Book.findAll();
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));