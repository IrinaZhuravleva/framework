/**
 * Object.freeze instead of enum since the module uses in jest.config.js
 */
const Environment = Object.freeze({
  Local: 'local',
  Develop: 'develop',
  QA: 'qa',
});

const Variable = Object.freeze({
  Environment: 'ENVIRONMENT',
  ApiBaseUrl: 'API_BASE_URL',
  UiBaseUrl: 'UI_BASE_URL',
});

/**
 * Function to check if all environment variables are exist in process.env
 * @returns {boolean}
 */
const checkAllEnvironmentVariablesExists = () => {
  const requiredVariables = [Variable.Environment, Variable.ApiBaseUrl, Variable.UiBaseUrl];
  const { env } = process;

  return requiredVariables.every(variable => Boolean(env[variable]));
};

const environmentPath = 'config/environment/.env';

/**
 *
 * @param {string} environment
 * @returns {string}
 */
const getEnvironmentPath = (environment) => {
  const isEnvironmentValid = Object.values(Environment).some(env => env === environment);

  if (!isEnvironmentValid) {
    throw new Error(`ENVIRONMENT '${environment}' is not correct`);
  }

  return `${environmentPath}.${environment}`;
};

/**
 * Function to load environment variables if needed.
 * If command line argument not passed then check that variables are specified on process.env.
 * Otherwise use default environment.
 * @returns {string} - environment name
 */
exports.loadEnvironment = () => {
  const chalk = require('chalk');
  // prettier-ignore
  const processArgs = require('minimist')(process.argv.slice(2)); // NOSONAR

  /**
     * load config from root .env with auth vars
     */
  require('dotenv').config();

  /**
     * if environment was provided in local .env file, use it further
     */
  if (!processArgs.environment && process.env.ENVIRONMENT) {
    processArgs.environment = process.env.ENVIRONMENT;
  }

  if ((!processArgs.environment && !checkAllEnvironmentVariablesExists()) || processArgs.environment) {
    if (!processArgs.environment) {
      processArgs.environment = Environment.QA;
    }

    const envPath = getEnvironmentPath(processArgs.environment.toLowerCase());

    /**
         * Load environment variables
         */
    require('dotenv').config({ path: envPath });
  }

  return processArgs.environment.toUpperCase();
};
