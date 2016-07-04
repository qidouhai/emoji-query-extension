var React = require('react');
var PropTypes = React.PropTypes;
// 400 * 186
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
        <Search onData={this.onData} pending={this.pending} />
        <div className="ui segment" style={{minHeight: '104px'}}>
        {(function renderContent(){
          if(this.state.pending) {
            return (<Loading />);
          }else{
            return this.state.error?
            <Message data={this.state.error} />:
            <List items={this.state.items} />
          }
        }).bind(this)()}
        </div>
      </div>
    );
  }
});

module.exports = App;
