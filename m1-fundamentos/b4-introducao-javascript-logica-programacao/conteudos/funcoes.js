// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

function soma(num1,num2){
  return num1+num2;
}
// console.log(soma(10,10));

function subtrai(num1,num2){
  return num1-num2
}
// console.log((subtrai(10,10)));

function multiplica(num1,num2){
  return num1*num2;
}
// console.log(multiplica(10,10));

function divide(num1,num2){
  return num1/num2;
}
// console.log(divide(10,10));

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function maiorNumero(num1,num2){
  if (num1 == num2){
    return "Os números são iguais";
  } else if ( num1 > num2 ){
    return num1;
  }else{
    return num2;
  }
}
// console.log(maiorNumero(20,15));

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function maiorDeTres(num1,num2,num3){
let maiorNumero = num1;  
  if (num1 > num2 && num2 > num3){
    maiorNumero = num1;
  }else if(num2 > num3 && num2 > num1){
    maiorNumero = num2;
  }else if(num3 > num1 && num3 > num2 ){
    maiorNumero = num3;
  }
  return maiorNumero;
}
// console.log(maiorDeTres(10,20,30));

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function typeNumber(num1){
  if (num1 > 0){
    return 'positive';
  }else if (num1 < 0){
    return 'negative';
  }else{
    return "zero";
  }
}
// console.log(typeNumber(0));

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function isTriangulo(num1,num2,num3){
let isValid = true;

  for (index of arguments){
    if (index <= 0){
      return 'Ângulo Inválido';
    }    
  }

  if ((num1+num2+num3) === 180){
    return true;
  }else{
    return false;
  }

}
// console.log(isTriangulo(10,10,160));


function xadrez(peca){
  let pecaLower = peca.toLowerCase();
  switch(pecaLower){
    
    case 'bispo':
      return '\nBISPO\nO bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças. O bispo captura no mesmo caminho em que ele se move, parando na casa da peça adversária. Devido à maneira como os bispos se movem, ele sempre permanece em casas da cor em que ele iniciou. Cada jogador começa com dois bispos, um nas casas pretas e outro nas brancas. Eles são frequentemente chamados de bispo da “casa preta” e bispo da “casa branca”. Os bispos podem também ser chamados de acordo com o lado em que eles iniciam o jogo - bispo do rei e bispo da rainha.';
    
    case 'peao':
      return '\nPEAO\nO peão é peça mais numerosa e menos poderosa no tabuleiro de xadrez. Peões são diferentes no seu movimento. De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão não pode pular outras peças. Qualquer peça exatamente a frente de um peão bloqueia seu avanço para esta casa. O peão é a única peça que não pode mover-se para trás. O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente.';
    
    case 'rainha':
      return '\nRAINHA\nA rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.';
    
    case 'cavalo':
      return '\nCAVALO\nO cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial. O cavalo pode pular sobre peças de qualquer cor enquanto vai para sua casa de destino, mas ele não captura nenhuma das peças que pula. O cavalo captura quando termina seu movimento na casa de uma peça adversária. O cavalo não pode terminar seu movimento em uma casa ocupada por uma peça da mesma cor. Uma vez que o movimento do cavalo não é em linha reta, ele pode atacar uma rainha, bispo ou torre sem ser atacado reciprocamente por esta peça.';
      
    case 'torre':
      return '\nTORRE\nA torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária. A torre pode parar em qualquer casa do tabuleiro, sendo por isso uma das peças mais poderosas.\nA torre está também envolvida em um movimento especial. Ele é o movimento de roque onde uma torre e o rei são agrupados em uma posição defensiva.';

      case 'rei':
        return '\nREI\nO rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor. O rei captura outra peça da mesma maneira que se move, ocupando a casa da peça adversária. Existe um limite adicional ao movimento do rei. O rei não pode se mover para uma casa que o coloque sob ataque de uma peça adversária (chamado em “cheque”). Como resultado desta limitação, dois reis nunca poderão estar ao lado um do outro - uma vez que mover-se para o lado do outro rei o colocaria em cheque. O rei pode também ser forçado a mover-se ou capturar se estiver sob ataque (“cheque”) e a única maneira de interromper o ataque for mover o rei.';
      
      default:
        return '\nPeça Inválida';

  }
}

// console.log(xadrez('tico'));

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

function notaConceito(nota){
  switch(true){

  case (nota<0 || nota>100):
    return 'Erro - Nota Inválida'; 

  case nota>=90:
    return 'A';
  
  case nota>=80:
    return 'B';
  
  case nota>=70:
    return 'C';

  case nota>=60:
    return 'D';

  case nota>=50:
    return 'E';

  case nota<50:
    return 'F'

  }
}
// console.log(notaConceito(92));

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
function containEven(num1,num2,num3){
  let isTrue = false;
  for (index in arguments){
    if (arguments[index] % 2 === 0){
      isTrue = true;
    }
  }
  return isTrue;
}
// console.log(containEven(2,1,1));

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
function containEven(num1,num2,num3){
  let isTrue = false;
  for (index in arguments){
    if (arguments[index] % 2 != 0){
      isTrue = true;
    }
  }
  return isTrue;
}
// console.log(containEven(1,1,2));

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

function profit(cost,sale){
  let tax = 0.20;
  let totalCost = cost + ( cost * tax );
  let totalProfit = sale -totalCost;
  if (cost > 0 && sale > 0){
    return totalProfit;
  }else{
    return 'valores de entrada inválidos';
  }
}
// console.log(profit(50,100));

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

function inss(grossSalary){
  let rate;
  switch (true){

    case grossSalary > 5189.82:
      rate = 570.88;
      break;
    case grossSalary <= 1556.94:
      rate = grossSalary * 0.08;
      break;
    case grossSalary <= 2594.92:
      rate = grossSalary * 0.09;
      break;
    case grossSalary <= 5189.82:
      rate = grossSalary * 0.11;
      break; 
  }
  return rate;
}

function ir(grossSalary){
  let baseSalary = grossSalary - inss(grossSalary);
  let rate;
  switch (true){

    case baseSalary > 4664.68:
      rate = (baseSalary *.24) - 869.36;
      break;
    case baseSalary < 2826.65:
      rate = (baseSalary*0.075)-142.80
      break;
    case baseSalary <= 1903.98:
      rate = 0;
      break;
    case baseSalary <= 3751.05:
      rate = (baseSalary*.15)-358.80;
      break;
    case baseSalary <= 4664.68:
      rate = (baseSalary*.225)-636.13;

  }
  return (rate);
}

function netSalary(grossSalary){
  let salary = (grossSalary - inss(grossSalary)) - ir(grossSalary);
  return salary;
}

// console.log('\nIR .............: '+ir(3000));
// console.log('INSS ...........: '+inss(3000));
// console.log('SALÁRIO LÍQUIDO : '+netSalary(3000));