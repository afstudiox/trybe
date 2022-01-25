let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

numerosPares = [...numerosPares];

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// **3 -** array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável `numerosPares` .

// Ignorando alguns valores retornados
// Você pode ignorar valores retornados que você não tem interesse:

// function f() {
//   return [1, 2, 3];
// }

// var [a, , b] = f();

// console.log(a); // 1
// console.log(b); // 3
// Copy to Clipboard
// Você também pode ignorar todos os valores retornados:

// [,,] = f();