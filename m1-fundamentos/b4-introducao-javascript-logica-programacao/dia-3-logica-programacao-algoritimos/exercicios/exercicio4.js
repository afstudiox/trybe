let n = 5;
let signal = "*";
let space = "-";
let metade = Math.trunc(n/2);
// console.log(metade);

//este loop é para trocar de linha
for (let l = 0 ; l <= metade ; l++){
  
  //esta linha abaixo zera a varivel "linha" a cada nova linha
  let linha = "";

  //este loop insere os espaco do lado esquerdo
  for ( let s = metade-l ; s > 0 ; s--){
    linha += space;  
  }  

  //este loop insere os asteriscos(*)
  for(let a = l ; a <= metade  ; a++ ){
    linha += signal;
  }  


  //este loop insere os espaco do lado esquerdo
  for ( let s = metade-l ; s > 0 ; s--){
    linha += space;  
  }  


  console.log(linha);
}



