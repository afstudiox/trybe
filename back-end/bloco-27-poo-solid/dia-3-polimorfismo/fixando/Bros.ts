abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void { console.log('Talk MeleeCharacter') }
  specialMove(): void { console.log('Move MeleeCharacter')}
}

class LongRangeCharacter  extends Character {
  talk(): void { console.log('Talk LongRangeCharacter') }
  specialMove(): void { console.log('Move LongRangeCharacter') }
}

const melee = new MeleeCharacter();
const long = new LongRangeCharacter();

const showCharacter = (character: Character ) => {
  character.talk();
  character.specialMove();
}

showCharacter(melee);
showCharacter(long);







