export type TestResultsAvailable =
    {
        customProperties: {
            command: string;
        },
        body: {
            eventId: string;
            source: string;
            originator: string;
            specimenId: string;
            sentAt: string;
            payload: {
                result: string;
            }
        }
    }

