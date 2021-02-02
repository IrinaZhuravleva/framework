import convict = require('convict');

const values = convict({
    environment: {
        doc: 'The application environment.',
        format: ['local', 'local-ts', 'develop', 'qa', 'stage'],
        default: 'develop',
        env: 'ENVIRONMENT',
    },
    jestTimeout: {
        doc: 'Timeout for tests',
        format: 'int',
        default: 200000,
    },
    e2eTimeout: {
        doc: 'Timeout for e2e tests',
        format: 'int',
        default: 90000,
    },
    rest: {
        baseUrl: {
            doc: 'URL of backend api server where to send requests',
            env: 'API_BASE_URL',
            default: 'http://localhost:3000',
            format: 'url',
        },
    },
    database: {
        host: {
            default: 'localhost',
            env: 'APP_DB_HOST',
            doc: 'Database host',
            format: String,
        },
        port: {
            default: 5432,
            env: 'APP_DB_PORT',
            doc: 'Database port',
            format: Number,
        },
        username: {
            default: 'test',
            env: 'APP_DB_USERNAME',
            doc: 'Database username',
            format: String,
        },
        password: {
            default: 'test',
            env: 'APP_DB_PASSWORD',
            doc: 'Database password',
            format: String,
        },
        name: {
            default: 'db_integration',
            env: 'APP_DB_NAME',
            doc: 'Database name',
            format: String,
        },
        ssl: {
            default: 'true',
            env: 'APP_DB_SSL',
            doc: 'Is SSL connection',
            format: Boolean,
        },
        connectionTimeout: {
            default: 1200000,
            env: 'APP_DB_TIMEOUT',
            doc: 'idleTimeoutMillis',
            format: Number,
        },
        poolSize: {
            default: 50,
            env: 'APP_DB_POOLSIZE',
            doc: 'Connection pool size',
            format: Number,
        },
    },
});

values.validate({ allowed: 'strict' });

export const config = values.getProperties();
