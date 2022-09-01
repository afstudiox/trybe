// import Person from './Persons';
import Employee from './Employee';
import Student from './Student';
import Subject from './Subject';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
// deve retornar um erro >>  fernando.worksGrades = [45, 45, 45]; 

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
// console.log(fernando);


// Testando a interface Employee
const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FNC${randomStr}`;
  },
}; 
console.log(testInterfaceEmployee);

// testando a classe Subject
const math = new Subject('Matemática');
const history = new Subject('HIstória');
const philosophy = new Subject('Filosofia');
const invalidSubjectName = new Subject('Po')

console.log(math);
console.log(history);
console.log(philosophy);
console.log(invalidSubjectName);