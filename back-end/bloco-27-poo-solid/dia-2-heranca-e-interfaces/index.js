"use strict";
class Superclass {
    constructor(isSuper) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Ola Mundo');
    }
}
class Subclass extends Superclass {
    constructor(isSuper) {
        super(true);
    }
}
const myFunc = (superclass) => {
    superclass.sayHello();
    if (superclass.isSuper) {
        console.log('Super!');
    }
    else {
        console.log('Sub!');
    }
};
const objSuper = new Superclass(false);
const objSub = new Subclass(false);
myFunc(objSuper);
myFunc(objSub);
