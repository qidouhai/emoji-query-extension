var React = require('react');
var PropTypes = React.PropTypes;

var Item = React.createClass({

  showBtn: function(){
    if(this.state.showBtn){
      return <button className="ui mini basic icon button">
        <i className="copy icon"></i>
      </button>
    }
  },
  render: function() {
    return (
      <div className="item"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        >
        <div className="content">
        {this.props.data}
        </div>
      </div>
    );
  }

});

module.exports = Item;
