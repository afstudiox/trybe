const names = ['João', 'Irene', 'Fernando', 'Maria'];

//funcao que verifica o tamanho do nome 
const sizeName = (name) => name.length === 5; 

//HOF que retorna o primeiro nome com o tamanho informado na funcao sizeName
const findNameWithFiveLetters = () => names.find(sizeName);

console.log(findNameWithFiveLetters());


//obs.: nessa HOF foi retornada uma função, porém não foi passada nenhuma função como parametro.