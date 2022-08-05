"use strict";
class cliente {
    constructor(nome) { this.nome = nome; }
}
class itemPedido {
    constructor(produto, preco) { this.produto = produto, this.preco = preco; }
}
class pedido {
    constructor(cliente, itensConsumidos, formaPagamento, desconto) {
        this.cliente = cliente,
            this.itensConsumidos = itensConsumidos,
            this.formaPagamento = formaPagamento,
            this.desconto = desconto;
    }
    totalPedido() {
        return this.itensConsumidos.reduce((acc, { preco }) => acc + preco, 0);
    }
    totalComDesconto() {
        return this.totalPedido() * this.desconto;
    }
}
// instanciando o pedido
const ped = new pedido('Andre', [
    { produto: 'hamburguer', preco: 20 },
    { produto: 'Coca', preco: 5 }
], 'Cartão', 0.5);
// chamando os metodos
const totalPedido = ped.totalPedido();
const totaPedidoComDesocnto = ped.totalComDesconto();
// imprimindo na tela os valores dos metodos
console.log(totalPedido);
console.log(totaPedidoComDesocnto);
