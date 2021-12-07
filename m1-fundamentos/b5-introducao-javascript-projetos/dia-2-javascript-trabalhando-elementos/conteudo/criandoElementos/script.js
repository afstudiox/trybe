// arquivo script.js

//Crie um irmão para elementoOndeVoceEsta .

//criando um novo elemento do mesmo tipo 
let el01 = document.createElement('section');
    el01.id='novoIrmaoDoElementoOndeVoceEsta';
    document.getElementById('elementoOndeVoceEsta').parentNode.append(el01);


//Crie um filho para elementoOndeVoceEsta
let el02 = document.createElement('section');
    el02.id='novoFilhoDoElementoOndeVoceEsta';
    document.getElementById('elementoOndeVoceEsta').append(el02);


//Crie um filho para primeiroFilhoDoFilho
let el03 = document.createElement('section');
    el03.id = 'novoFilhoDoPrimeiroFilhoDoFilho';
    document.getElementById('primeiroFilhoDoFilho').append(el03);
    

//A partir desse filho criado, acesse terceiroFilho
console.log(document.getElementById('novoFilhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.parentNode.children[2]);

