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
let check = false;

function fillHolyday(origin){
  let holydayDays = document.querySelectorAll('.holiday'); 
  if (check == false){
    for (let i = 0; i < holydayDays.length; i += 1){
        holydayDays[i].style.backgroundColor='yellow';
        origin.target.style.backgroundColor='yellow';
    }
    check = true;
  }else{
    for (let i = 0; i < holydayDays.length; i += 1){
      holydayDays[i].style.backgroundColor='rgb(238,238,238)';
      origin.target.style.backgroundColor='rgb(238,238,238)';
  }
  check = false;
  }
}