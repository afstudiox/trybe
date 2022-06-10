const { expect } = require('chai');
const validateNumber = require('../validateNumber.js')

describe('Verifica Números', () => {
  describe('É um número positivo', () => {
    describe('a resposta', () => {
      const validate = validateNumber(10);
      it('é uma string', () => {
        expect(validate).to.be.a('string');
      })
      it('é igual a "positivo"', ()=> {
        expect(validate).to.be.equal('positivo');
      });
    });
  });
  
  describe('É um numero negativo', () => {
    describe('a resposta', () => {
      const validate = validateNumber(-10);
      it('é uma string', () => {
        expect(validate).to.be.a('string');
      })
      it('é igual a "negativo"', ()=> {
        expect(validate).to.be.equal('negativo');
      });
    });
  });

  describe('É um número neutro', () => {
    describe('a resposta', () => {
      const validate = validateNumber(0);
      it('é igual a "neutro"', () => {
        expect(validate).to.be.equal('neutro');
      });
    });
  });

  describe('Não é um número', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const validate = validateNumber('AAAA');
        expect(validate).to.be.a('string');
      })

      it('é igual a "o parâmetro deve ser um número"', () => {
        const validate = validateNumber('AAA');
        expect(validate).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});