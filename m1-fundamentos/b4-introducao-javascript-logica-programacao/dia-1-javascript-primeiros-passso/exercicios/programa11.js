const salarioBruto = 3000;

let salarioDeduzido;
let salarioLiquido;
let inss;
let ir;

//calculando o inss
if (salarioBruto < 1556.94 ){
    inss = salarioBruto*.08;
} else if (salarioBruto < 2594.92){
    inss = salarioBruto*.09;
} else if (salarioBruto < 5189.82){
    inss = salarioBruto*.11;
} else {
    inss = 570.88
}

//calculando salario deduzido para calculo do imposto de renda
salarioDeduzido = salarioBruto - inss;

//calculando o ir
if (salarioDeduzido < 1903.98){
    ir=0;
} else if (salarioDeduzido < 2826.65){
    ir=(salarioDeduzido*.075)-142.80;
} else if (salarioDeduzido < 3751.05){
    ir=(salarioDeduzido*.15)-354.80;
} else if (salarioDeduzido < 4664.68){
    ir=(salarioDeduzido*.225)-636.13;
} else {
    ir=(salarioDeduzido*.275)-869.36;
}

//calculando o salario liquido
salarioLiquido = salarioDeduzido-ir;



console.log("\nValor do INSS: R$",inss.toFixed(2));
console.log("\nSalário Deduzido(Salário Bruto-INSS): R$",salarioDeduzido.toFixed(2));
console.log("\nValor do IR: R$",ir.toFixed(2));
console.log("\nSalário Líquido: R$",salarioLiquido.toFixed(2));