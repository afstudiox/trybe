// arquivo script.js

//Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta'));

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log(document.getElementById('elementoOndeVoceEsta').parentNode.style.color='purple');

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log(document.getElementById('primeiroFilhoDoFilho').innerText='Texto inserido dinamicamente');

//Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById('pai').firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling );

//Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').children[2]);