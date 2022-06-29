const db = require('./connection');

const cepModel = {
  async get(cep) {
    const sql = 'SELECT * FROM ceps WHERE cep = ?';
    const [[item]] = await db.query(sql, [cep]);
    return item;
  },
  async getAll() {
    const sql = 'SELECT * FROM ceps';
    const [items] = await db.query(sql);
    return items;
  },
};

module.exports = cepModel;