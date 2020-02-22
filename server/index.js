


const keypressHandler = require('./js/keypressHandler');
var currentDirection = '';
module.exports.getCurrentDirection = () =>{
  return currentDirection;}
module.exports.setCurrentDirection = () => {
  currentDirection = ''
}
keypressHandler.initialize(message => {
  currentDirection += message;
  // console.log(`Message received, big boy: ${message}`)
  // var options = ['up','down','left','right']
  // if (options.includes(`${message}`)) {
  //   console.log('Valid Message');

  })

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);