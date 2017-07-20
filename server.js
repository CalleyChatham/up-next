// REQUIRING PACKAGES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Facebook Login
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

const CLIENT_ID = '108759676442437';
const CLIENT_SECRET = '250f3416cd4fb9767b85056175b8919f';

passport.use(new Strategy({
    // clientID: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
//FB 


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


//FB Continued
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define Log In Routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

//FB 

require('./server/routes/customer')(app);
require('./server/routes/menus')(app);
require('./server/routes/orders')(app);
require('./server/routes/trucks')(app);

// THE HOUSE ADDRESS OF WHERE THE SERVER IS LOCATED WHEN INITIATED
app.listen(PORT, function () {
	console.log("Listening at port: " + PORT);
});
