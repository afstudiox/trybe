const Joi = require('joi');
const cepModel = require('../Models/cepModel');
const runSchema = require('../Middlewares/validations');

// regex que valida cep com (hifen) ou não
const REGEX_CEP = /^\d{5}-?\d{3}$/;

// dispara erro quando caso cep não seja encontrado
const throwNotFoundError = (message, code) => {
  const error = new Error(message, code);
  error.name = 'NotFoundError';
  error.code = 404;
  throw error;
}; 

const cepService = {
  // valida se o parametro passado é um dep válido
  validateParamsCep: runSchema(
    Joi.object({
      cep: Joi.string().regex(REGEX_CEP).required(),
    }),
  ),

  validateBody: runSchema(
    Joi.object({
      cep: Joi.string().regex(REGEX_CEP).required(),
      logradouro: Joi.string().required(),
      bairro: Joi.string().required(),
      localidade: Joi.string().required(),
      uf: Joi.string().required(),
    }),
  ),
  
  async exists(cep) {
    const exists = await cepModel.exists(cep);
    if (!exists) throwNotFoundError('CEP não encontrado');
    return exists;
  },
  
  // solicita os dados referentes ao cep solicitado
  async get(cep) {
    const item = await cepModel.get(cep);
    return item;
  },

  // solicita todos os dados do banco
  async getAll() {
    const items = await cepModel.getAll();
    return items;
  },

  // solicita a verificação no banco para verificar se o cep existe
  // caso não exista ele chama a função de erro
  async post(data) {
    const result = await cepModel.post(data);
    return result;
  },
};

module.exports = cepService; 