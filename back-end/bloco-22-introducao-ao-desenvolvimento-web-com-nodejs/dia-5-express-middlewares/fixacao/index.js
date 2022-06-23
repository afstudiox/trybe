/* index.js */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const authMiddleware = require('./auth-middleware');

app.use(cors())
app.use(bodyParser.json());
app.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// 🚀 No código apresentado acima, remova a função next() do middleware validateName. 
// Faça uma requisição para a rota POST /recipes com um body válido (contendo id, name e price). 
// A requisição retornará algo? Por quê?
const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

// 🚀 Crie uma função validatePrice para validar se o preço foi enviado. 
// O preço deve ser obrigatório, deve ser um número e não pode ser menor que 0. 
// Aplique essa função como um middleware nas rotas POST /recipes e PUT /recipes/:id.
const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (typeof(price) !== 'number' || price <= 0) return res.status(400).json({ message: 'Invalid price!'});
  next();
};

// Rota Geral
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Você esta na rota principal!'});
});

// Rotas GET
app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/drinks', function (req, res) {
  res.json(drinks);
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(400).json({ message: 'Invalid Token !'});
  }
  res.status(200).json({ message: 'Valid Token'});
})

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes
  .filter((recipes) => recipes.name
  .includes(name) && 
  recipes.price < Number(maxPrice) &&
  recipes.price >= Number(minPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', function(req,res) {
  const { name } = req.query;
  const filteredDrinks = drinks
  .filter((drink) => drink.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  if (!recipe) return res.status(404).json({message: 'Recipe not Found'}); 
  res.status(200).json(recipe);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));
  if (!drink) return res.status(404).json({message: 'Drink not Found'}); 
  res.status(200).json(drink);
});

// Rotas POST
app.post('/recipes', validateName, validatePrice, function (req,res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
});

// Rotas PUT
app.put('/recipes/:id',  validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(id));
  if (recipeIndex === -1)return res.status(404).json({ message: 'Recipe not found !'});
  recipes[recipeIndex] = {...recipes[recipeIndex], name, price };
  res.status(204).end();
});

app.put('/drinks/:id',  (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));
  if (drinkIndex === -1)return res.status(404).json({ message: 'Drink not found !'});
  drinks[drinkIndex] = {...drinks[drinkIndex], name, price };
  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(id));
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });
  recipes.splice(recipeIndex, 1);
  res.status(204).end();
});

app.delete('/drinks/:id',  (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));
  if (drinkIndex === -1)return res.status(404).json({ message: 'Drink not found !'});
  drinks.splice(drinkIndex, 1); // ENTENDER MELHOR ESSE SPLICE
  res.status(204).end();
});

// Rotas Erradas
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe`});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001!');
});
