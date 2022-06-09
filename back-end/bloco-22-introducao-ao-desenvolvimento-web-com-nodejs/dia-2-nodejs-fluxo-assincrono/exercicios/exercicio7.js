const fs = require('fs').promises;
const readLine = require('readline');

const question = (message) => {
  const readlineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      resolve(answer);
    })
  })
}

const start = async () => {
  const fileName = await question('Arquivo a ser lido: ');

  console.log (await fs.readFile(fileName,'utf-8'))

  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch((erro) => {
      console.log(`Erro ao ler o arquivo: ${erro}`);
      return false;
    });
  if (!originalContent) return;

  const oldWord = await question('Qual palavra deseja substituir? ');
  const newWord = await question('E qual palavra deve ficar em seu lugar? ');

  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log('Resultado da substituição: ');
  console.log(newContent)

  const destinationPath = await question('Onde deseja salvar o resultado? ');
  await fs.writeFile(destinationPath, newContent);
}

start();