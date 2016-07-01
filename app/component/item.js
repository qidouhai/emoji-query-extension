var React = require('react');
var PropTypes = React.PropTypes;

var Item = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.data}
      <div/>
    );
  }

});

module.exports = Item;
