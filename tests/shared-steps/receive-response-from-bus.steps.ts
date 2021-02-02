
import {TestResultsAvailable} from "../../config/mocks/requests/testresults-available.json";
import {readFileSync} from "fs";
import {TestResultsAvailableMessageJSON} from "../../config/mocks/responses/TestResultsAvailableMessageJSON";

export  async function getMessage(values:TestResultsAvailable, path: string):Promise<TestResultsAvailableMessageJSON>{
    const {
        customProperties: {
            command
        },
        body: {
            eventId,
            source,
            originator,
            specimenId,
            sentAt,
            payload: {
                result,
            }
        }
    } = values;
    const fileResponse = readFileSync(path, 'utf-8');
    let responseObj = JSON.parse(fileResponse);
    return responseObj;
}