const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const { error } = require('console');
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

// Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
})

// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', async (req, res) => {
  const readSimpson = await fs.readFile('./simpsons.json');
  if (!readSimpson) return res.status(500).json();
  const simpsons = JSON.parse(readSimpson); 
  res.status(200).json(simpsons);
})

// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
app.get('/simpsons/:id', async (req, res) => {
  const readSimpson = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(readSimpson); 
  const { id } = req.params;
  const simpson = simpsons.find((s) => s.id == Number(id));
    if (!simpson) return res.status(404).json({ message: 'simpson not found'});
  res.status(200).json(simpson);
})

app.listen(PORT, () => console.log('Rodando na porta 3002'));