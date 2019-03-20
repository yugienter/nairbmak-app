var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./src/configs');


/**
 * Helpers
 */
var root = function (x) {
  return path.join(__dirname, x);
}

/**
 * Creating express server
 */
var app = express();
var server = http.createServer(app);

/**
 * Set up statics
 */
app.use(express.static(root('build')));

/**
 * Routes
 */
app.get('/*', function (req, res) {
  res.sendFile(root('build/index.html'));
});

/**
 * Start server
 */
server.listen(config.server.PORT);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  var bind = typeof config.server.PORT === 'string' ? 'Pipe ' + config.server.PORT : 'Port ' + config.server.PORT;
  switch (error.code) {
    case 'EACCES':
      console.log(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('*** Listening on ' + bind);
}