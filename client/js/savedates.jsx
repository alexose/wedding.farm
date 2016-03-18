var React = require('react');

var SaveDate = React.createClass({
  getInitalState : function(){
    console.log('do stuff');
  },
  render : function(){
    return(
      <div class="savedate">
        <div class="front">
          <h1>Maluhia and Alex</h1>
          <div class="left">
            <p>Applegate, Oregon</p>
            <date>10.08.2016</date>
          </div>
          <div class="right">
            <p>Kea'au, Hawaii</p>
            <date>11.26.2016</date>
          </div>
        </div>
        <div class="back">
          <h1>Save the Date</h1>
          <p>Wedding in Applegate, Oregon</p>
          <date>October 8, 2016</date>
          <p>Reception in Kea’au, Hawaii</p>
          <date>November 26, 2016</date>
          <p>Formal invitation to follow</p>
          <p>wedding.farm/RSVP/HL3C</p>
        </div>
      </div>
    )
  }
});


