let http = require('http');

/**
 * Web Server
 * Web Application is deployed on webServer
 */


//create a Server and Application deploy on created server
//console.log(http);
//Application
let callback = function (request, response) {
    response.write('Welcome to Node Web Service');
    response.end();
};
//Server
let Server = http.createServer(callback);

Server.listen(3000, function () {
    console.log('Server is Ready!');
})