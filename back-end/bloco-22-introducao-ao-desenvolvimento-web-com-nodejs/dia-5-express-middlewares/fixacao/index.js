/* index.js */
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

const authMiddleware = require('./auth-middleware');
const devConsole = require('./devConsole');
const recipesRouter = require('./recipesRouter');

app.use(cors())
app.use(bodyParser.json());
app.use(authMiddleware, devConsole);

app.use('/', recipesRouter);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001!');
});
