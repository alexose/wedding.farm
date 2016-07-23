var React = require('react');

var Activities = React.createClass({
  render : function(){
    var centered = true;
    return(
      <div className={'page' + (centered ? ' centered' : ' overflowing') }>
        <div id='map' style='width: 400px; height: 300px;'></div>
      </div>
    )
  }
});

module.exports = Activities;
