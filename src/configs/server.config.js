/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  PORT: 5000,
  API: {
    URL: 'http://localhost:3000',
    SET: '/report/set',
    GET: '/report/get'
  }
}

/**
 * Production configurations
 */
config.production = {
  PORT: 5000,
  API: {
    URL: 'http://localhost:3000',
    SET: '/report/set',
    GET: '/report/get'
  }
}

/**
 * Module exports
 */
module.exports = config;