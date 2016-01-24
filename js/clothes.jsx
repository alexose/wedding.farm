var React = require('react')

var Clothes = React.createClass({
  render: function(){
    return (
      <div>
        <div className="paperdolls">
          <p>Paperdolls here</p>
        </div>
        <div className="clothes">
          <p>Clothes here</p>
        </div>
      </div>
    )
  }
});

module.exports = Clothes;
