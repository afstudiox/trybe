"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Subject_1 = require("./Subject");
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student_1.default('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student_1.default('Tamires Santos Bastos', new Date('2005/11/05'));
var fernando = new Student_1.default('Fernando Gonçalves', new Date('2006/09/11'));
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
var testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FNC".concat(randomStr);
    },
};
console.log(testInterfaceEmployee);
// testando a classe Subject
var math = new Subject_1.default('Matemática');
var history = new Subject_1.default('HIstória');
var philosophy = new Subject_1.default('Filosofia');
var invalidSubjectName = new Subject_1.default('Po');
console.log(math);
console.log(history);
console.log(philosophy);
console.log(invalidSubjectName);
