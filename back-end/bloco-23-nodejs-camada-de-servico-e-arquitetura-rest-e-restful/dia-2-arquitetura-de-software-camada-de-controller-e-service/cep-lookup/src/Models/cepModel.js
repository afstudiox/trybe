// conexao com o banco de dados
const db = require('./connection');

const cepModel = {
  // busca cep por ID direatmente no banco de dados
  // retorna o item encontrado para o service
  async get(cep) {
    const sql = 'SELECT * FROM ceps WHERE cep = ?';
    const [[item]] = await db.query(sql, [cep]);
    return item;
  },
  // busca todos os CEPS cadastrados diretamente no banco de dados 
  // retorna os items encontrados para o service
  async getAll() {
    const sql = 'SELECT * FROM ceps';
    const [items] = await db.query(sql);
    return items;
  },
};

module.exports = cepModel;