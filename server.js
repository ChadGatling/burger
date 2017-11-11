var express = require('express');
var methodoverride = require('method-override');
var bodyparser = require('body-parser');
var http = require('http');
var path = require('path');

var burgersController = require('./controllers/burgers_controller.js')
var burger = require("./models/burger.js");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyparser.urlencoded({extended: false}));

//Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use('/public', express.static(path.join(__dirname, 'public')))

// Create routes and set ip logic if required
app.get("/", function(req, res) {
	burger.all(function(dataRes) {
		res.render("index", {burgers: dataRes});
	});
});

app.get("/add", function(req, res) {
	res.render("add");
});

app.post("/api/add", function(req, res) {
	
	console.log(req.body.name);
	burger.insert(req.body.name);
	res.send(req.body);
});

// app.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };                              **Example from activity**
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });

// Import the rooutes with the express function as a callback
// burgersController(express());

app.use("/api/burgers", burgersController);

app.listen(PORT, function() {
	console.log("Listening on port " + PORT + ".");
});