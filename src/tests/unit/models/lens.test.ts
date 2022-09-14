import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ILens from '../../../interfaces/Lens';
import LensModel from '../../../models/Lens';
import { lensMock, lensMockWithId } from '../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();
  const listLens = [lensMockWithId]

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(listLens);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('sucessfully created', async ()=> {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  })
  
  describe('searching a len', () => {
    it('sucessfully found', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123errado');
      } catch (error: any) {
        expect(error.message).to.be.equal("Invalid MongoId");
      }
    })
  })

  describe('searching lens', () => {
    it('sucessfully found', async() => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.an('array');
      lensFound?.forEach((len: ILens, index: number) => {
        expect(len).to.be.deep.equal(listLens[index]);
      })
    })
  })



})