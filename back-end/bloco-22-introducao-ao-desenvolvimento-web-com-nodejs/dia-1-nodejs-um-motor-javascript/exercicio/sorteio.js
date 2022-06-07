const readline = require('readline-sync');

const ramdomPlay = () => {

  const play = ()=>{
    const randomNumber = Math.round(Math.random() * 10);
    const numberSelect = readline.questionInt('Digite um número entre 0 e 10: ');
    if (numberSelect === randomNumber) {
      console.log('Parabéns, número correto!');
    } else {
      console.log('Opa, não foi dessa vez! O número era: ', randomNumber); 
    }

  const playAgain = readline.question('Deseja continuar? (s/n) ');
  if (playAgain === 's') {
      console.log('Jogando novamente!');
      play();
  }
  }
  play();
}

module.exports = { ramdomPlay };







