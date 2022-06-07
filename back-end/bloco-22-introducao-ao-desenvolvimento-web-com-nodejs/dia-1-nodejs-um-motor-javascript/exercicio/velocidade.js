const readline = require('readline-sync');

const calcVelocity = () => {
  const distancia = readline.questionInt('Digite a distância em metros: ');
  const tempo = readline.questionInt('Digite o tempo em segundos: ');
  const velocidade = distancia / tempo;
  console.log(`A velocidade média é ${velocidade.toFixed(2)} m/s`);
}

module.exports = { calcVelocity };

