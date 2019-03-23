/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  NETWORK: 4,
  WORK: {
    ADDRESS: '0x76c5b4def19c1262e120ca1195e7722cbd6c81e6'
  },
  DATABASE: {
    ADDRESS: '0x46211ebb6a9c98a7768dfe37e55ea7474351d760'
  },
  DISTRIBUTION: {
    ADDRESS: '0xda2cdf61ac02117250f786037a47692bbf8d3516'
  },
};

/**
 * Production configurations
 */
config.production = {
  NETWORK: 4,
  WORK: {
    ADDRESS: '0x47d9aeb41b4d7e489deedde1438b5c74fa0f436d'
  },
  DATABASE: {
    ADDRESS: '0x7b25c54f9ac5efd0efd8d7e5b0e87eef150b11b0'
  },
  DISTRIBUTION: {
    ADDRESS: '0x2b87beef112d8d2a30fc5e8716637f3ceb0e7c8c'
  },
};

/**
 * Module exports
 */
module.exports = config;
