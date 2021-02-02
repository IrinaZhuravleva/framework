/**
 * First load environment variables
 */
const { loadEnvironment } = require('./config/mocha/handle-environment');

const envName = loadEnvironment();

const mochaConfig = {
    "diff": true,
    "extension": ["ts"],
    "package": "../package.json",
    "reporter": "spec",
    "slow": 1500,
    "timeout": 60000,
    "recursive": true,
    "file": ["./config/mocha/setup.ts"],
    "ui": "bdd",
    "watch-files": ["lib/**/*.js", "test/**/*.js"],
    "watch-ignore": ["lib/vendor"]
}

/**
 * For local testing use typescript settings.
 * For others use complied code.
 */
if (envName === 'QA' || process.env.IDEA_TS_LAUNCHER === 'true' || envName === 'LOCAL-TS') {
    mochaConfig.roots = ['<rootDir>/src'];
    mochaConfig.moduleNameMapper = { '@/(.*)': '<rootDir>/src/$1' };
} else {
    mochaConfig.roots = ['<rootDir>/dist'];
    mochaConfig.moduleNameMapper = { '@/(.*)': '<rootDir>/dist/$1' };
}

module.exports = mochaConfig;