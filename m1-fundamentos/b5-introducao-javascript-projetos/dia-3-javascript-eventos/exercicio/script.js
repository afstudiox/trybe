function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1
/*
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// arrays dos feriado e sextas-feiras
const holyday=[24,25,31];
const friday=[4,11,18,25];

//localiza a classe pai que será inserido os dias
const days = document.querySelector('#days');

// loop para construir os dias 
for (let i=0; i < dezDaysList.length; i += 1){
  const day = document.createElement('li');
  day.classList.add('day');
  day.innerHTML=dezDaysList[i];
  days.appendChild(day)

  //loop verifica se é feriado
  for(let j=0; j < holyday.length; j += 1){
    if(day.innerText == holyday[j]){
      day.classList.add('holiday');
    }
  }

  //loop verifica se é sexta-feira
  for (let j=0; j < friday.length; j += 1){
    if (day.innerText == friday[j]){
      day.classList.add('friday');
    }
  }
}

// Exercício 2
/*
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
const btnHoliday = document.createElement('button');
btnHoliday.id = 'btn-holiday';
btnHoliday.innerHTML='Feriados';

const btnContainer = document.querySelector('.buttons-container');
btnContainer.appendChild(btnHoliday);

// Exercicio 3
/* 
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

// colocando uma escuta no botao 'holiday'
btnHoliday.addEventListener('click',fillHolyday);
let checkHoliday = false;

function fillHolyday(origin){
  let holydayDays = document.querySelectorAll('.holiday'); 
  if (checkHoliday == false){
    for (let i = 0; i < holydayDays.length; i += 1){
        holydayDays[i].style.backgroundColor='yellow';
        origin.target.style.backgroundColor='yellow';
    }
    checkHoliday = true;
  }else{
    for (let i = 0; i < holydayDays.length; i += 1){
      holydayDays[i].style.backgroundColor='rgb(238,238,238)';
      origin.target.style.backgroundColor='rgb(238,238,238)';
  }
  checkHoliday = false;
  }
}

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
const btnFriday = document.createElement('button');
function fridayF(param){
  btnFriday.innerHTML=param;
  btnFriday.id='btn-friday';
  btnContainer.appendChild(btnFriday); // a variavel btnContainer já foi criada anteriormente e pode ser reutilizada
}
fridayF('Sexta-Feira');


/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

btnFriday.addEventListener('click',fillFriday);
let checkFriday = false;
var copyFriday = [];

function fillFriday(origin){
  let fridayDays = document.querySelectorAll('.friday');
 

  if (checkFriday == false){
    for(let i = 0; i < fridayDays.length; i += 1){
      copyFriday.push(fridayDays[i].innerText);
      fridayDays[i].innerText='🍺';
    }
    checkFriday=true;
  }else{
    for(let i = 0; i < fridayDays.length; i += 1){
      fridayDays[i].innerHTML = copyFriday[i];
    }
    checkFriday=false;   
    copyFriday=[];
  }
  console.log(copyFriday);
}

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

const allDays = document.querySelectorAll('.day'); 

function moreZoom(origin){
  origin.target.style.fontSize='25px';
}

function lessZoom(origin){
  origin.target.style.fontSize='20px';
}

for(let i of allDays){
  i.addEventListener('mouseover',moreZoom);
  i.addEventListener('mouseleave',lessZoom);
}

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/


function addTask(){
  const task = document.createElement('span');
  const taskInput = 'Estudar para Prova';
  
  task.innerText = taskInput;
  myTasks.appendChild(task);
}

const myTasks = document.querySelector('.my-tasks')
addTask();

/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

const divLabel = document.createElement('div');

function labelTask(color){
  divLabel.classList.add('task');
  divLabel.style.backgroundColor=color;
  myTasks.appendChild(divLabel);
}

labelTask('orange');

/* 
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

function activeSelected(event){
  if (checkSelected==false){
    event.target.classList.add('selected');
    checkSelected =true;
  }else{
    event.target.classList.remove('selected');
    checkSelected =false;
  }
  
}

divLabel.addEventListener('click',activeSelected)
let checkSelected = false;


/* 
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

function taskDay(origin){
  if (checkSelected==true){
    if (origin.target.style.backgroundColor != divLabel.style.backgroundColor){
      origin.target.style.backgroundColor=divLabel.style.backgroundColor;
    }else{
      origin.target.style.backgroundColor='#EEEEEE';
    }
  }
}

for(let i of allDays){
  i.addEventListener('click',taskDay);
}

/*
Bônus:
Vamos adicionar compromissos ao seu calendário? 
Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key .
*/


function addcommitment(origin){
  const commitment = document.createElement('li');
  if(commitmentInput.value != '')
  {
    if (origin.which == 13 || origin.target==btnCommitment)
    {
      commitment.innerText = commitmentInput.value;
      myCommitment.appendChild(commitment);
    } 
  }else{
    if (origin.target==btnCommitment)
    {
    alert('O campo compromisso não pode estar vazio');
    }
  }
}

const myCommitment = document.querySelector('.task-list')
const btnCommitment = document.querySelector('#btn-add');
const commitmentInput = document.querySelector('#task-input');
btnCommitment.addEventListener('click',addcommitment);
commitmentInput.addEventListener('keypress',addcommitment);
