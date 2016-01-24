var React = require('react')
var ReactDOM = require('react-dom');

var Clothes = require('./clothes.jsx');
var Nav = require('./nav.jsx');

ReactDOM.render(
  <div>
    <h1>Are you ready to PARTY?</h1>
    <Clothes />
    <Nav />
  </div>,
  document.getElementById('app')
);
