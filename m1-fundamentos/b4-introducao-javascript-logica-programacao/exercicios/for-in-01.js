//Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
// console.log(`Bem vinda, ${info.personagem}`);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
// info['recorrente']='Sim';
// console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. 
// for (index in info){
//   console.log(index);
// }

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// for (index in info){
//   console.log(info[index])
// }

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

// let tudo = [
// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'nao'
//  },
// {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// }];

// let somaPersonagem, somaOrigem, somaNota, somaRecorrente;

// for (index in tudo){
//   if(index<1){
//     somaPersonagem = tudo[index].personagem+' e ';
//     somaOrigem = tudo[index].origem+' e ';
//     somaNota = tudo[index].nota+' e ';
//   }else{
//     somaPersonagem += tudo[index].personagem;
//     somaOrigem += tudo[index].origem;
//     somaNota += tudo[index].nota;
//   }



// }
// console.log(somaPersonagem);
// console.log(somaOrigem);
// console.log(somaNota);
// console.log('Ambos recorrentes');
