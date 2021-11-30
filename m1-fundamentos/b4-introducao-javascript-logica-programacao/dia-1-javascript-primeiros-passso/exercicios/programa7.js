let nota = 70;
let mensagem = "";


if (nota > 100 && nota < 0){
    mensagem="\nNota inválida!";
}else if (nota >= 90){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito A"; 
} else if(nota >= 80){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito B"; 
} else if(nota >= 70){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito C";
} else if (nota >= 60){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito D";
} else if (nota >= 50){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito E";
} else if (nota < 50){
    mensagem="\nSua nota "+nota+"% é equivalente ao conceito F";
}

console.log(mensagem);