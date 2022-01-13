// PARTE 1 - DESAFIO 1 =================================================================
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// PARTE 1 - DESAFIO 2 =================================================================

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordenaNumbers = (array) => {
//   for (let A = oddsAndEvens.length-1; A >= 0; A -= 1){
//     for (let B = 0; B <= oddsAndEvens.length; B += 1){
//       if (oddsAndEvens[B] > oddsAndEvens[B+1]){
//         let swap = oddsAndEvens[B];
//         oddsAndEvens[B] = oddsAndEvens[B+1];
//         oddsAndEvens[B+1] = swap;
//       }
//     }
//   }
//   return array;
// }

// console.log(`Os números ${ordenaNumbers(oddsAndEvens)} se encontram ordenados de forma crescente utilizando o método "SORT"!`);

// PARTE 1 - BÔNUS      =================================================================

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b)=>{return a-b });

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 