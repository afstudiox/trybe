// conexao com o banco de dados
const db = require('./connection');

const cepModel = {
  // verifica a existência do cep no banco 
  // retorna um booleano da resposta
  async exists(cep) {
    const existSql = 'SELECT 1 FROM ceps WHERE cep = ?';
    const [[exists]] = await db.query(existSql, [cep]);
    return !!exists;
  },
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

  async post(data) {
    const sql = 'INSERT INTO '
    + 'ceps(cep,logradouro,bairro,localidade,uf) '
    + 'VALUES '
    + '(?)';
    const [{ insertId }] = await db.query(sql, [data]);
    return insertId;
  },
};

module.exports = cepModel;