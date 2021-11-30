// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum=0;

for (number of numbers){
  sum += number;
}

let totalItens = numbers.length;

let mediaAritmetica = sum/totalItens;

if ( mediaAritmetica > 20 ){
  console.log("\nvalor maior que 20");
} else {
  console.log("\nvalor menor ou igual a 20");
}

console.log("\nA média aritimética de todos os numeros do array é:",mediaAritmetica);