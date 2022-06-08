const sumMultiply = require('./exercicio1');
const ramdomNumber = () => Math.floor(Math.random() * 100 + 1);

calculateNumber = async () => {
  await sumMultiply(ramdomNumber(),ramdomNumber(),ramdomNumber())
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
}

calculateNumber();