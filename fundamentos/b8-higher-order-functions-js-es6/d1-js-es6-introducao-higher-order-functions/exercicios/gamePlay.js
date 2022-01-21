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

const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const damageDragon = () =>  randomNumber(15,dragon.strength);

const damageWarrior = () => randomNumber(warrior.strength,warrior.strength * warrior.weaponDmg);

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

const battleMembers = { mage, warrior, dragon };

const warriorDragon = () => {
  let damage = damageWarrior();
  dragon.healthPoints -= damage;
  warrior.damage = damage;
};

const mageDragon = () => {
  let damage = damageMage();
  dragon.healthPoints -= damage.damage;
  mage.damage = damage.mana;
};

const dragonAll = () => {
  let damage = damageDragon();
  warrior.healthPoints -= damage;
  mage.healthPoints -= damage;
  dragon.mage = damage;
}

const gameActions = {
  warriorDragon: warriorDragon, 
  mageDragon: mageDragon,
  dragonAll: dragonAll
};

gameActions.warriorDragon();
gameActions.mageDragon();
gameActions.dragonAll();

console.log(battleMembers);






