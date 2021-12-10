const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? 
// POR CAUSA DA CLASSE .tech QUE TEM EM SUA CONFIGURAÇÃO UM DESLOCAMENTO

//=======================================================================================================================================================

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// captura todas as <li> do documento e adciona na variavel 'li' 
let li = document.getElementsByTagName('li');
// função que remove a classe 'tech' de todas as <li>
function resetTech(){
  for (let i = 0; i < li.length; i += 1){
    li[i].classList.remove('tech');
  }
}
// funcão que adiciona a classe 'tech' no objeto acionado pelo 'click' 
function swapTech(origin){
  resetTech();
  origin.target.classList.add('tech');
}
//loop que monitora o clique em qualquer item da li
for (let i = 0; i < li.length; i += 1){
  li[i].addEventListener('click',swapTech);
}

//=======================================================================================================================================================

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// define que tudo que for digitado no objeto acionado pelo 'keypress' seja adicionado na primeira li no 'innerText'
function changeText(origin){
  firstLi.innerText = origin.target.value;
}
// monitora a pressionamento de teclha no <input>
input.addEventListener('keypress', changeText);

//=======================================================================================================================================================

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick',function(){
  window.open('http://www.afstudio.com.br');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.