const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      resolve(answer);
    });
  });
}

const start = async () => {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await fs.readFile(fileName,'utf-8')
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo Inexistente');
  }
}

start();