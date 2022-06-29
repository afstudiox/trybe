const cepService = require('../Services/cepService');

const cepController = {
  async get(req, res) {
    const { cep } = req.params;
    const item = await cepService.get(cep);
    res.json(item);
  },
  async getAll(_req, res) {
    const items = await cepService.getAll();
    res.json(items);
  },
};

module.exports = cepController;