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

const main = ()=> {
  readAll();
}

main();