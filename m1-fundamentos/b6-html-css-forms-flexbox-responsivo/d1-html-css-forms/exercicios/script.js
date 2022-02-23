// funcao para criar o menu de estados 
const uf = document.querySelector('#uf');
const date = document.querySelector('#dt-inicio');

function criaUF(){
    let ufBrasil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
        for (index of ufBrasil){
            let elOption = document.createElement('option');
            elOption.value=index;
            elOption.innerHTML=index;
            uf.appendChild(elOption);
    }
}

window.onload = function(){
    criaUF();
}