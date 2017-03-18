// server.js


//setupe
 var express  = require('express');
 var app      = express();
 //var mongoose = require('mongoose');          // mongoose for mongodb
 var morgan = require('morgan');             // log requests to the console (express4)
 var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
 var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


//configuracao
//mongoose.connect('');     // connect to mongoDB database
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());



//inicializacao
app.listen(8080);
console.log("App listening on port 8080");


//rotas
app.get('/horaAtual', function(req, res){
	var data= {};
	data.text = "jucelinux";
	res.json(data);
});

app.post('/ok', function(req, res){
	var data = {};
	data.text = req.body.text;
	res.json(data);
});

//Aplicacao
app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});