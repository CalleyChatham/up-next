// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var TruckList = require ("../components/children/TruckList");
var Customer = require ("../components/children/Customer");
var Register = require ("../components/children/Register");
var QRCode = require ("../components/children/QRCode");
var Orders = require ("../components/children/Orders");
var Menu = require ("../components/children/Menu");
var Login = require ("../components/children/Login");


// Export the Routes
module.exports = (
    // High level component is the Router component.
    <Router history={browserHistory}>
    <Route path="/" component={Main}>

    <Route path="TruckList" component={TruckList}>
    <Route path="Customer" component={Customer} />
    <Route path="Register" component={Register} />
    <Route path="QRCode" component={QRCode} />
    <Route path="Orders" component={Orders} />
    <Route path="Menu" component={Menu} />
    <Route path="Login" component={Login} />
    </Route>
  
    {/* If user selects any other path... we get the Home Route */}
    <IndexRoute component={Main} />

    </Route>
    </Router>
);