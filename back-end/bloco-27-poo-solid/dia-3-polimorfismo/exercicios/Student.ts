import Person from "./Persons";

export default class Student extends Person{
  private _enrollment = String(); // NÃO ENTENDI O String() NESTE LOCAL.
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate); // qual a relação dos parametros do contructor com os paramêtros do super neste cas0 
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }

  get examsGrades(): number[]{
    return this._examsGrades;
  }

  set examsGrades(value: number[]){
    if (value.length > 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    this._examsGrades = value;
  }

  get worksGrades(): number[]{
    return this._worksGrades
  }

  set worksGrades(value: number[]){
    if (value.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 2 nostas de trabalhos');
    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const ramdomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${ramdomStr}`;
  }
}

// class estudantes {
//   matricula: string;
//   nome: string;
//   provas: number[]
//   trabalhos: number[]
  
//   constructor (
//     matricula: string,
//     nome: string,
//     provas: number[],
//     trabalhos: number[],
//   ){
//     this.matricula = matricula;
//     this.nome = nome,
//     this.provas = provas,
//     this.trabalhos = trabalhos
//   }

//   somaNotas() {
//     const provas =  this.provas.reduce((acc, nota) => acc + nota, 0 );
//     const trabalhos = this.trabalhos.reduce((acc, nota) => acc + nota, 0 )
//     return provas + trabalhos;
//   }

//   mediaNotas() {
//     const media = this.somaNotas() / (this.provas.length + this.trabalhos.length);
//     return media;
//   }
// }

// const andre = new estudantes('007', 'Andre Felipe', [5,5,5,5], [5,5]);

// console.log(andre);

// console.log('A soma das notas é ', andre.somaNotas());
// console.log('A média das notas é ', andre.mediaNotas());