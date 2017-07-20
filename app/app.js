// Declare React Dependencies
import React = require("react");
import ReactDOM = require("react-dom");
import FacebookLogin from '../src/facebook';

// Grabs the Routes
var routes = require("./config/routes");

//Include the Main component
var Main = require("./components/Main");

// Include the Form Component
//var Form = require("./components/Form");


ReactDOM.render(
    //render content according to the routes page
    <Main />,

    document.getElementById("app")
);
