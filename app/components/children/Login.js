// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Login = React.createClass({
    render: function() {
        return (
            <div className="container">

                <p>Facebook Login</p>


            </div>
        );
    }
});

module.exports = Login;