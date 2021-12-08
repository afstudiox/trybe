
//querySelectorAll ==================================

const urgente = document.querySelectorAll(".emergency-tasks");
urgente.style.backgroundColor = "#FF9F84";

const naoUrgente = document.querySelectorAll(".no-emergency-tasks");
naoUrgente[0].style.backgroundColor = "#F9DB5E";

//querySelectorAll + for...of =======================

let titulosUrgentes = document.querySelectorAll(".emergency-tasks h3");
for (let index of titulosUrgentes){
  index.style.backgroundColor = "#A500F3";
}

let titulosNaoUrgentes = document.querySelectorAll(".no-emergency-tasks h3");
for (let index of titulosNaoUrgentes){
  index.style.backgroundColor = "#232525";
}

//getElementById ===================================

let cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor="#00B069";

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor="#003533";


//getElementsByTagName ===================================

let fundo = document.getElementsByTagName('body');
fundo[0].style.backgroundColor="#F3F3F3"

