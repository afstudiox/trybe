// arquivo script.js

// removendo filhos do paiDoPai, exceto pai
let paiDoPai = document.getElementById('paiDoPai');


// for (let index = paiDoPai.childNodes-1; index >= 0; index -= 1 ){
//     const currentChildren = paiDoPai.childNodes[index];
//     if (currentChildren.id !== 'pai'){
//         currentChildren.removeChild();
//     }
// } 

// removendo filhos do pai, exceto elementoOndeVoceEsta
let pai = document.getElementById('pai');

for ( let index = pai.childNodes-1; index >= 0; index -= 1 ){
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta'){
        currentChildren.removeChild();
    }
}

// // removendo filhos do elementoOndeVoceEsta, exceto primeiroFilhoDoFilho
// let elementoOndeVoceEsta = document.getElementById('elementoOndeVOceEsta');

// for ( let index = elementoOndeVoceEsta.childNodes-1; index >= 0; index -= 1 ){
//     const currentChildren = elementoOndeVoceEsta.childNodes[index];
//     if (currentChildren.id !== 'primeiroFilhoDoFilho'){
//         currentChildren.removeChild();
//     }
// }

