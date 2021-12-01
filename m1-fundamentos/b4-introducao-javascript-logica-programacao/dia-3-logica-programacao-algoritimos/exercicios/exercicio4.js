/*
Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
*/

let maiorPrimo=0;

// esse loop percorre o intervalo sugerido
for(let numAtual = 0 ; numAtual <= 50 ; numAtual+= 1){
  // variavel para armazenar a confirmacão se o numero é primo
  let ePrimo = true;
  // 
  for(let divisorAtual = 2; divisorAtual < numAtual ; divisorAtual +=1){
    //verifica se a divisao é exata
    if (numAtual % divisorAtual === 0){
      ePrimo = false;
    }
  }
  //condicao para verificar se a variavel ePrimo é verdadeira
  if (ePrimo){
    //adiciona a variavel o valor atual
    maiorPrimo = numAtual;
  }
}

console.log(maiorPrimo);