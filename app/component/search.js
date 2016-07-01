var React = require('react');
var PropTypes = React.PropTypes;
var query = require('../tools/query');

var Search = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    };
  },
  query: function(e){
    var q = this.state.query;
    if(e.keyCode == 13 && q){
      query(q, this.props.onData);
      this.props.pending();
    }
  },
  changeText: function(e){
    this.setState({query: e.target.value});
  },
  render: function() {
    return (
      <div className='ui vertical segment'>
      <div class="ui icon input">
        <input type="text"
          placeholder="搜索..."
          value={this.state.query}
          onKeyDown={this.query}
          onChange={this.changeText}
        />
        <i class="search icon"></i>
      </div>
      </div>
    );
  }

});

module.exports = Search;
