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
    ADDRESS: '0xd8c0bd962c5199e6e0fbf8167effd3e4f4ffab52'
  },
};

/**
 * Production configurations
 */
config.production = {
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
 * Module exports
 */
module.exports = config;
