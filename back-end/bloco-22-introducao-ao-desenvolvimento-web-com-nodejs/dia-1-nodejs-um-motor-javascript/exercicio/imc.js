const readline = require('readline-sync');

const calcIMC = () => {

  const peso = readline.questionFloat('Digite seu peso: ');
  const altura = readline.questionFloat('Digite sua altura: ');
  const imc = peso / (altura ** 2); 

  switch (true) {
    case imc < 18.5:
      console.log('Abaixo do peso (magreza)')
      break;
    case imc >= 18.5 && imc <= 24.9:
      console.log('Peso normal')
      break;
    case imc >= 25 && imc <= 29.9:
      console.log('Acima do peso (sobrepeso)')
      break;
    case imc >= 30 && imc <= 34.9:
      console.log('Obesidade grau I')
      break;
    case imc >= 35 && imc <= 39.9:
      console.log('Obesidade grau II')
      break;
    case imc >= 40:
      console.log('Obesidade grau III e IV')
      break;
    default:
      break;
  }

  console.log(`Seu IMC é ${imc.toFixed(2)}`);

}

module.exports = { calcIMC };

