var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create the `router` for the app, and export the `router` at the end of your file.
var router = function (app) {
	app.get("/", function(req, res) {
		burger.all(function(dataRes) {
			res.render("index", {burgers: dataRes});
		});
	});
	app.get("/add", function(req, res) {
		console.log("Getting add.");
		burger.insert(req, res);
	});

	app.post("/", function (req, res) {
		console.log("Posting root.");
	});

	app.put("/", function(req, res) {
		console.log("Putting root.");
	});

	app.delete("/", function(req, res) {
		// body...
	});
}

module.exports = router;