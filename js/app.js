var React = require('react')
var ReactDOM = require('react-dom');

var Clothes = require('./clothes.jsx');
var Nav = require('./nav.jsx');

var Home = React.createClass({
  render : function(){
    return (
      <h1>Are you ready to PARTY?</h1>
    )
  }
});

// List of navigable elements
var tabList = [
  {
    name : 'home',
    display : 'Home',
    component : <Home />
  },
  {
    name : 'clothes',
    display : 'Clothes',
    component : <Clothes />
  }
];

var App = React.createClass({
  getInitialState: function(){
    return { tab : tabList[0] }
  },
  navigate : function(tab){
    this.setState({ tab : tab });
  },
  render : function(){
    return (
      <div>
        {this.state.tab.component}
        <Nav onNavigate={this.navigate} tabs={tabList} />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
