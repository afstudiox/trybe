// Este código foi adaptado utilizando um dos métodos de pesquisa - 1. Método "ingênuo" - O(n2)
// Referência: https://pt.stackoverflow.com/questions/99193/valor-em-array-com-a-maior-ocorr%C3%AAncia
// By: https://pt.stackoverflow.com/users/215/mgibsonbr

function moreRepeat(arrayValues){

  let maior;
  let repeticaoMaior = -1;

  for (let i = 0 ; i < arrayValues.length ; i += 1 ){
    let repeticao = 1;
    for (let j = i+1; j < arrayValues.length ; j += 1){
      if (arrayValues[i]==arrayValues[j]){
        repeticao +=1;
      }
      if (repeticao > repeticaoMaior){
        maior = arrayValues[i];
        repeticaoMaior = repeticao;
      }
    }
  }
  return maior;
}

console.log(moreRepeat([2, 3, 2, 5, 8, 2, 3]));