// REQUIRING PACKAGES
const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

var PORT = 5000;
var app = express();

// HANDLE THE "/" ROUTE BEING REQUESTED BY THE USER
var customerRoute =  require('./server/routes/customer')(app);
customerRoute(app)

var menusRoute =  require('./server/routes/menus')(app);
menusRoute(app)

var ordersRoute =  require('./server/routes/orders')(app);
ordersRoute(app)

var trucksRoute =  require('./server/routes/trucks')(app);
trucksRoute(app)
//require('./server/routes/order.js');

// THE HOUSE ADDRESS OF WHERE THE SERVER IS LOCATED WHEN INITIATED
app.listen(PORT, function () {
	console.log("Listening at port: " + PORT);
});
