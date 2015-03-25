
var express = require('express');
var swig = require('swig');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var add_routes = require('./routes/add');
var sass = require('node-sass');
var routes = require('./routes/index');



var app = express();

app.engine('html',swig.renderFile);
app.set('views', __dirname+'/views');
app.set('view engine', 'html');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  sass.middleware({
    src: __dirname + '/assets', //where the sass files are 
    dest: __dirname + '/public', //where css should go
    debug: true
  })
);

app.use(express.static(__dirname + '/public'));

app.use('/', routes);


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into next())
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render('index', {
        message: err.message,
        error: {}
    	}
    );
});








app.listen(3000, function(){
	console.log("starting server!")
});




module.exports = app;


