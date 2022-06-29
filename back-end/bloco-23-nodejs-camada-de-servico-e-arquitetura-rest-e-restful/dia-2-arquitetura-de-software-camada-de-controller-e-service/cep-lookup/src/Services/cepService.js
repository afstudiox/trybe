// conexao com o model 
const cepModel = require('../Models/cepModel');

const cepService = {
  // solicita ao model a busca do cep no banco
  // retorna a resposta do model para o controller
  async get(cep) {
    const item = await cepModel.get(cep);
    return item;
  },
  // solicita ao model a busca de todos os ceps cadastrados no banco 
  // retorna a resposta do model para o controller
  async getAll() {
    const items = await cepModel.getAll();
    return items;
  },
};

module.exports = cepService; 