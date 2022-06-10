const { expect } = require('chai');
const validateNumber = require('../validateNumber.js')

describe('Check Numbers', () => {
  describe("It's a positive number", () => {
    describe('the answer', () => {
      const validate = validateNumber(10);
      it('is a string', () => {
        expect(validate).to.be.a('string');
      })
      it('is equal to "positivo"', ()=> {
        expect(validate).to.be.equal('positivo');
      });
    });
  });
  
  describe("It's a negative number", () => {
    describe('the answer', () => {
      const validate = validateNumber(-10);
      it('is a string', () => {
        expect(validate).to.be.a('string');
      })
      it('is equal to "negativo"', ()=> {
        expect(validate).to.be.equal('negativo');
      });
    });
  });

  describe('Is a neutral number', () => {
    describe('the answer', () => {
      const validate = validateNumber(0);
      it('is equal to "neutro"', () => {
        expect(validate).to.be.equal('neutro');
      });
    });
  });

  describe("It´s not a number", () => {
    describe('the answer', () => {
      it('is a string"', () => {
        const validate = validateNumber('AAAA');
        expect(validate).to.be.a('string');
      })

      it('is equal to "o parâmetro deve ser um número"', () => {
        const validate = validateNumber('AAA');
        expect(validate).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});