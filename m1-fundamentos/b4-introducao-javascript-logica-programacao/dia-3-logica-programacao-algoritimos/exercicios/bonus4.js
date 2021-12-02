let n = 7;
let middle = (n + 1) / 2; //meio da piramide
let controlLeft = middle;
let controlRight = middle;
let symbol = '#';

//loop que controla a linha
for (let line = 1; line <= middle; line += 1){
  let outputLine = '';
  for (let col = 1; col <= n; col += 1){
    //verifica os limites que devem ser impressos os (*) ou ( )
    if (col == controlLeft || col == controlRight || line == middle){
      outputLine = outputLine + symbol;
    }else{
      outputLine = outputLine + ' ';
    }
  }
  controlRight += 1;
  controlLeft -= 1;
  console.log(outputLine);
}
