export type TestResultsAvailableMessageJSON =
    {
        payload:
            {
                eventId: string;
                source: string;
                originator: string;
                specimenId: string;
                sentAt: string;
                payload?:
                    {
                        result?: string;
                    }
            },
        messageName: string;
        customProperties:
            {
                command: string;
            }
    }