const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};


// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno. O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo). A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.


// funcao que gera um numero aleatorio entre 15 e o strength do dragão
const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const damageDragon = () =>  randomNumber(15,dragon.strength);
// console.log(damageDragon());

const damageWarrior = () => randomNumber(warrior.strength,warrior.strength * warrior.weaponDmg);
// console.log(damageWarrior());

const damageMage = () => {
  let newAtack = {};
  if (mage.mana > 15){
    newAtack.damage = randomNumber(mage.intelligence,mage.intelligence*2);
    mage.mana -=15;
  } else {
    newAtack.damage = "Não possui mana suficiente";
  }
  newAtack.mana = mage.mana;
  return newAtack;
};

console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());
console.log(damageMage());

const battleMembers = { mage, warrior, dragon };


