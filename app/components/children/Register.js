// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Register = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {className: 'Register'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name (required)',
                    value: this.props.value.name,
                }),
                React.createElement('input', {
                    type: 'Photo',
                    placeholder: 'Photo',
                    value: this.props.value.photo,
                }),
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.value.description,
                }),
                React.createElement('button', {type: 'submit'}, "Add Contact")  //Submit
            )
        )
    },
});

module.exports = Register;