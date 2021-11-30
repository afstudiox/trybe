// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum=0;

for (number of numbers){
  // console.log(number);
  sum += number;
}

let totalItens = numbers.length;

let mediaAritmetica = sum/totalItens;

console.log("\nA média aritimética de todos os numeros do array é:",mediaAritmetica);