import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { lensMock, lensMockWithId } from '../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId)
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

})