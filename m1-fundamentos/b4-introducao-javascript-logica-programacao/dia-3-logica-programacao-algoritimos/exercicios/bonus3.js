let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;


for (let lineindex = 0; lineindex <= size; lineindex +=1){
  for (let columnIndex=0; columnIndex <= size; columnIndex += 1){
    if (columnIndex < inputPosition){
      inputLine = inputLine + ' ';
    }else{
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = ''; 
  inputPosition -= 1;
}

// //este loop é para trocar de linha
// for (let l = 0 ; l < n ; l++){
  
//   //esta linha abaixo zera a varivel "linha" a cada nova linha
//   let linha ="";

//   //este loop insere os espaco
//   for ( let s = n-l ; s > 1 ; s--){
//     linha += space;  
//   }

//   //este loop insere os asteriscos(*)
//   for(let a = 0 ; a <= l ; a++){
//     linha += signal;
//   }  

//   console.log(linha);

// }