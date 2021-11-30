// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [50, 20, 30, 190, 70, 8, 100, 2, 350, 270];
let countOdd=0;

for (number of numbers){
  if (number%2 != 0){
    countOdd += 1;
  }
}

if (countOdd == 0){
  console.log("\nNenhum valor impar encontrado");
} else {
  console.log("\nForam encontrados "+countOdd+" valores impares no array");
}
