// concexao com o service
const cepService = require('../Services/cepService');

const cepController = {
  
  async get(req, res) {
    // pega a chave cep do parametro
    const { cep } = req.params;
    
    // solicita ao service a validação do parametro 
    // enviado pelo cliente
    await cepService.validateParamsCep({ cep });
    
    // metodo para remover o (hifen) do CEP
    const cepNumber = cep.replace('-', '');
    
    // solicita ao service que verifique se o CEP
    // sem o hifen existe no banco
    await cepService.exists(cepNumber);
    
    // solicita aos service os dados referentes 
    // ao CEP já validade e verificado no banco
    const item = await cepService.get(cepNumber);
    
    // devolve ao cliente os dados referentes ao CEP
    res.status(200).json(item);
  },

  async getAll(_req, res) {
    // traga-me todos as informações encontrada no banco de dados
    const items = await cepService.getAll();
    // retorne esses dados para o cliente
    res.json(items);
  },
};

module.exports = cepController;

// const result = schema.validate(unknown);
// console.log('result >', result);
// return result;)