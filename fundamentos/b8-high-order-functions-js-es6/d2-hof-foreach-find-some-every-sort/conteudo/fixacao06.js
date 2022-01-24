const people = [
  { name: 'Mateus', age: 19 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  console.log(people.age);
  console.log(minimumAge);
  return arr.every((age) => arr.age > age);
}

console.log(verifyAges(people, 18));