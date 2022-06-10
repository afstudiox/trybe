const fs = require('fs')

const leArquivo = (arquivo) => {
  try{
    const conteudoDoArquivo = fs.readFileSync(arquivo, 'utf-8');
    return conteudoDoArquivo;
  } catch (erro) {
    return null;
  }
} 

module.exports = leArquivo;