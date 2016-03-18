var React = require('react');
var request = require('superagent');

var Front = React.createClass({
  getInitalState : function(){
    console.log('do stuff');
  },
  render : function(){
    return(
      <div className="savedate front">
        <h1>Maluhia and Alex</h1>
        <div className="left">
          <p>Applegate, Oregon</p>
          <date>10.08.2016</date>
        </div>
        <div className="right">
          <p>Kea'au, Hawaii</p>
          <date>11.26.2016</date>
        </div>
      </div>
    )
  }
});

var Back = React.createClass({
  getInitalState : function(){
  },
  render : function(){
    var card = this.props.card;
    return(
      <div className="savedate back">
        <div className="left">
          <h1>Save the Date</h1>
          <p>Wedding in Applegate, Oregon</p>
          <date>October 8, 2016</date>
          <p>Reception in Kea’au, Hawaii</p>
          <date>November 26, 2016</date>
          <p>Formal invitation to follow</p>
          <p>wedding.farm/RSVP/{card.code}</p>
        </div>
        <div className="right">
          <div className="stamp">&nbsp;</div>
          <div className="address">
            <p> {card['Mail Name 1']} </p>
            <p> {card['Mail Name 2']} </p>
            <p> {card['Address 1']} </p>
            <p> {card['Address 2']} </p>
            <p> {card['City']} {card['State']} {card['Zip Code']} </p>
            <p> {card['Country']} </p>
          </div>
        </div>
      </div>
    )
  }
});

var Container = React.createClass({
  getInitialState: function(){
    request
      .get('/api/invitation/')
      .set('Accept', 'application/json')
      .end(function(err, data){
        var json = JSON.parse(data.text);

        var arr = [];
        for (var i in json){
          arr.push(json[i]);
        }

        this.setState({ cards : arr }); 
      }.bind(this));

    return { cards : [] };
  },
  render : function(){
    var cards = this.state.cards;
    return(
      <div className="savedate-container">
        {
          cards.map(function(d){
            return (
              <Back card={d} />
            )
          })
        }
        {
          cards.map(function(d){
            return (
              <Front />
            )
          })
        }
      </div>
    )
  }
});

module.exports = Container;
