// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var TruckList = React.createClass({
    render: function() {
        return (
            <div className="container">

                <p>Add truck location via google map/geocode api</p>


            </div>
        );
    }
});

module.exports = TruckList;