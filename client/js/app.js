var React = require('react')
var ReactDOM = require('react-dom');

var Nav = require('./nav.jsx');
var Clothes = require('./clothes.jsx');
var Rsvp = require('./rsvp.jsx');
var Activities = require('./activities.jsx');
var Accomodations = require('./accomodations.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Modal = require('react-modal');
var IndexRoute = require('react-router').IndexRoute;
var History = require('react-router').browserHistory;

var pubsub = require('./pubsub.js');

var Home = React.createClass({
  getInitialState : function(){
    return {
      modalIsOpen: false,
      whatIsOpen: false,
      registryIsOpen: false
    }
  },
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
    name : '/activities',
    display : 'Activities',
    component : <Activities />
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
    return { 
      tab : tabList[0],
      isModalOpen : false
    }
  },
  componentWillMount : function(){
    pubsub.subscribe('open-clothes-modal', function(){
      this.setState({ modalIsOpen: true });
    }.bind(this));
    pubsub.subscribe('open-what-modal', function(){
      this.setState({ whatIsOpen: true });
    }.bind(this));
  },
  componentWillUnmount : function(){
    pubsub.clearAllSubscriptions();
  },
  handleClick : function(e){
    e.preventDefault();
    pubsub.unsubscribe('open-clothes-modal');
    this.setState({ modalIsOpen: false });
  },
  handleWhatClick : function(e){
    e.preventDefault();
    this.setState({ whatIsOpen: false });
  },
  render : function(){

    var style = { 
      content: {
        position                   : 'absolute',
        top                        : '30%',
        left                       : '30%',
        right                      : '30%',
        bottom                     : '30%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        'text-align'               : 'center',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
      }
    };
    var what = { 
      content: {
        position                   : 'absolute',
        top                        : '25%',
        left                       : '25%',
        right                      : '25%',
        bottom                     : '25%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        'text-align'               : 'center',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
      }
    };

    return (
      <div>
        <Modal 
          isOpen={this.state.modalIsOpen}
          style={style}>
          <h3>High Heel Warning</h3>
          <p>This wedding will be in a rural setting.  Due to uneven terrain, high heels are not advised.</p>
          <p>
            <button onClick={this.handleClick}>I understand the risks</button>
          </p>
        </Modal>
        <Modal 
          isOpen={this.state.whatIsOpen}
          style={what}>
          <h3>What to wear</h3>
          <p>All jokes aside, we recommend practical footwear, as well as something warm to put on when the sun goes down.</p>
          <p>Dress for comfort, but don't sacrifice your personal brand.</p>
          <p>
            <button onClick={this.handleWhatClick}>Great!</button>
          </p>
        </Modal>
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
