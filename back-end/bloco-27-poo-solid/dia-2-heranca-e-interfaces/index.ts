class Superclass {
  constructor(
    public isSuper: boolean
  ){}

  sayHello() {
    console.log('Ola Mundo');
  }
}

class Subclass extends Superclass{
  constructor(isSuper: boolean){
    super(true)
  }
}

const myFunc = (superclass: Superclass) => {
  superclass.sayHello();
  if(superclass.isSuper){
    console.log('Super!')
  } else {
    console.log('Sub!');
  }
}

const objSuper = new Superclass(false);
const objSub = new Subclass(false);

myFunc(objSuper);
myFunc(objSub);