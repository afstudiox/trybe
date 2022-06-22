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

app.listen(PORT, () => console.log('Rodando na porta 3002'));