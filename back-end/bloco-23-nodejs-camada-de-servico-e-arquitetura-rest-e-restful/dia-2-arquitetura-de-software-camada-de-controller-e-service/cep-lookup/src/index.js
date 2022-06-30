const express = require('express');
require('express-async-errors');
const cepRoutes = require('./Routes/cepRoutes');

const app = express();
app.use(express.json());

app.use('/cep', cepRoutes);

app.use('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.use((err, _req, res, _next) => {
  const { name, message, code } = err;
  switch (name) {
    case 'ValidationError':
      res.status(code).json({ code, message });
      break;
    case 'NotFoundError':
      res.status(code).json({ code, message });
      break;
    default: 
      console.warn(err);
       res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('rodando na porta 3000'));
