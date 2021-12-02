// 4 x (4-1) = 12
// 12 x (4-2) = 24 
// 24 x (4-3) = 24
// 24 x (4-4) = nao executar

//num * (num-i)
//sendo que i incrementar +1
//até que (num-i) seja <= 0 

let num = 4;
let fatorial=1;

for (let index=num ; index > 1 ; index-=1){
  fatorial = fatorial*index;  
}

console.log(fatorial);

