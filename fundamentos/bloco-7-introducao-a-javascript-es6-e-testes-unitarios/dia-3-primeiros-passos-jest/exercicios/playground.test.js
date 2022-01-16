const { TestWatcher } = require("jest");

function encode(words) {
  let yesCode = '';
  // Percorrer todos os itens do array
  // criar uma estrutura switch para trocar os caracteres
  // caso não encontre nenhuma caractere para se trocado permaneça com o mesmo
  for ( let index = 0; index < words.length; index += 1){
    switch(words[index]){
      case 'a':
        yesCode += '1';
        break;
      case 'e':
        yesCode += '2';
        break;       
      case 'i':
        yesCode += '3';
        break;   
      case 'o':
        yesCode += '4';
        break;   
      case 'u':
        yesCode += '5';
        break;   
      default:
        yesCode += words[index];
        break;
    }  
  }
  return yesCode;
}


function decode(words) {
  let yesDecode = '';
  // Percorrer todos os itens do array
  // criar uma estrutura switch para trocar os caracteres
  // caso não encontre nenhuma caractere para se trocado permaneça com o mesmo
  for ( let index = 0; index < words.length; index += 1){
    switch(words[index]){
      case '1':
        yesDecode += 'a';
        break;
      case '2':
        yesDecode += 'e';
        break;       
      case '3':
        yesDecode += 'i';
        break;   
      case '4':
        yesDecode += 'o';
        break;   
      case '5':
        yesDecode += 'u';
        break;   
      default:
        yesDecode += words[index];
        break;
    }  
  }
  return yesDecode;

}
//Teste se encode e decode são funções
  
test('Verifica se existe a função Encode', () => {
  expect(typeof encode).toBe('function');
});

test('Verifica se existe a função Decode', () => {
  expect(typeof decode).toBe('function');
});

test('Verifica se a função encode recebe as vogais a, e, i, o, u e as converte em 1, 2, 3, 4 e 5, respectivamente',() =>{
  expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
});

test('Verifica se a função decode recebe os números 1, 2, 3, 4 e 5 e os converte nas vogais a, e, i, o, u , respectivamente;',() =>{
  expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
});

test('Verifica se as letras/números n,d,r,7  não são convertidos para cada caso',()=>{
  expect(encode('andre77')).toBe('1ndr277');
})

test('Verifica se a string "1ndr2" retornada pelas funções têm o mesmo número de caracteres que a string "andre" passada como parâmetro.', ()=> {
  expect(encode('andre')).toHaveLength(5);
});
