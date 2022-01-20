const names = ['João', 'Irene', 'Fernando', 'Maria'];

const sizeName = (name) => name.length === 5; 

const findNameWithFiveLetters = () => names.find(sizeName);

console.log(findNameWithFiveLetters());