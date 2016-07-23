var React = require('react');
var leaflet = require('react-leaflet');
var Map = leaflet.Map;
var TileLayer = leaflet.TileLayer;
var Marker = leaflet.Marker;
var Popup = leaflet.Popup;

var Activities = React.createClass({
  render : function(){
    var centered = true;
    var position = [42.214405,-123.2016487];
    return(
      <div className={'page' + (centered ? ' centered' : ' overflowing') }>
        <Map center={position} zoom={13}>
          <TileLayer
            url="http://api.tiles.mapbox.com/v4/alexose.0o8bg002/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxleG9zZSIsImEiOiJjaXF6bWJrZmgwMml0ZnNrcTN2bDd5cHRyIn0.Rb9aStJNcXTcs1YzHEXiag"
            attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
});

module.exports = Activities;
