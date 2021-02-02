/* tslint:disable */

import chalk from 'chalk';
import axios from 'axios';

before(async function(){
    console.log('this is beforeAll section');
        console.log('\n', chalk.green(`Tests are running on '${process.env.ENVIRONMENT}' environment`), '\n');
        console.log(chalk.green(`Backend url is: '${process.env.API_BASE_URL}'`), '\n');

        /**
         * Do health check of backend server
         */
        console.log(chalk.green('Check backend server'));

        try {
            await axios.get(`${process.env.API_BASE_URL}/health_check/liveness`);
        } catch (error) {
            console.error(
                chalk.red('BACKEND SERVER IS DOWN'),
                '\n',
                'Please check backend server url correctness',
                '\n',
                error
            );
            process.exit(1);
        }

        console.log(chalk.green('Backend server is available!'));
    }
);

