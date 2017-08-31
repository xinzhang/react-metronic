var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var publicFolder = path.join(__dirname, '../build');

var app = express();
var port = process.env.PORT || 9093

//set up proxy
var tokenProxy = proxy({
  target: 'http://192.168.10.54:9092/ClientPortal.Security.API/',
  ws: true
});

var apiProxy = proxy({
  target: 'http://localhost:27969/',
  ws:true
});

//use in express
app.use(express.static(publicFolder));
app.use('/token', tokenProxy);
app.use('/api', apiProxy);

//start server
app.listen(port, ()=> {
  console.log('server is started in port', port);
})
