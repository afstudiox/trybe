//declarando uma array
let tasksList = ['Levantar da Cama','Conversar com Deus','Escovar os dentes', 'Tomar Café','Checar emails e notificações'];

//adicionando um novo item no fim array
tasksList.push('Iniciar os estudos')

//insere um novo item no inicio do array
tasksList.unshift('Abrir os olhos')

//imprimindo o primeiro item do array
let searchForFirstTask = tasksList[0];

//imprimindo o ultimo item do array
let searchForLastTask = tasksList[tasksList.length - 1];

console.log(tasksList);
console.log(tasksList.length);
console.log(searchForFirstTask);
console.log(searchForLastTask);

//removendo o ultimo item do array
tasksList.pop();

//procurando um item no array
let indexOfTask = tasksList.indexOf('Tomar Café'); 

console.log(tasksList);
console.log(indexOfTask);

