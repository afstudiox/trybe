const fs = require('fs').promises;

// Importar o módulo fs/promises e realizar a leitura do arquivo dentro da função readAll.
// const readAll = () => {
//   fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//   //Converter o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`.
//   const simpsons = JSON.parse(fileContent);
//   // Mapear cada objeto do Array para uma string no formato correto.
//   const strings = simpsons.map(({id, name})=> `${id} - ${name}`)
//   // Exibir as strings na tela
//   strings.forEach((string) => console.log(string));
//   });
// }

// Com async/await ficaria assim 
const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

const getSimpsonById = async (id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) == id);

  if(!chosenSimpson) {
    throw new Error('Id não encontrado');
  }

  return chosenSimpson;
}

const filterSimpson = async () => {
  const fileContent = await fs.readFile('./simpsons.json','utf-8')
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons
    .filter((simpson) => simpson.id != '10' && simpson.id != '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

const createSimpsonsFamily = async () => {
  const fileContent = await fs.readFile('./simpsons.json','utf-8')
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)))
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const addNelsonToFamily = async () => {
  const fileContent = await fs.readFile('./simpsonsFamily.json','utf-8')
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id:'8', name:'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const swapPerson = async () => {
  const maggieUpdate = {id: '8', name:'Maggie Simpson'};
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)
  const filterSimpson = simpsons.filter((simpson) => simpson.id !== '8')
  const updateSimpsons = [...filterSimpson, maggieUpdate];
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(updateSimpsons));  
}

const main = async () => {
  swapPerson();
  // addNelsonToFamily();
  // createSimpsonsFamily();
  // filterSimpson();
  // const simpson = await getSimpsonById(1);
  // console.log(simpson);
  // readAll();
}

main();