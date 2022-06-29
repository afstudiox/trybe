const { Router } = require('express');
const cepController = require('../Controllers/cepController');

const cepRoutes = Router();

// removeCEP
cepRoutes.delete('/:cep', async (_req, _res) => { });

// editCEP
cepRoutes.put('/:cep', async (_req, _res) => { });

// getCEP
cepRoutes.get('/:cep', cepController.get);

// addCEP
cepRoutes.post('/', async (_req, _res) => { });

// listCEP
cepRoutes.get('/', cepController.getAll);

module.exports = cepRoutes;