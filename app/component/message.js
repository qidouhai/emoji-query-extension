var React = require('react');

module.exports = function(props){
  return (
    <div className='ui vertical segment'>
      {props.data.message}
    </div>
  )
};
