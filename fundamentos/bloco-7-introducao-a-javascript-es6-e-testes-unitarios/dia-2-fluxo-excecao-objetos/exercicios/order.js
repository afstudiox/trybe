const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order['name']}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº ${order.address.number}, Apto ${order.address.apartment}`;
}

customerInfo(order);
console.log(customerInfo(order))

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  //Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newPayment = order.order.payment = 50;

  return `Olá ${newBuyer} o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newPayment},00.`;
}

orderModifier(order);
console.log(orderModifier(order));