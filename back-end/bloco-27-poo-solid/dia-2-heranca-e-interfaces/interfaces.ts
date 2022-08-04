interface Myinterface {
  myNumber: number;
  myFunc(myParam:number): String;
}

class MyClass implements Myinterface {
  constructor(
    public myNumber: number,
  ){}

  myFunc(myParam: number): string {
      const result = this.myNumber + myParam
      return String(result);
  }
}

// instanciando o objeto com o myNumber = 5
const objeto = new MyClass(5);

// chamando a funcao myfunc que soma o myNumber com o parametro passada na chamada
console.log(objeto.myFunc(2));
