// REQUIRING PACKAGES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./config/db");

const Customers = require("./models/customers.js");
const Menus = require("./models/menus.js");
const Orders = require("./models/orders.js");
const Trucks = require("./models/trucks.js");

const PORT = process.env.PORT || 5000;
// app.use(express.static(__dirname));
// app.get("./")

var app = express();

mongoose.connect(dbConfig.STRING);

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
