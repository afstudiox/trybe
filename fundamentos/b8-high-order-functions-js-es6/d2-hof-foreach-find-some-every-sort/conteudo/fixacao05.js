const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  let nameParam = name;
  return arr.some((name) => name === nameParam);
}

console.log(hasName(names, 'José'))