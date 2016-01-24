var React = require('react')

// Read contents of directories
var files = require('fs').readdirSync('./img/clothes');

var Garment = React.createClass({
  render : function(){
    return(
      <img src={'img/clothes/' + this.props.src} className="garment" />
    )
  }
});

var Clothes = React.createClass({
  render: function(){
    return (
      <div>
        <div className="paperdolls">
          <p>Paperdolls here</p>
        </div>
        <div className="clothes">
          {
            files.map(function(path){
              return (
                <Garment src={path} />
              )
            })
          }
          <p>Clothes here</p>
        </div>
      </div>
    )
  }
});

module.exports = Clothes;
