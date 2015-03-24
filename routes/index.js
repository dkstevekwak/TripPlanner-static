var express = require('express');
var router = express.Router();
var models = require('../models/');
var async = require('async');








router.get('/', function(req, res) {

	var asyncTasks = [];
	


	asyncTasks[0] = function(){models.Hotel.find({}, function(err, hotels){
		res.render('index', {title: "Trip Planner", hotels:hotels});}
	asyncTasks[1] = function(){models.Restuarant.find({}, function(err, restuarants){
		res.render('index', {restuarants:restuarants});}
	asyncTasks[2] = function(){models.ThingToDo.find({}, function(err, things){
		res.render('index', {things:things});}		
	

	async.parallel(asyncTasks, function(done){
		done();
		});
	
	
});



module.exports = router;