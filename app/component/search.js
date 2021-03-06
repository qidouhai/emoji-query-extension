var React = require('react');
var PropTypes = React.PropTypes;
var query = require('../tools/query.js');

var Search = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    };
  },
  query: function(e){
    var q = this.state.query.trim();
    if(e.keyCode == 13 && q){
      // console.log(q);
      query(q, this.props.onData);
      this.props.pending();
    }
  },
  componentDidMount: function() {
    this.refs.input.focus();
  },
  changeText: function(e){
    this.setState({query: e.target.value});
  },
  render: function() {
    return (
      <div className='ui vertical segment' style={{borderColor: 'rgb(230,230,230)'}}>
      <div className="ui fluid large transparent input">
        <input type="text"
          placeholder="搜索..."
          value={this.state.query}
          onKeyDown={this.query}
          onChange={this.changeText}
          ref='input'
          style={{color: '#000'}}
        />
      </div>
      </div>
    );
  }
});

module.exports = Search;
