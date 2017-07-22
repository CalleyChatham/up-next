// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

    // Here we render the function
    render: function() {

        return (

            <div className="main-container">
                <div className="container">
                    <h2>Input QR Code</h2>
                    <hr />
                    <p>
                        <Link to="/QRCode"><button className="btn btn-primary btn-lg">QRCode</button></Link>
                        <Link to="/TruckList"><button className="btn btn-primary btn-lg">Trucks around me</button></Link>
                        <Link to="/Login"><button className="btn btn-primary btn-lg">Login</button></Link>
                    <hr />
                        <p>Are you a food truck?<br />Get started here</p>
                    </p>
                </div>

                <div className="row">

                    {/* This code will dump the correct Child Component */}
                    {this.props.children}

                </div>

            </div>
        );
    }
});


// Export the module back to the route
module.exports = Main;
