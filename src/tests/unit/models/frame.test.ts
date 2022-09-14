// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import IFrame from '../../../interfaces/Frame';

describe('Frame Model', () => {
  const frameModel = new FrameModel();
  const frameList = [frameMockWithId, {id: 'xxx', material: 'Prata', color: 'De outro naipe'}];

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(frameList);
    sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('Invalid MongoId');
			}
		});
	});

  describe('searching frames', () => {
    it('', async () => {
      const frameFound = await frameModel.read();
      expect(frameFound).to.be.an('array');
      frameFound?.forEach((frame: IFrame, index: number) => {
        expect(frame).to.be.deep.equal(frameList[index]);
      })
    })
  })

  describe('deleting frame', () => {
    it('sucessfully found', async () => {
      const frameDeleted = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(frameDeleted).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.destroy('123ERRADO')
      } catch (error: any) {
        expect(error.message).to.be.eq('Invalid MongoId')
      }
    });
  })

});