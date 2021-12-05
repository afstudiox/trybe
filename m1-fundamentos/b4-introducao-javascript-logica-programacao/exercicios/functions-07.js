function isEnd(str1,str2){
  //pegar o tamanho da str2 e subtrair do tamanho da str1
  //a partir deste indice encontrado, vou comparar se a 
  //a string é igual 
  if (str1.slice((str1.length - str2.length)) === str2){
    return true;
  }else{
    return false;
  }
}

console.log(isEnd('andrefelipe','felipe'));