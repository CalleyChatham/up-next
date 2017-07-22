import React, { PropTypes, Component } from 'react';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class Login extends Component {
    render() {
        return (
            <FBLogin />
        );
    }
};


module.exports = Login;