const numbers = [19, 21, 31, 3, 45, 22, 15];

//funcao para verificar se é divisível
const isDivisible = (item) => (item % 3 === 0) && (item % 5 === 0);

//hof usando find para encontrar o critério que seja true
const findDivisibleBy3And5 = numbers.find((item) => isDivisible(item));

//exibindo resultado na tela
console.log(findDivisibleBy3And5);

