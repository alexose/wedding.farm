var React = require('react')
var ReactDOM = require('react-dom');

var Nav = require('./nav.jsx');
var Clothes = require('./clothes.jsx');
var Rsvp = require('./rsvp.jsx');

var Home = React.createClass({
  render : function(){
    return (
      <div className="page centered">
        <h1>Are you ready to PARTY?</h1>
      </div>
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
  },
  {
    name : 'rsvp',
    display : 'RSVP',
    component : <Rsvp />
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
