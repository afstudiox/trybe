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

// Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (!age || age < 18) return res.status(401).json({ message: 'Unauthorized'});
  res.status(200).json({ message: `Hello, ${name} !`});
})

app.listen(PORT, () => console.log('Rodando na porta 3002'));