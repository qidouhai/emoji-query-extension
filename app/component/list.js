var React = require('react');
var PropTypes = React.PropTypes;
var Item = require('./item');

var List = React.createClass({

  render: function() {
    return (
      <div>
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
