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

        it(
            '2nd test',
            async () => {
                console.log('2nd test');
            });
    });

