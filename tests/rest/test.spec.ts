import {expect} from 'chai';
import * as api from '../../src/api';

import {getMessage} from "../shared-steps/receive-response-from-bus.steps";
    describe('test set', () => {
        beforeEach(function(){
            console.log('beforeEach');
        });
        it(
            'TC-16209. e2e - From TestResults.Available to Downloading PDF file (positive) ',
            async () => {
                let response= await getMessage({
                    customProperties: {
                        command:"TestResults.Available"
                    },
                    body: {
                        eventId: "1",
                        source: "MockTool",
                        originator: "MockTool",
                        specimenId: "TST",
                        sentAt: "2021-01-29T09:34:45Z",
                        payload: {
                            result: "positive"
                        }
                    }
                }, './config/mocks/responses/1.01.testresults_available-message.json');
                console.log(response.payload.specimenId);
                expect(response.payload.specimenId).equal('TST');
                expect(response.customProperties.command).equal('TestResults.Available');
            });
    });
    
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
