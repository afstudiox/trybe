const valorCusto = 50;
const valorVenda = 100;
let impostoProduto = valorCusto*0.2; 
let valorCustoTotal = valorCusto+impostoProduto; 
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
    console.log("\nValores de entrada inválido!");
}else{
    console.log("\nO lucro na venda de mil unidades do produto é R$",lucro*1000);
} 


