var React = require('react');
var PropTypes = React.PropTypes;

var Search = require('./search');
var Message = require('./message');
var Loading = require('./loading');
var List = require('./list');

var App = React.createClass({
  getInitialState: function() {
    return {
      pending: false,
      error : undefined,
      items: []
    };
  },
  pending: function(){
    this.setState({pending: true});
  },
  onData: function(err,res){
    if(err) return this.setState({
      error: err,
      pending: false
    });
    this.setState({
      error: undefined,
      items: res,
      pending: false
    });
  },
  render: function() {
    return (
      <div className='ui container'>
        <Search onData={this.onData.bind(this)} pending={this.pending.bind(this)}/>
        this.state.pending?
        <Loading />:
        (
          this.state.error?
          <Message data={this.state.error} />:
          <List items={this.state.items}/>
        )
      </div>
    );
  }

});

module.exports = App;
