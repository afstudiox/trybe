const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('Você esta acessando a rota principal "/"'));

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res) => res.status(200).json({ message: 'pong'}));

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
app.post('/hello', (req,res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}`});
})

app.listen(PORT, () => console.log('Rodando na porta 3002'));