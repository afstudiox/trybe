// importa a lib de rotas
const { Router } = require('express');
// conexao com o controller
const cepController = require('../Controllers/cepController');

// define a constante de rotas do CEP
const cepRoutes = Router();

// removeCEP
cepRoutes.delete('/:cep', async (_req, _res) => { });

// editCEP
cepRoutes.put('/:cep', async (_req, _res) => { });

// getCEP
// rota que busca o cep passado por parametro
// localhost:3000/cep/parametro
cepRoutes.get('/:cep', cepController.get);

// addCEP
cepRoutes.post('/', async (_req, _res) => { });

// listCEP
// rota que busca todos os ceps cadastrados
// localhost:3000/
cepRoutes.get('/', cepController.getAll);

module.exports = cepRoutes;
