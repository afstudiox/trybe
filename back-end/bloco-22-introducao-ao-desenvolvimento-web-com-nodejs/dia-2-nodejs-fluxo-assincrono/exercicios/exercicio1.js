const sumMultiply = (a, b, c) => {
  const promisse = new Promise ((resolve, reject) =>{
    if (isNaN(a+b+c)) 
      reject(new Error('Informe apenas números'));
    const result = (a+b)*c;
    if (result < 50)
      reject(new Error(`Valor muito baixo : ${result}`));
    else
      resolve(result)
  });
  return promisse;
}

sumMultiply(10,20,30)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));