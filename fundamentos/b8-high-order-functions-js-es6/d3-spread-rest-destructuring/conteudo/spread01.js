// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'lichia', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'chocolate', 'açai'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));