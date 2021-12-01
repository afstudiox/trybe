// 1 - declarar uma variavel n
// 2 - declarar uma variavel base com o sinal (*)
// 3 - declarar uma variavel base com o sinal ( )
// 4 - declarar uma variavel que sera a string impressa por linha


let n = 5;
let signal = "*";
let space = " ";

//este loop é para trocar de linha
for (let l = 0 ; l < n ; l++){
  //esta linha abaixo zera a varivel "linha" a cada nova linha
  let linha ="";

  //este loop insere os espaco
  for ( let s = n-l ; s > 1 ; s--){
    linha += space;  
  }

  //este loop insere os asteriscos(*)
  for(let a = 0 ; a <= l ; a++){
    linha += signal;
  }  

  console.log(linha);

}






  // //for para trocar de linha
  // for ( let i = 0 ; i < n ; i++){
  //   //for para inserir sinal
  //   for( let j = 0 ; j < n ; j++){
  //     //for para inserir espaco
  //     for ( let y = (n-i) ; y < n ; y--){
  //       linha += space;
  //     }
  //     linha += sinal;
  //   }  
  // console.log(linha); 
  // }
