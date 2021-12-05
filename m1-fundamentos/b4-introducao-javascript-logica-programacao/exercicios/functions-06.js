function somatorio(n){
  let soma = 0;
  for( i = 1 ; i <= n ; i += 1){
    soma += i; 
  }
  return soma;
}

console.log(somatorio(3));