const uf = document.querySelector('#uf');
const btnEnviar = document.querySelector('#btnEnviar');

// funcao para criar o menu de estados 
function criaUF(){
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
criaUF();

// Função para mostrar os dados do formulário a ser enviado
function renderData(event){
  event.preventDefault();
  const InputNome = document.querySelector('#nome');
  const pNome = document.querySelector('#pNome');
  pNome.innerHTML = InputNome.value;

  const inputEmail = document.querySelector('#email');
  const pEmail = document.querySelector('#pEmail');
  pEmail.innerHTML = inputEmail.value;

  const InputCpf = document.querySelector('#cpf');
  const pCpf = document.querySelector('#pCpf');
  pCpf.innerHTML = InputCpf.value;

  const inputEndereco = document.querySelector('#endereco');
  const pEndereco = document.querySelector('#pEndereco');
  pEndereco.innerHTML = inputEndereco.value;

  const selectUf = document.querySelector('#uf') ;
  const pUf = document.querySelector('#pUf');
  pUf.innerHTML = selectUf.value;

  const radioTipo = document.querySelector('input[name="tipo"]:checked');
  const pTipo = document.querySelector('#pTipo');
  pTipo.innerHTML = radioTipo.value;

  const txtResumo = document.querySelector('#resumo-curriculo');
  const pResumo = document.querySelector('#pResumo');
  pResumo.innerHTML = txtResumo.value;

  const inputCargo = document.querySelector('#desc-cargo');
  const pCargo = document.querySelector('#pCargo');
  pCargo.innerHTML = inputCargo.value;

  const inputDataInicio = document.querySelector('#dt-inicio')
  const pDataInicio = document.querySelector('#pDataInicio');
  pDataInicio.innerHTML = inputDataInicio.value;  
  
}

// evento escutador do botão para ativar a renderização dos dados
btnEnviar.addEventListener('click', renderData);

