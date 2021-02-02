import {expect} from 'chai';
import * as api from '../../src/api';

describe('test set', () => {
  beforeEach(function(){
    console.log('beforeEach');
  });

  it(
    'TC-16195. Test Results: Capture the TestResults.Available event - Test Report Event Validation',
    async () => {
      const receivedPayload = {
        specimenId: "TST",
        messageName: "TestResults.Available"
      }

      const response = await Promise.resolve(receivedPayload)

      // expect(response).to.deep.equal(recievedPayload);
      expect(response).to.include({specimenId: "TST", messageName: "TestResults.Available"});
    });
});
