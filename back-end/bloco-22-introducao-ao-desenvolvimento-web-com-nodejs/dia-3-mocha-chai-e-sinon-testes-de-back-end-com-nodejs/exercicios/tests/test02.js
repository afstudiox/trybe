const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('../writeFile');

describe('Execute writeFile function', ()=> {
  
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  })
  
  after(() => {
    fs.writeFileSync.restore();
  })

  describe('the answer', ()=> {
    
    it('to be a string', ()=> {
      const answer = writeFile('file.txt', '#vqv content');
      expect(answer).to.be.a('string');
    });

    it('to be equal a "ok"', () => {
      const answer = writeFile('file.txt', '#vqv content');
      expect(answer).to.be.equals('ok');
    })
  });
})