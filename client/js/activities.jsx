var React = require('react');

var Activities = React.createClass({
  render : function(){
    var centered = true;
    return(
      <div className={'page' + (centered ? ' centered' : ' overflowing') }>
        <div>Activities!</div>
      </div>
    )
  }
});

module.exports = Activities;
