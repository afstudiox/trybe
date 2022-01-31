const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]


numbers = [];

setTimeout(() => pushNumber(numbers, 1), 5000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 5000);