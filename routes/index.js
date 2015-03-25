var express = require('express');
var router = express.Router();
var models = require('../models/');
var async = require('async');


router.get('/', function(req, res) {
	var asyncTasks = [
	function(done){models.Hotel.find({}, done)},
	function(done){models.Restaurant.find({}, done)},
	function(done){models.ThingToDo.find({},done)}
	];

	async.parallel(asyncTasks, function(err,data){
		res.render('index', {title: "Trip Planner", hotels:data[0], restaurants:data[1], things:data[2]});
		
	});
});



module.exports = router;