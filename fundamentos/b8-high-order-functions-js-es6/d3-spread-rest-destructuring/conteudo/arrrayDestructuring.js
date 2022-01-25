const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá


[Ola, funcao] = saudacoes;

funcao(Ola);