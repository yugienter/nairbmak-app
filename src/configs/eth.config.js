/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  NETWORK: 'Rinkeby',
  WORK: {
    ADDRESS: '0x5a5d01e417efbe9484b0c97fd080cbf50146afe6',
    DECIMALS: 18
  },
  DATABASE: {
    ADDRESS: '0xa0a4505b4f2b5955799c8e57ba780964953ba4c6'
  },
  DISTRIBUTION: {
    ADDRESS: '0x1407404667dd0f77849ac76cbf9c16cc59a101cc'
  },
};

/**
 * Production configurations
 */
config.production = {
  NETWORK: 'Rinkeby',
  WORK: {
    ADDRESS: '0x5a5d01e417efbe9484b0c97fd080cbf50146afe6',
    DECIMALS: 18
  },
  DATABASE: {
    ADDRESS: '0xa0a4505b4f2b5955799c8e57ba780964953ba4c6'
  },
  DISTRIBUTION: {
    ADDRESS: '0x1407404667dd0f77849ac76cbf9c16cc59a101cc'
  },
};

/**
 * Module exports
 */
module.exports = config;
