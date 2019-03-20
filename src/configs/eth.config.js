var tokenABI = require('./data/tokenABI.json');

/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    ABI: tokenABI,
    DECIMALS: 18
  },
  // BLOCKCHAIN_PROVIDER: 'http://localhost:8545',
  // KATT: {
  //   ADDRESS: '0xa1dcd70c009de7dbf64f0bdd903c7c990287931d',
  //   ABI: tokenABI,
  //   DECIMALS: 18
  // },
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Staging configurations
 */
config.staging = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    ABI: tokenABI,
    DECIMALS: 18
  },
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Production configurations
 */
config.production = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    ABI: tokenABI,
    DECIMALS: 18
  },
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Module exports
 */
module.exports = config;
