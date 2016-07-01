var React = require('react');
var render = require('react-dom').render;

var app = require('./component/app');

require('../semantic/dist/semantic.min.css');

render(<app />, document.querySelector('#emoji'));
