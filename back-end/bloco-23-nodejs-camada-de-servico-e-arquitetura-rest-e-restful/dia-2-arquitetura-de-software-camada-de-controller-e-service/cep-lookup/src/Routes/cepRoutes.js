const { Router } = require('express');

const cepRoutes = Router();

// removeUser
cepRoutes.delete('/:cep', async (_req, _res) => { });

// editUser
cepRoutes.put('/:cep', async (_req, _res) => { });

// getUser
cepRoutes.get('/:cep', async (_req, _res) => { });

// addUser
cepRoutes.post('/', async (_req, _res) => { });

// listUsers
cepRoutes.get('/', async (_req, _res) => { });

module.exports = cepRoutes;