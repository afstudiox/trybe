function hydrate(string) {

  // Referência de Expressão regular retirada de https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  // by https://codereview.stackexchange.com/users/73997/cssgeek
  let numbers = string.match(/\d+/g).map(Number); 
  let somaAgua =0;

  for(let index in numbers){
    somaAgua += numbers[index];
  }

  if (somaAgua > 1){
    return `${somaAgua} copos de água`;
  }else{
    return `${somaAgua} copo de água`;
  }



}
console.log(hydrate('1 copo de cerveja, 1 copo de Wisky'));

module.exports = hydrate;