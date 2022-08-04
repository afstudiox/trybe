"use strict";
class Character {
}
class MeleeCharacter extends Character {
    talk() { console.log('Talk MeleeCharacter'); }
    specialMove() { console.log('Move MeleeCharacter'); }
}
class LongRangeCharacter extends Character {
    talk() { console.log('Talk LongRangeCharacter'); }
    specialMove() { console.log('Move LongRangeCharacter'); }
}
const melee = new MeleeCharacter();
const long = new LongRangeCharacter();
const showCharacter = (character) => {
    character.talk();
    character.specialMove();
};
showCharacter(melee);
showCharacter(long);
