"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persons_1 = require("./Persons");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = String(); // NÃO ENTENDI O String() NESTE LOCAL.
        _this._examsGrades = [];
        _this._worksGrades = [];
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16)
                throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4)
                throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (value) {
            if (value.length > 2)
                throw new Error('A pessoa estudante deve possuir no máximo 2 nostas de trabalhos');
            this._worksGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.generateEnrollment = function () {
        var ramdomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(ramdomStr);
    };
    return Student;
}(Persons_1.default));
exports.default = Student;
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
