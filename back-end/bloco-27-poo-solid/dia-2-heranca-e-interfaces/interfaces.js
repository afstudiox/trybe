"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const result = this.myNumber + myParam;
        return String(result);
    }
}
const objeto = new MyClass(5);
console.log(objeto.myFunc(2));
