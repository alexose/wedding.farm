var React = require('react')
var ReactDOM = require('react-dom');

var Nav = require('./nav.jsx');
var Clothes = require('./clothes.jsx');
var Rsvp = require('./rsvp.jsx');
var Activities = require('./activities.jsx');
var Accomodations = require('./accomodations.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var History = require('react-router').browserHistory;

var Home = React.createClass({
  render : function(){
    return (
      <div className="page centered">
        <img id="logo" src="/img/text.png"/>
        <ul className="dates">
          <li className="date bigger">
            <img id="oregon" src="/img/oregon.png"/>
            Ceremony October 8th, 2016
          </li>
          <li className="date">
            <img id="hawaii" src="/img/hawaii.png"/>
            Reception November 26th, 2016
          </li>
        </ul>
      </div>
    )
  }
});

// List of navigable elements
var tabList = [
  {
    name : '/',
    display : 'Home',
    component : <Home />
  },
  {
    name : '/attire',
    display : 'Attire',
    component : <Clothes />
  },
  {
    name : '/',
    display : 'Activities'
  },
  {
    name : '/accomodations',
    display : 'Accomodations',
    component : <Accomodations />
  },
  {
    name : '/rsvp',
    display : 'RSVP',
    component : <Rsvp />
  }
];

var App = React.createClass({
  getInitialState: function(){
    return { tab : tabList[0] }
  },
  render : function(){
    return (
      <div>
        {this.props.children}
        <Nav tabs={tabList} />
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={History}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/rsvp" component={Rsvp}>
        <Route path="/rsvp/:id" component={Rsvp} />
      </Route>
      <Route path="/attire" component={Clothes} />
      <Route path="/activities" component={Activities} />
      <Route path="/accomodations" component={Accomodations} />
    </Route>
  </Router>,
  document.getElementById('app')
);
