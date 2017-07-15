// REQUIRING PACKAGES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Customers = require("./models/customers.js");
var Menus = require("./models/menus.js");
var Orders = require("./models/orders.js");
var Trucks = require("./models/trucks.js");

var PORT = 5000;
var app = express();

mongoose.connect("mongodb://localhost/upnext");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// HANDLE THE "/" ROUTE BEING REQUESTED BY THE USER
app.get("/", function(req, res) {
	res.send("Welcome to upNext");
});

require('./server/routes/customer')(app);
require('./server/routes/menus')(app);
require('./server/routes/orders')(app);
require('./server/routes/trucks')(app);

// THE HOUSE ADDRESS OF WHERE THE SERVER IS LOCATED WHEN INITIATED
app.listen(PORT, function () {
	console.log("Listening at port: " + PORT);
});
