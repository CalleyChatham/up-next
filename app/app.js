// Declare React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

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
