var React = require('react');
var PropTypes = React.PropTypes;
var Item = require('./item');

var List = React.createClass({
  componentWillUnmount: function() {
    console.log('list component will ummount');
  },
  render: function() {
    return (
      <div className="ui massive horizontal list">
        {this.props.items.map(function(item, i){
          return (
            <Item key={i} data={item} />
          )
        })}
      </div>
    );
  }
});

module.exports = List;
