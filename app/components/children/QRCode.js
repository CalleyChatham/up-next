// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var QRCode = React.createClass({
    render: function() {
        return (
            <div className="container">

                <p>input QR Code Place holder</p>


            </div>
        );
    }
});

module.exports = QRCode;