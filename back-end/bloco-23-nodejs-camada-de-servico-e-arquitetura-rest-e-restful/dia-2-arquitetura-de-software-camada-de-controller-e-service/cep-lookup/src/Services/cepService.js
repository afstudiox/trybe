const cepModel = require('../Models/cepModel');

const cepService = {
  async get(cep) {
    const item = await cepModel.get(cep);
    return item;
  },

  async getAll() {
    const items = await cepModel.getAll();
    return items;
  },
};

module.exports = cepService; 