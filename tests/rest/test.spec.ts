import {expect} from 'chai';
import * as api from '../../src/api';
    describe('qwerty', () => {
        beforeEach(function(){
            console.log('beforeEach');
        });
        it(
            'TC-16209. e2e - From TestResults.Available to Downloading PDF file (positive) ',
            async () => {
                console.log(`${process.env.API_BASE_URL}`);
             let a =  await api.API.makeGetRequest(`${process.env.API_BASE_URL}`);
            });

        it(
            '2nd test',
            async () => {
                console.log('2nd test');
            });
    });

