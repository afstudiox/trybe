/*
2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word ='trybe';
let invertido="";

// for(let i=word.length-1;i>=0;i-=1){
//   invertido = invertido + word[i];
// }

for(let i=0 ; i < word.length ; i+=1){
  invertido = word[i] + invertido;
}

console.log(invertido);