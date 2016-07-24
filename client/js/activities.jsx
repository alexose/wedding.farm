var React = require('react');

var Activities = React.createClass({
  render : function(){
    var centered = true;
    var position = [42.214405,-123.2016487];
    return(
      <div className={'page' + (centered ? ' centered' : ' overflowing') }>
        <iframe width='100%' height='100%' frameBorder='0' src='https://a.tiles.mapbox.com/v4/alexose.0o8bg002/attribution,zoompan,zoomwheel,geocoder,share.html?access_token=pk.eyJ1IjoiYWxleG9zZSIsImEiOiJmZy1rQ1VBIn0.gyExB7jljQYa26ERP7ZOIQ'></iframe>
      </div>
    )
  }
});

module.exports = Activities;
