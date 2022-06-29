const express = require('express');
const cepRoutes = require('./Routes/cepRoutes');
require('express-async-errors');

const app = express();
app.use(express.json());

app.use('/cep', cepRoutes);

app.use('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.listen(3000, () => console.log('rodando na porta 3000'));