import { config } from './config/environment';
// Update with your config settings.

const devConf = config.development;
const stagingConf = config.staging;
const productionConf = config.production;

module.exports = {
  development: devConf.db,

  staging: stagingConf.db,

  production: productionConf.db,
};
