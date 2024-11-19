const app = require('./app'); 
const http = require('http');
const debug = require("debug")('backend:server');

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
  let port = parseInt(val, 10);

  if (isNaN(port)){
    return val
  }

  if (port >= 0){
    return port
  }

  return false;
}

function onError(error){
  if (error.syscall !== 'listen'){
    throw error;
  }

  let bind = typeof port === 'string'
  ? 'Pipe ' + port 
  : 'Port ' + port;

  switch(error.code){
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening(){
    let addr = server.address();
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr 
      : 'port ' + addr.port;
      debug('En cours d\'execution sur le ' + bind);
}