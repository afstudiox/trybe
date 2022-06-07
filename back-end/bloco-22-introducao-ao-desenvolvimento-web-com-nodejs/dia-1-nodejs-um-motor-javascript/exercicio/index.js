const readline = require('readline-sync');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const imc = require('./imc');

console.log(`01 - Calculo de Massa Corporal (IMC)\n02 - Sorteio de números\n03 - Velocidade\n`);
const choice = readline.questionInt('Digite o número do arquivo que deseja executar: ');

switch (choice) {
  case 1:
    imc.calcIMC()
    break;
  case 2:
    sorteio.ramdomPlay()
    break;
  case 3:
    velocidade.calcVelocity()
    break;
  default:
    console.log('Opção inválida!');
}