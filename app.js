
var express = require('express');
var swig = require('swig');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var add_routes = require('./routes/add');

var routes = require('./routes/index');



var app = express();

app.engine('html',swig.renderFile);
app.set('views', __dirname+'/views');
app.set('view engine', 'html');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);
app.listen(3000, function(){
	console.log("starting server!")
});








module.exports = app;