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

  async post(req, res) {
    // coleta os dados do body
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    // metodo para remover o (hifen) do CEP
    console.log({ cep, logradouro, bairro, localidade, uf });
    const cepNumber = cep.replace('-', '');  
    // solicita ao service a validação do body coletado
    await cepService.validateBody({ cepNumber, logradouro, bairro, localidade, uf });
    // solicita ao service que envie os dados validados para a gravação no banco
    const result = await cepService.post([cepNumber, logradouro, bairro, localidade, uf]);
    // devolve ao cliente os dados gravados no banco
    res.status(201).json(result);
  },

};

module.exports = cepController;

// const result = schema.validate(unknown);
// console.log('result >', result);
// return result;)