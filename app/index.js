var React = require('react');
var render = require('react-dom').render;

var App = require('./component/app.js');

require('../semantic/dist/semantic.min.css');

render(<App />, document.querySelector('#emoji'));
