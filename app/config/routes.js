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


// Export the Routes
module.exports = (
    // High level component is the Router component.
    <Router history={browserHistory}>
    <Route path="/" component={Main}>

    {/* If user selects x or y show the appropriate component */}
    <Route path="x" component={x} />
    <Route path="y" component={y} />

    {/* If user selects any other path... we get the Home Route */}
    <IndexRoute component={x} />

    </Route>
    </Router>
);
