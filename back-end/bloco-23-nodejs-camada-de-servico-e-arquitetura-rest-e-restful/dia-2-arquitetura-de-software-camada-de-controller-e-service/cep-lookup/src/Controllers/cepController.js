// concexao com o service
const cepService = require('../Services/cepService');

const cepController = {
  // envia para o service o cep por parametro 
  // retorna para o cliente o item encontrado no banco
  async get(req, res) {
    const { cep } = req.params;
    const item = await cepService.get(cep);
    res.json(item);
  },
  // envia para para o service a solicitacao de busca de todos os ceps
  // retorna para o cliente os items cadastrados no banco
  async getAll(_req, res) {
    const items = await cepService.getAll();
    res.json(items);
  },
};

module.exports = cepController;