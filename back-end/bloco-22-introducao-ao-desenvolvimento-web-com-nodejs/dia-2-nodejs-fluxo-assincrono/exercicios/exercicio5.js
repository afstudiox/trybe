const fs = require('fs').promises;

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  let fileNames = [];
  
  // cria os arquivos e o array com os nomes dos arquivos criados
  const createFilesPromises = strings.map((string, index) => {
      let fileName = `file${index+1}.txt`
      fs.writeFile(fileName,string)
      fileNames = [...fileNames, fileName]
    });
  
  // retorna a promisse dos arquivos criados
  await Promise.all(createFilesPromises);

  // lê todos os arquivos criados no passo anterior
  const readFilesPromise = fileNames.map((fileName) => {
    fs.readFile(fileName, 'utf-8')
  });
  
  //retorna a promisse da leitura dos arquivos criados e armazena o array numa constante
  const fileContents = await Promise.all(readFilesPromise);

  //transforma o array de strings em apenas uma string
  await fs.writeFile('./fileAll.txt',fileContents.join(' '))
  
}

arrayToFile();