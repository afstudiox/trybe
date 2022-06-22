const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const { error } = require('console');
const { fdatasyncSync } = require('fs');
const authMiddleware = require('./authMiddleware');
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
  validateToken();
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

// ======================================================================================================
// Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization.
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' }.
app.use(authMiddleware);

// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', async (req, res) => {
  try {
    const readSimpson = await fs.readFile('./simpsons.json');
    if (!readSimpson) return res.status(500).json();
    const simpsons = JSON.parse(readSimpson); 
    res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
})

// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
app.get('/simpsons/:id', async (req, res) => {
  try {
    const readSimpson = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(readSimpson); 
    const { id } = req.params;
    const simpson = simpsons.find((s) => s.id == Number(id));
      if (!simpson) return res.status(404).json({ message: 'simpson not found'});
    return res.status(202).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
})

// Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. 
// Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.
app.post('/simpsons', async (req, res) => {
  try {
    const readSimpson = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(readSimpson); 
    const { id, name } = req.body;
    const simpson = simpsons.find((s) => s.id == Number(id));
      if(simpson) return res.status(409).json({ message: `o id ${id} already exist`});
    const newSimpson = {id: id, name: name};
    simpsons.push(newSimpson);
    const simpsonsToStr = JSON.stringify(simpsons);
    await fs.writeFile('./simpsons.json', simpsonsToStr);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

// Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email, password, firstName e phone.
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' }.
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK, 
// e o JSON { token: '<token-aleatorio>' }.
app.post ('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;
    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields'});
    }
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({token});

  } catch (error) {
    return res.status(500).end();
  }
})

app.listen(PORT, () => console.log('Rodando na porta 3002'));