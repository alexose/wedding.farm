var React = require('react');

var Activities = React.createClass({
  render : function(){
    var centered = true;
    var position = [42.214405,-123.2016487];
    return(
      <div className={'page' + (centered ? ' centered' : ' overflowing') }>
      </div>
    )
  }
});

module.exports = Activities;
