// hello-msc/index.js
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id',Author.findById);
app.post('/authors', Author.create);

app.use(errorMiddleware);

const APP_PORT = Number(process.env.APP_PORT || 3000);

app.listen(APP_PORT, () => console.log(`Example app listening on port ${APP_PORT}!`))