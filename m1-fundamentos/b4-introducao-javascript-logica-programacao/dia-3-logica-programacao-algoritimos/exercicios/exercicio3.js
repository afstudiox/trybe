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