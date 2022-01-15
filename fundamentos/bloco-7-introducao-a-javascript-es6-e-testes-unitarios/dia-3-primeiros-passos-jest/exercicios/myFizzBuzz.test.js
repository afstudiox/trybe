function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
test ('Verificar se 15 é divisível por 3 e 5 e ter o retorno é fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
test ('Verificar se 9 é divisível por 3 e ter o retorno é fizz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
})

//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
test ('Verificar se 20 é divisível por 5 e ter o retorno é buzz', () => {
  expect(myFizzBuzz(20)).toBe("buzz");
})

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
test ('Verificar se 24 é divisível por 3 ou por 5 e ter o retorno de 24',() => {
  expect(myFizzBuzz(11)).toBe(11);
})

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
test ('Verificar se ao passar uma string o retorno é false ',() => {
  expect(myFizzBuzz('ola')).toBe(false);
})