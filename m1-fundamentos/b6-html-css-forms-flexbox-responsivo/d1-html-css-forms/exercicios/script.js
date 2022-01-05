// funcao para criar o menu de estados 
function criaUF(){
    let uf = document.querySelector('#uf');
    let ufBrasil = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
        ]
        for (index of ufBrasil){
            let elOption = document.createElement('option');
            elOption.value=index;
            elOption.innerHTML=index;
            uf.appendChild(elOption);
    }
}

function handleSubmit(event){
    event.preventDefault();
}

window.onload = function(){
    criaUF();

    let button = document.querySelector('.btn-enviar');
    button.addEventListener('click',handleSubmit);
}