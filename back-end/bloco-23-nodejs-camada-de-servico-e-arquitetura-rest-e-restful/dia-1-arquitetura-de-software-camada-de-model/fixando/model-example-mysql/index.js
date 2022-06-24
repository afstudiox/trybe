const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const Authors = require('./models/Authors');


app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();
  res.status(200).json(authors);
});

app.listen(port, () => console.log(`Ouvindo a porta ${port}!`))