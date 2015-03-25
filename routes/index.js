var express = require('express');
var router = express.Router();
var models = require('../models/');
var async = require('async');


router.get('/', function(req, res) {
	var asyncTasks = [];

	asyncTasks[0] = function(done){models.Hotel.find({}, function(err, hotels){
		done(err, hotels);
		});
	};
	asyncTasks[1] = function(done){models.Restaurant.find({}, function(err, restaurants){
		done(err, restaurants);
		});
	};
	asyncTasks[2] = function(done){models.ThingToDo.find({}, function(err, things){
		done(err, things);
		})
	};		

	async.parallel(asyncTasks, function(err,data){
		res.render('index', {title: "Trip Planner", hotels:data[0], restaurants:data[1], things:data[2]});
		
	});
});



module.exports = router;