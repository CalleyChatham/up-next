'use strict';
// Include React as a dependency
var React = require("react");
var ReactDom = require("react-dom")
var QRCode = require('..');

// Create the Main component
//
class Main extends React.Component {
    state = {
        value: "http://facebook.github.io/react/",
        size: 128,
        fgColor: '#000000',
        bgColor: '#ffffff',
        level: 'L',
    };

    update = () => {
    this.setState({
                      value: this.refs.value.value || '',
    size: parseInt(this.refs.size.value) || 0,
    bgColor: this.refs.bgColor.value,
    fgColor: this.refs.fgColor.value,
    level: this.refs.level.value,
});
};

render() {
    var code = `<QRCode
  value={"${this.state.value}"}
  size={${this.state.size}}
  bgColor={"${this.state.bgColor}"}
  fgColor={"${this.state.fgColor}"}
  level={"${this.state.level}"}
/>`;
    return (
        <div>
        <div>
        <label>
        Size(px):
<br />
    <input
    ref="size"
    type="number"
    onChange={this.update}
    value={this.state.size}
/>
</label>
    </div>
    <div>
    <label>
    Background Color:
        <br />
    <input
    ref="bgColor"
    type="color"
    onChange={this.update}
    value={this.state.bgColor}
/>
</label>
    </div>
    <div>
    <label>
    Foreground Color:
        <br />
    <input
    ref="fgColor"
    type="color"
    onChange={this.update}
    value={this.state.fgColor}
/>
</label>
    </div>
    <div>
    <label>
    Error Level:
        <br />
    <select ref="level" onChange={this.update} value={this.state.level}>
<option value="L">L</option>
        <option value="M">M</option>
        <option value="Q">Q</option>
        <option value="H">H</option>
        </select>
        </label>
        </div>
        <div>
        <label>
        Value:
<br />
    <textarea
    rows="6"
    cols="80"
    ref="value"
    onChange={this.update}
    value={this.state.value}
/>
</label>
    </div>

    <div>
    <label>
    Use it:
        <br />
    <textarea rows="6" cols="80" disabled={true} value={code} />
        </label>
        </div>

        <QRCode
    value={this.state.value}
    size={this.state.size}
    fgColor={this.state.fgColor}
    bgColor={this.state.bgColor}
    level={this.state.level}
/>
</div>
);
}
}

// Export the module back to the route
module.exports = Main;
