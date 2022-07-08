const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },{
    timestamps: false,
    // usar um nome especifico da tabela
    // tableName: "xablau"
    // usar para quando quiser que o nome da tabela seja identico ao models
    // freezeTableName: true
  })
  return Store;
}

module.exports = Store;